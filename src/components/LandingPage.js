import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="container">
          <div className="logo">TaskFlow</div>
          <ul className="nav-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#features">Fitur</a></li>
            <li><a href="#tech">Teknologi</a></li>
            <li><a href="#developer">Developer</a></li>
            <li><a href="#demo">Demo</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>TaskFlow</h1>
            <p>Aplikasi web todolist modern yang dibangun dengan Laravel Framework</p>
            <div>
              <span className="tech-badge">🔥 Laravel 10</span>
              <span className="tech-badge">🎨 Bootstrap 5</span>
              <span className="tech-badge">🗄️ MySQL</span>
            </div>
            <a href="#features" className="cta-button">Jelajahi Fitur</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Fitur Unggulan</h2>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <div className="feature-icon">📋</div>
              <h3>CRUD Task Management</h3>
              <p>Sistem manajemen tugas lengkap dengan fitur Create, Read, Update, Delete menggunakan Laravel Eloquent ORM.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🔐</div>
              <h3>Authentication & Authorization</h3>
              <p>Sistem keamanan terintegrasi dengan fitur login, register, dan middleware protection.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">📊</div>
              <h3>Real-time Dashboard</h3>
              <p>Dashboard interaktif dengan grafik & statistik produktivitas menggunakan Chart.js.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Interface responsif dan mobile-friendly dengan Bootstrap 5.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">🔄</div>
              <h3>Database Migration</h3>
              <p>Struktur database terorganisir dengan Laravel Migration & Seeder.</p>
            </div>
            <div className="feature-card fade-in">
              <div className="feature-icon">⚡</div>
              <h3>Optimized Performance</h3>
              <p>Implementasi caching, lazy loading, dan query optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="tech-stack">
        <div className="container">
          <h2 className="section-title">Teknologi yang Digunakan</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <h4>🔥 Laravel 10</h4>
              <p>Framework PHP modern dengan arsitektur MVC dan Eloquent ORM.</p>
            </div>
            <div className="tech-item">
              <h4>🗄️ MySQL Database</h4>
              <p>Database relasional dengan indexing dan optimasi query.</p>
            </div>
            <div className="tech-item">
              <h4>🎨 Bootstrap 5</h4>
              <p>Framework CSS responsif dengan UI modern.</p>
            </div>
            <div className="tech-item">
              <h4>📊 Chart.js</h4>
              <p>Visualisasi data interaktif dengan grafik.</p>
            </div>
            <div className="tech-item">
              <h4>🔧 Blade Templating</h4>
              <p>Template engine Laravel untuk reusable components.</p>
            </div>
            <div className="tech-item">
              <h4>🚀 Composer & NPM</h4>
              <p>Manajemen dependency PHP & JavaScript.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="developer">
        <div className="container">
          <h2 className="section-title">Tentang Developer</h2>

          {/* Developer: Tasya */}
          <div className="developer-content">
            <div className="developer-image">
              <div className="profile-photo">
                <img src="/images/image.png" alt="Foto Tasya Zahrani" />
              </div>
            </div>
            <div className="developer-info">
              <h2>Tasya Zahrani</h2>
              <h3>Full-Stack Laravel Developer & Web Designer</h3>
              <p>Seorang web developer yang berspesialisasi dalam pengembangan aplikasi web menggunakan Laravel framework.</p>
              <p>Berpengalaman dalam membangun aplikasi full-stack dengan arsitektur MVC yang scalable dan maintainable.</p>
              <p><strong>Keahlian:</strong> Laravel • PHP • MySQL • JavaScript • Bootstrap • Git • RESTful API</p>
              <div className="social-links">
                <a href="#" className="social-link">📧</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">🐙</a>
              </div>
            </div>
          </div>

          {/* Developer: Dea */}
          <div className="developer-content">
            <div className="developer-image">
              <div className="profile-photo">
                <img src="/images/dea.png" alt="Foto Dea Zasqia Pasaribu Malau" />
              </div>
            </div>
            <div className="developer-info">
              <h2>Dea Zasqia Pasaribu Malau</h2>
              <h3>UI/UX Designer & Frontend Developer</h3>
              <p>Mahasiswa Informatika yang memiliki ketertarikan di bidang rekayasa perangkat lunak, khususnya UI/UX dan desain interaktif.</p>
              <p>Berpengalaman dalam membuat desain antarmuka modern serta mengimplementasikannya dengan HTML, CSS, dan React.</p>
              <p><strong>Keahlian:</strong> UI/UX • Figma • React.js • HTML • CSS • JavaScript • Git</p>
              <div className="social-links">
                <a href="#" className="social-link">📧</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">🐙</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="cta-section">
        <div className="container">
          <h2>Siap Mencoba TaskFlow?</h2>
          <p>Akses demo aplikasi web TaskFlow dan rasakan pengalaman produktivitas!</p>
          <div className="download-buttons">
            <Link to="/register" className="download-btn">🌐 Live Demo</Link>
            <a href="#" className="download-btn">📂 Source Code</a>
            <a href="#" className="download-btn">📖 Documentation</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 TaskFlow. Dibuat oleh Dea Zasqia Pasaribu Malau & Tasya Zahrani ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
