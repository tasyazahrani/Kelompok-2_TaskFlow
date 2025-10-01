import React, { useState } from "react";
import "./Notifikasi.css";

function Notifikasi() {
  const [reminders, setReminders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // form state
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAddReminder = (e) => {
    e.preventDefault();
    const newReminder = {
      id: Date.now(),
      title,
      date,
      time,
    };
    setReminders([...reminders, newReminder]);
    setTitle("");
    setDate("");
    setTime("");
    setShowReminderModal(false);
    triggerAlert("Pengingat berhasil disimpan!");
  };

  const triggerAlert = (msg) => {
    setAlertMessage(msg);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const filteredReminders = reminders.filter((r) => {
    if (filter === "all") return true;
    if (filter === "today") {
      return r.date === new Date().toISOString().split("T")[0];
    }
    return true;
  });

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
          <li><a href="/dashboard" className="nav-link">🏠 Dashboard</a></li>
          <li><a href="/tugas" className="nav-link">📝 Tugas</a></li>
          <li><a href="/notifikasi" className="nav-link active">⭐ Pengingat</a></li>
          <li><a href="/laporan" className="nav-link">📊 Laporan</a></li>
          <li><a href="/pengaturan" className="nav-link">⚙️ Pengaturan</a></li>
          <li><a href="/landingpage" className="nav-link">🚪 Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="welcome-text">
            <h1>Pengingat & Notifikasi</h1>
            <p>Kelola pengingat tugas dan notifikasi Anda</p>
          </div>
          <button
            className="notification-settings-btn"
            onClick={() => setShowSettingsModal(true)}
          >
            ⚙️ Pengaturan Notifikasi
          </button>
        </div>

        <div className="content-layout">
          {/* Reminders */}
          <div className="reminders-container">
            <div className="section-title">🔔 Pengingat Aktif</div>

            <button
              className="add-reminder-btn"
              onClick={() => setShowReminderModal(true)}
            >
              ➕ Tambah Pengingat
            </button>

            <div className="reminder-filters">
              <button
                className={`filter-btn ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                Semua
              </button>
              <button
                className={`filter-btn ${filter === "today" ? "active" : ""}`}
                onClick={() => setFilter("today")}
              >
                Hari Ini
              </button>
            </div>

            <div id="reminders-list">
              {filteredReminders.length === 0 ? (
                <p>Tidak ada pengingat</p>
              ) : (
                filteredReminders.map((rem) => (
                  <div key={rem.id} className="reminder-item">
                    <h4>{rem.title}</h4>
                    <p>
                      {rem.date} - {rem.time}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Notifications */}
          <div className="notifications-container">
            <div className="section-title">📥 Notifikasi Terbaru</div>
            <p>Belum ada notifikasi baru</p>
          </div>
        </div>
      </div>

      {/* Reminder Modal */}
      {showReminderModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Tambah Pengingat Baru</h2>
              <button className="close-btn" onClick={() => setShowReminderModal(false)}>
                &times;
              </button>
            </div>
            <form onSubmit={handleAddReminder}>
              <div className="form-group">
                <label className="form-label">Judul Pengingat</label>
                <input
                  type="text"
                  className="form-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Tanggal</label>
                  <input
                    type="date"
                    className="form-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Waktu</label>
                  <input
                    type="time"
                    className="form-input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Simpan Pengingat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Pengaturan Notifikasi</h2>
              <button className="close-btn" onClick={() => setShowSettingsModal(false)}>
                &times;
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowSettingsModal(false);
                triggerAlert("Pengaturan notifikasi berhasil disimpan!");
              }}
            >
              <div className="form-group">
                <label className="form-label">Notifikasi Browser</label>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="form-group">
                <label className="form-label">Notifikasi Email</label>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="form-group">
                <label className="form-label">Suara Notifikasi</label>
                <input type="checkbox" />
              </div>

              <button type="submit" className="submit-btn">
                Simpan Pengaturan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Alert Notification */}
      {showAlert && (
        <div className="alert-notification">
          <span>✅ {alertMessage}</span>
        </div>
      )}
    </div>
  );
}

export default Notifikasi;
