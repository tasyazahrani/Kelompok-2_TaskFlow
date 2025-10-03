import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    const title = e.target.taskTitle.value;
    const priority = e.target.taskPriority.value;
    const deadline = e.target.taskDeadline.value;
    const notes = e.target.taskNotes.value;
    const subtasksRaw = e.target.taskSubtasks.value;
    const subtasks = subtasksRaw.split("\n").filter((s) => s.trim() !== "");
    const completedSubtasks = subtasks.map(() => false);

    const newTask = {
      id: tasks.length + 1,
      title,
      priority,
      deadline,
      notes,
      subtasks,
      completedSubtasks,
    };

    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
    e.target.reset();
  };

  const toggleSubtask = (taskId, subIndex) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              completedSubtasks: t.completedSubtasks.map((c, i) =>
                i === subIndex ? !c : c
              ),
            }
          : t
      )
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "today"
      ? tasks.filter((t) => {
          if (!t.deadline) return false;
          const today = new Date();
          const taskDate = new Date(t.deadline);
          return (
            taskDate.getFullYear() === today.getFullYear() &&
            taskDate.getMonth() === today.getMonth() &&
            taskDate.getDate() === today.getDate()
          );
        })
      : tasks.filter((t) => t.priority === filter);

  const completedCount = tasks.reduce(
    (sum, t) =>
      sum +
      t.completedSubtasks.filter((c) => c === true).length /
        (t.subtasks.length || 1),
    0
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-section">
          <div className="logo">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <div className="app-name">TaskFlow</div>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link active">
              <span className="nav-icon">🏠</span> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks" className="nav-link">
              <span className="nav-icon">📝</span> Tugas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifikasi" className="nav-link">
              <span className="nav-icon">⭐</span> Pengingat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/laporan" className="nav-link">
              <span className="nav-icon">📊</span> Laporan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pengaturan" className="nav-link">
              <span className="nav-icon">⚙️</span> Pengaturan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/landingpage" className="nav-link">
              <span className="nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="welcome-text">
            <h1>Selamat Datang! 👋</h1>
            <p>Hari ini adalah hari yang tepat untuk menyelesaikan tugas-tugas penting Anda</p>
          </div>
          <div className="header-stats">
            <div className="stat-card">
              <div className="stat-number">{tasks.length}</div>
              <div className="stat-label">Total Tugas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{Math.round(completedCount)}</div>
              <div className="stat-label">Selesai</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{tasks.length - Math.round(completedCount)}</div>
              <div className="stat-label">Menunggu</div>
            </div>
          </div>
        </div>

       {/* Quick Actions */}
        <div className="quick-actions">
          <h2 className="section-title unique-title">
            <span className="section-title-icon">⚡</span> Aksi Cepat
          </h2>
          <div className="action-buttons">
            <button className="action-btn unique-btn" onClick={openModal}>
              ➕ Tambah Tugas Baru
            </button>
            <button className="action-btn unique-btn" onClick={() => setFilter("today")}>
              📅 Tugas Hari Ini
            </button>
            <button className="action-btn unique-btn" onClick={() => setFilter("high")}>
              🔥 Prioritas Tinggi
            </button>
            <button className="action-btn unique-btn" onClick={() => setFilter("all")}>
              📊 Semua Tugas
            </button>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="tasks-section">
          <div className="tasks-container">
            <h2 className="section-title">
              <span className="section-title-icon">📋</span> Daftar Tugas
            </h2>
            <div className="task-filters">
              <button className={`filter-btn ${filter==="all"?"active":""}`} onClick={()=>setFilter("all")}>Semua</button>
              <button className={`filter-btn ${filter==="high"?"active":""}`} onClick={()=>setFilter("high")}>Tinggi</button>
              <button className={`filter-btn ${filter==="medium"?"active":""}`} onClick={()=>setFilter("medium")}>Sedang</button>
              <button className={`filter-btn ${filter==="low"?"active":""}`} onClick={()=>setFilter("low")}>Rendah</button>
              <button className={`filter-btn ${filter==="today"?"active":""}`} onClick={()=>setFilter("today")}>Hari Ini</button>
            </div>

            <div className="tasks-list">
              {filteredTasks.map((task) => {
                const totalSub = task.subtasks.length;
                const doneSub = task.completedSubtasks.filter(c=>c).length;
                const progress = totalSub?Math.round((doneSub/totalSub)*100):0;

                const deadlineDate = task.deadline ? new Date(task.deadline) : null;
                const today = new Date();
                const isToday = deadlineDate && deadlineDate.toDateString()===today.toDateString();
                const isOverdue = deadlineDate && deadlineDate < today;

                return (
                  <div key={task.id} className={`task-item priority-${task.priority}`}>
                    <div className="task-header">
                      <div className="task-title">{task.title}</div>
                      <button className="delete-btn" onClick={()=>setTasks(tasks.filter(t=>t.id!==task.id))}>Hapus</button>
                    </div>
                    <div className="task-meta">
                      <span className={`priority-badge priority-${task.priority}`}>{task.priority.toUpperCase()}</span>
                      {task.deadline && <span className={`deadline ${isOverdue?"overdue":isToday?"today":""}`}>{new Date(task.deadline).toLocaleString()}</span>}
                    </div>
                    <div className="task-progress">
                      <div className="progress-bar" style={{width:`${progress}%`}}></div>
                    </div>
                    <div className="subtasks">
                      {task.subtasks.map((sub,i)=>(
                        <div key={i} className="subtask">
                          <div className={`checkbox ${task.completedSubtasks[i]?"checked":""}`} onClick={()=>toggleSubtask(task.id,i)}>
                            {task.completedSubtasks[i]?"✔":""}
                          </div>
                          <div className={`subtask-text ${task.completedSubtasks[i]?"completed":""}`}>{sub}</div>
                        </div>
                      ))}
                    </div>
                    {task.notes && <div className="task-notes"><div className="notes-title">Catatan:</div><div className="notes-content">{task.notes}</div></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Container */}
          <div className="progress-container">
            <h2 className="section-title">
              <span className="section-title-icon">📈</span> Kemajuan
            </h2>
            <div className="progress-overview">
              <div className="circular-progress" style={{background:`conic-gradient(#ED4A81 0deg, #ED4A81 ${Math.round((completedCount/tasks.length)*360||0)}deg, #e9ecef 0deg)`}}>
                <div className="progress-percentage">{Math.round((completedCount/tasks.length)*100)||0}%</div>
              </div>
              <div className="progress-stats">
                <div className="progress-stat">
                  <div className="progress-stat-number">{Math.round(completedCount)}</div>
                  <div className="progress-stat-label">Selesai</div>
                </div>
                <div className="progress-stat">
                  <div className="progress-stat-number">{tasks.length}</div>
                  <div className="progress-stat-label">Total</div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="notifications">
              <h3 style={{color:"#333", marginBottom:"1rem"}}>🔔 Pengingat</h3>
              <div className="notification-item">
                <div className="notification-icon">⏰</div>
                <div className="notification-content">
                  <div className="notification-title">Deadline Tugas Akhir</div>
                  <div className="notification-time">2 jam lagi</div>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">📝</div>
                <div className="notification-content">
                  <div className="notification-title">Review Laporan</div>
                  <div className="notification-time">Besok pagi</div>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-icon">📞</div>
                <div className="notification-content">
                  <div className="notification-title">Meeting dengan Dosen</div>
                  <div className="notification-time">3 hari lagi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Tambah Tugas Baru</div>
              <button className="close-btn" onClick={closeModal}>&times;</button>
            </div>
            <form onSubmit={handleAddTask}>
              <div className="form-group">
                <label className="form-label">Judul Tugas</label>
                <input type="text" name="taskTitle" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Prioritas</label>
                <select name="taskPriority" className="form-select">
                  <option value="high">Tinggi</option>
                  <option value="medium">Sedang</option>
                  <option value="low">Rendah</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Deadline</label>
                <input type="datetime-local" name="taskDeadline" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Catatan</label>
                <textarea name="taskNotes" className="form-textarea"></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Sub-tugas (satu per baris)</label>
                <textarea name="taskSubtasks" className="form-textarea"></textarea>
              </div>
              <button type="submit" className="submit-btn">Tambahkan</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
