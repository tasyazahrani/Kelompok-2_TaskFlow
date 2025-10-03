import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pengaturan.css";

function Pengaturan() {
  // state sederhana untuk toggle dan input
  const [profileName, setProfileName] = useState("User TaskFlow");
  const [profileEmail, setProfileEmail] = useState("user@taskflow.com");
  const [theme, setTheme] = useState("pink");
  const [language, setLanguage] = useState("id");
  const [dateFormat, setDateFormat] = useState("dd/mm/yyyy");
  const [toggles, setToggles] = useState({
    compactView: false,
    pushNotifications: true,
    emailNotifications: true,
    notificationSound: true,
    quickAdd: true,
    confirmDelete: true,
    cloudSync: true,
  });
  const [defaultPriority, setDefaultPriority] = useState("medium");
  const [autoDelete, setAutoDelete] = useState("30");
  const [autoBackup, setAutoBackup] = useState("daily");

  const toggleSetting = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const changeProfilePicture = () => {
    alert("📷 Ubah foto profil belum diimplementasikan");
  };

  const exportData = () => {
    alert("📤 Data berhasil diexport!");
  };

  const importData = () => {
    alert("📥 Import data berhasil!");
  };

  const resetData = () => {
    if (window.confirm("Yakin ingin reset semua data?")) {
      alert("🗑️ Semua data direset!");
    }
  };

  const resetSettings = () => {
    setProfileName("User TaskFlow");
    setProfileEmail("user@taskflow.com");
    setTheme("pink");
    setLanguage("id");
    setDateFormat("dd/mm/yyyy");
    setDefaultPriority("medium");
    setAutoDelete("30");
    setAutoBackup("daily");
    setToggles({
      compactView: false,
      pushNotifications: true,
      emailNotifications: true,
      notificationSound: true,
      quickAdd: true,
      confirmDelete: true,
      cloudSync: true,
    });
    alert("🔄 Pengaturan direset ke default!");
  };

  const saveSettings = () => {
    alert("✅ Pengaturan berhasil disimpan!");
  };

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
            <Link to="/dashboard" className="nav-link">
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
            <Link to="/pengaturan" className="nav-link active">
              <span className="nav-icon">⚙️</span> Pengaturan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <span className="nav-icon">🚪</span> Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>⚙️ Pengaturan</h1>
          <p>Sesuaikan TaskFlow sesuai dengan preferensi dan kebutuhan Anda</p>
        </div>

        <div className="settings-container">
          {/* Profil */}
          <div className="settings-section">
            <h2 className="section-title">
              <span className="section-icon">👤</span> Profil Pengguna
            </h2>

            <div className="profile-section">
              <div className="profile-picture" onClick={changeProfilePicture}>
                {profileName[0]}
              </div>
              <div className="profile-info">
                <div className="profile-name">{profileName}</div>
                <div className="profile-email">{profileEmail}</div>
              </div>
              <button className="btn btn-secondary" onClick={changeProfilePicture}>
                📷 Ubah Foto
              </button>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-label">Nama Lengkap</div>
              </div>
              <div className="setting-control">
                <input
                  type="text"
                  className="setting-input"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                />
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <div className="setting-label">Email</div>
              </div>
              <div className="setting-control">
                <input
                  type="email"
                  className="setting-input"
                  value={profileEmail}
                  onChange={(e) => setProfileEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Preferensi Aplikasi */}
          <div className="settings-section">
            <h2 className="section-title">
              <span className="section-icon">🎨</span> Preferensi Aplikasi
            </h2>

            <div className="setting-item">
              <div className="setting-label">Tema Aplikasi</div>
              <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="pink">🌸 Pink</option>
                <option value="blue">🔵 Biru</option>
                <option value="green">🟢 Hijau</option>
                <option value="purple">🟣 Ungu</option>
                <option value="orange">🟠 Oranye</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-label">Bahasa</div>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="id">🇮🇩 Bahasa Indonesia</option>
                <option value="en">🇺🇸 English</option>
                <option value="ms">🇲🇾 Bahasa Malaysia</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-label">Format Tanggal</div>
              <select value={dateFormat} onChange={(e) => setDateFormat(e.target.value)}>
                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                <option value="yyyy-mm-dd">YYYY-MM-DD</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-label">Tampilan Kompak</div>
              <div
                className={`toggle-switch ${toggles.compactView ? "active" : ""}`}
                onClick={() => toggleSetting("compactView")}
              ></div>
            </div>
          </div>

          {/* Notifikasi */}
          <div className="settings-section">
            <h2 className="section-title">
              <span className="section-icon">🔔</span> Pengaturan Notifikasi
            </h2>

            <div className="setting-item">
              <div className="setting-label">Notifikasi Push</div>
              <div
                className={`toggle-switch ${toggles.pushNotifications ? "active" : ""}`}
                onClick={() => toggleSetting("pushNotifications")}
              ></div>
            </div>

            <div className="setting-item">
              <div className="setting-label">Email Notifikasi</div>
              <div
                className={`toggle-switch ${toggles.emailNotifications ? "active" : ""}`}
                onClick={() => toggleSetting("emailNotifications")}
              ></div>
            </div>

            <div className="setting-item">
              <div className="setting-label">Suara Notifikasi</div>
              <div
                className={`toggle-switch ${toggles.notificationSound ? "active" : ""}`}
                onClick={() => toggleSetting("notificationSound")}
              ></div>
            </div>
          </div>

          {/* Data & Privasi */}
          <div className="settings-section">
            <h2 className="section-title">
              <span className="section-icon">🔒</span> Data & Privasi
            </h2>
            <button className="btn btn-secondary" onClick={exportData}>
              📤 Export Data
            </button>
            <button className="btn btn-secondary" onClick={importData}>
              📥 Import Data
            </button>
            <button className="btn btn-danger" onClick={resetData}>
              🗑️ Reset Data
            </button>
          </div>

          {/* Tombol Simpan/Reset */}
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={resetSettings}>
              🔄 Reset ke Default
            </button>
            <button className="btn btn-primary" onClick={saveSettings}>
              💾 Simpan Pengaturan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengaturan;
