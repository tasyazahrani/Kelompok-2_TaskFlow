import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TaskManager.css";

function TaskManager() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    priority: "medium",
    deadline: "",
    notes: "",
    subtasks: ""
  });
  const [filter, setFilter] = useState("all");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.replace("task", "").toLowerCase()]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...formData,
      id: Date.now(),
      status: "pending",
      subtasks: formData.subtasks ? formData.subtasks.split("\n").filter(st => st.trim()) : []
    };
    setTasks([...tasks, newTask]);
    setFormData({ title: "", priority: "medium", deadline: "", notes: "", subtasks: "" });
    closeModal();
  };

  const toggleTaskComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
        : task
    ));
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return task.status === "pending";
    if (filter === "completed") return task.status === "completed";
    if (filter === "overdue") {
      return task.deadline && new Date(task.deadline) < new Date() && task.status !== "completed";
    }
    return true;
  });

  const getPriorityLabel = (priority) => {
    switch(priority) {
      case "high": return "🔥 Tinggi";
      case "medium": return "⚡ Sedang";
      case "low": return "🌱 Rendah";
      default: return priority;
    }
  };

  const isOverdue = (deadline) => {
    return deadline && new Date(deadline) < new Date();
  };

  return (
    <div className="task-manager-container">
      {/* Background Decorations */}
      <div className="task-manager-bg-decoration"></div>
      <div className="task-manager-bg-decoration"></div>
      <div className="task-manager-bg-decoration"></div>
      <div className="task-manager-bg-decoration"></div>

      {/* Sidebar */}
      <div className="task-manager-sidebar">
        <div className="task-manager-logo-section">
          <div className="task-manager-logo">
            <svg viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <div className="task-manager-app-name">TaskFlow</div>
        </div>
        <ul className="task-manager-nav-menu">
          <li className="task-manager-nav-item">
            <Link to="/dashboard" className="task-manager-nav-link">
              <span className="task-manager-nav-icon">🏠</span> Dashboard
            </Link>
          </li>
          <li className="task-manager-nav-item">
            <Link to="/tasks" className="task-manager-nav-link active">
              <span className="task-manager-nav-icon">📝</span> Tugas
            </Link>
          </li>
          <li className="task-manager-nav-item">
            <Link to="/notifikasi" className="task-manager-nav-link">
              <span className="task-manager-nav-icon">⭐</span> Pengingat
            </Link>
          </li>
          <li className="task-manager-nav-item">
            <Link to="/laporan" className="task-manager-nav-link">
              <span className="task-manager-nav-icon">📊</span> Laporan
            </Link>
          </li>
          <li className="task-manager-nav-item">
            <Link to="/pengaturan" className="task-manager-nav-link">
              <span className="task-manager-nav-icon">⚙️</span> Pengaturan
            </Link>
          </li>
          <li className="task-manager-nav-item">
            <Link to="/landingpage" className="task-manager-nav-link">
              <span className="task-manager-nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Container */}
      <div className="task-manager-main-container">
        <div className="task-manager-header">
          <div className="task-manager-header-content">
            <h1>Task Manager</h1>
            <p>Kelola tugas Anda dengan deadline dan prioritas</p>
          </div>
          <button className="task-manager-add-task-btn" onClick={openModal}>
            ➕ Tambah Tugas
          </button>
        </div>

        <div className="task-manager-main-content">
          <div className="task-manager-task-list">
            <div className="task-manager-filter-tabs">
              {["all", "pending", "completed", "overdue"].map((f) => (
                <div
                  key={f}
                  className={`task-manager-filter-tab ${filter === f ? "active" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f === "all" ? "Semua" : 
                   f === "pending" ? "Aktif" : 
                   f === "completed" ? "Selesai" : "Terlambat"}
                </div>
              ))}
            </div>

            <h2 className="task-manager-section-title">
              <span className="task-manager-section-title-icon">📋</span>
              Daftar Tugas
            </h2>

            <div className="task-manager-task-container">
              {filteredTasks.length === 0 ? (
                <div className="task-manager-empty-state">
                  Belum ada tugas. Tambahkan tugas pertama Anda!
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <div 
                    key={task.id} 
                    className={`task-manager-task-item priority-${task.priority} ${task.status === "completed" ? "completed" : ""}`}
                  >
                    <div className="task-manager-task-header">
                      <div>
                        <h3 className="task-manager-task-title">{task.title}</h3>
                        {task.notes && (
                          <p className="task-manager-task-description">{task.notes}</p>
                        )}
                      </div>
                      <span className={`task-manager-priority-badge ${task.priority}`}>
                        {getPriorityLabel(task.priority)}
                      </span>
                    </div>
                    
                    {task.subtasks && task.subtasks.length > 0 && (
                      <div className="task-manager-subtasks-list">
                        {task.subtasks.map((st, i) => (
                          <div key={i} className="task-manager-subtask-item">
                            <div className="task-manager-subtask-checkbox"></div>
                            {st}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="task-manager-task-meta">
                      {task.deadline && (
                        <span className={`task-manager-task-deadline ${isOverdue(task.deadline) && task.status !== "completed" ? "overdue" : ""}`}>
                          ⏰ {new Date(task.deadline).toLocaleString('id-ID', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      )}
                    </div>

                    <div className="task-manager-task-actions">
                      <button 
                        className="task-manager-task-action-btn task-manager-complete-btn" 
                        onClick={() => toggleTaskComplete(task.id)}
                        title={task.status === "completed" ? "Tandai belum selesai" : "Tandai selesai"}
                      >
                        ✓
                      </button>
                      <button 
                        className="task-manager-task-action-btn task-manager-delete-btn" 
                        onClick={() => deleteTask(task.id)}
                        title="Hapus tugas"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="task-manager-modal">
          <div className="task-manager-modal-content">
            <div className="task-manager-modal-header">
              <h2 className="task-manager-modal-title">➕ Tambah Tugas Baru</h2>
              <button className="task-manager-close-btn" onClick={closeModal}>×</button>
            </div>

            <form className="task-manager-modal-form" onSubmit={handleSubmit}>
              <div className="task-manager-form-group">
                <label className="task-manager-form-label">Judul Tugas</label>
                <input
                  type="text"
                  id="taskTitle"
                  className="task-manager-form-input"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Masukkan judul tugas..."
                  required
                />
              </div>

              <div className="task-manager-form-row">
                <div className="task-manager-form-group">
                  <label className="task-manager-form-label">Prioritas</label>
                  <select 
                    id="taskPriority" 
                    className="task-manager-form-select"
                    value={formData.priority} 
                    onChange={handleChange}
                  >
                    <option value="high">🔥 Tinggi</option>
                    <option value="medium">⚡ Sedang</option>
                    <option value="low">🌱 Rendah</option>
                  </select>
                </div>
                <div className="task-manager-form-group">
                  <label className="task-manager-form-label">Deadline</label>
                  <input
                    type="datetime-local"
                    id="taskDeadline"
                    className="task-manager-form-input"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="task-manager-form-group">
                <label className="task-manager-form-label">Catatan</label>
                <textarea
                  id="taskNotes"
                  className="task-manager-form-textarea"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tambahkan catatan untuk tugas ini..."
                ></textarea>
              </div>

              <div className="task-manager-form-group">
                <label className="task-manager-form-label">Sub-tugas (pisahkan dengan enter)</label>
                <textarea
                  id="taskSubtasks"
                  className="task-manager-form-textarea"
                  value={formData.subtasks}
                  onChange={handleChange}
                  placeholder="Sub-tugas 1&#10;Sub-tugas 2&#10;Sub-tugas 3"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="task-manager-submit-btn"
              >
                ✨ Tambah Tugas
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskManager;