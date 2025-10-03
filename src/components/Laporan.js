import React from "react";
import "./Laporan.css";
import { Link } from "react-router-dom";

function Laporan() {
  // fungsi untuk tombol export
  const exportReport = () => {
    alert("Export laporan berhasil 🚀 (nanti bisa diganti ke download file PDF/Excel)");
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
              <span className="nav-icon">🏠</span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks" className="nav-link">
              <span className="nav-icon">📝</span>
              Tugas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notifikasi" className="nav-link">
              <span className="nav-icon">⭐</span>
              Pengingat
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/laporan" className="nav-link active">
              <span className="nav-icon">📊</span>
              Laporan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pengaturan" className="nav-link">
              <span className="nav-icon">⚙️</span>
              Pengaturan
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <span className="nav-icon">🚪</span>
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="welcome-text">
            <h1>Laporan Kemajuan</h1>
            <p>Pantau progress tugas akhir Anda secara real-time</p>
          </div>
          <button className="export-btn" onClick={exportReport}>
            📥 Export Laporan
          </button>
        </header>

        {/* Progress Overview */}
        <div className="progress-overview">
          <div className="overall-progress">
            <div className="circular-progress">
              <span className="progress-percentage">60%</span>
            </div>
            <h3 className="progress-title">Progress Keseluruhan</h3>
            <p className="progress-subtitle">12 dari 20 tugas selesai</p>
          </div>

          <div className="milestone-progress">
            <div
              className="circular-progress"
              style={{
                background:
                  "conic-gradient(#26de81 0deg, #26de81 288deg, #e9ecef 288deg)",
              }}
            >
              <span className="progress-percentage">80%</span>
            </div>
            <h3 className="progress-title">Milestone Tercapai</h3>
            <p className="progress-subtitle">4 dari 5 milestone</p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon completed">✅</div>
            <div className="stat-number">12</div>
            <div className="stat-label">Tugas Selesai</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon in-progress">⏳</div>
            <div className="stat-number">3</div>
            <div className="stat-label">Sedang Dikerjakan</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon pending">📝</div>
            <div className="stat-number">5</div>
            <div className="stat-label">Belum Dimulai</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon overdue">⚠️</div>
            <div className="stat-number">2</div>
            <div className="stat-label">Terlambat</div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="section-title">
          <span className="section-title-icon">📈</span>
          Timeline Progress
        </div>

        <div className="timeline-section">
          <div className="timeline">
            <div className="timeline-item completed">
              <div className="timeline-marker completed"></div>
              <div className="timeline-content">
                <h3>Proposal Penelitian</h3>
                <p>Penyusunan dan pengajuan proposal tugas akhir</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "100%" }}></div>
                </div>
                <div className="timeline-date">Selesai: 15 Januari 2025</div>
              </div>
            </div>

            <div className="timeline-item completed">
              <div className="timeline-marker completed"></div>
              <div className="timeline-content">
                <h3>Studi Literatur</h3>
                <p>Pengumpulan dan analisis referensi penelitian</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "100%" }}></div>
                </div>
                <div className="timeline-date">Selesai: 28 Februari 2025</div>
              </div>
            </div>

            <div className="timeline-item in-progress">
              <div className="timeline-marker in-progress"></div>
              <div className="timeline-content">
                <h3>Pengumpulan Data</h3>
                <p>Proses pengambilan dan kompilasi data penelitian</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "75%" }}></div>
                </div>
                <div className="timeline-date">Target: 30 April 2025</div>
              </div>
            </div>

            <div className="timeline-item pending">
              <div className="timeline-marker pending"></div>
              <div className="timeline-content">
                <h3>Analisis Data</h3>
                <p>Pengolahan dan interpretasi data penelitian</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "0%" }}></div>
                </div>
                <div className="timeline-date">Target: 31 Mei 2025</div>
              </div>
            </div>

            <div className="timeline-item pending">
              <div className="timeline-marker pending"></div>
              <div className="timeline-content">
                <h3>Penulisan Laporan</h3>
                <p>Penyusunan laporan akhir tugas akhir</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "0%" }}></div>
                </div>
                <div className="timeline-date">Target: 30 Juni 2025</div>
              </div>
            </div>

            <div className="timeline-item pending">
              <div className="timeline-marker pending"></div>
              <div className="timeline-content">
                <h3>Presentasi & Sidang</h3>
                <p>Persiapan dan pelaksanaan sidang tugas akhir</p>
                <div className="timeline-progress">
                  <div className="timeline-progress-bar" style={{ width: "0%" }}></div>
                </div>
                <div className="timeline-date">Target: 15 Juli 2025</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="section-title">
          <span className="section-title-icon">🕐</span>
          Aktivitas Terbaru
        </div>

        <div className="recent-activity">
          <div className="activity-item">
            <div className="activity-icon">✅</div>
            <div className="activity-content">
              <div className="activity-title">Menyelesaikan survei data responden</div>
              <div className="activity-time">2 jam yang lalu</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">📝</div>
            <div className="activity-content">
              <div className="activity-title">Memperbarui bab metodologi penelitian</div>
              <div className="activity-time">1 hari yang lalu</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">📊</div>
            <div className="activity-content">
              <div className="activity-title">Menganalisis data kuantitatif minggu ke-3</div>
              <div className="activity-time">3 hari yang lalu</div>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-icon">💬</div>
            <div className="activity-content">
              <div className="activity-title">Meeting dengan dosen pembimbing</div>
              <div className="activity-time">5 hari yang lalu</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Laporan;
