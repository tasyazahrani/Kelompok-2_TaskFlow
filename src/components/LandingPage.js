import React, { useState, useEffect } from 'react';
import { Search, Instagram, Twitter, Facebook, Youtube, Check, BarChart3, Smartphone, Shield, CheckCircle, Calendar, Code, Server } from 'lucide-react';
import './LandingPage.css';
import TasyaAvatar from "../images/tasya.png";
import DeaAvatar from "../images/dea.png";

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Feature data
  const features = [
    {
      icon: React.createElement(CheckCircle, { size: 28 }),
      title: 'Manajemen Tugas',
      description: 'Buat, edit, dan organisir tugas dengan sistem kategori dan prioritas yang lengkap'
    },
    {
      icon: React.createElement(BarChart3, { size: 28 }),
      title: 'Prioritas Cerdas',
      description: 'Tentukan tingkat prioritas tugas dengan sistem warna dan notifikasi yang intuitif'
    },
    {
      icon: React.createElement(Calendar, { size: 28 }),
      title: 'Jadwal Fleksibel',
      description: 'Atur deadline dan pengingat waktu dengan kalender yang terintegrasi'
    },
    {
      icon: React.createElement(BarChart3, { size: 28 }),
      title: 'Analisis Produktivitas',
      description: 'Pantau perkembangan dan statistik penyelesaian tugas dengan grafik interaktif'
    },
    {
      icon: React.createElement(CheckCircle, { size: 28 }),
      title: 'Notifikasi Real-time',
      description: 'Dapatkan pengingat tepat waktu untuk tugas yang mendekati deadline'
    }
  ];

  // Team data
  const teamMembers = [
    {
      name: 'Tasya Zahrani',
      role: 'Frontend Developer & UI Designer',
      skills: ['Frontend', '2+ tahun'],
      bio: 'Mengembangkan antarmuka pengguna yang intuitif dan responsif untuk pengalaman terbaik',
      avatar: TasyaAvatar
    },
    {
      name: 'Michael Chen',
      role: 'Backend Developer & System Architect',
      skills: ['Backend', '2+ tahun'],
      bio: 'Membangun sistem backend yang scalable dan reliable untuk performa optimal',
      avatar: DeaAvatar
    }
  ];

  // Advantages data
  const advantages = [
    {
      icon: React.createElement(BarChart3, { size: 32 }),
      title: 'Produktivitas Meningkat',
      description: 'Platform kami membantu meningkatkan produktivitas hingga 75% dengan sistem yang terstruktur dan mudah diikuti',
      points: ['Drag & drop interface', 'Sistem prioritas otomatis', 'Progress tracking real-time']
    },
    {
      icon: React.createElement(Smartphone, { size: 32 }),
      title: 'Akses Multi-Device',
      description: 'Akses dan kelola dari mana saja dengan sinkronisasi cloud yang seamless',
      points: ['Web & mobile app', 'Sinkronisasi real-time', 'Offline capability']
    },
    {
      icon: React.createElement(Shield, { size: 32 }),
      title: 'Keamanan Data',
      description: 'Data dan informasi pribadi Anda terlindungi dengan sistem enkripsi end-to-end dan backup otomatis',
      points: ['Enkripsi AES-256', 'Backup harian otomatis', 'Two-factor authentication']
    }
  ];

  // Stats data
  const stats = [
    { number: '75%', label: 'Peningkatan produktivitas' },
    { number: '89%', label: 'Tugas diselesaikan tepat waktu' },
    { number: '15K+', label: 'Pengguna aktif' },
    { number: '96%', label: 'Tingkat kepuasan pengguna' }
  ];

  return React.createElement('div', { className: 'landing-container' },
    // Header
    React.createElement('header', { className: 'landing-header' },
      React.createElement('div', { className: 'header-content' },
        React.createElement('div', { className: 'logo-sidebar' }, 'LandingPage'),
        windowWidth >= 768 && React.createElement('nav', { className: 'desktop-nav' },
          React.createElement('ul', { className: 'nav-list' },
            ['beranda', 'fitur', 'tim', 'tentang'].map((item, index) =>
              React.createElement('li', { key: index },
                React.createElement('a', {
                  className: 'nav-link',
                  onClick: () => scrollToSection(item)
                }, item.charAt(0).toUpperCase() + item.slice(1))
              )
            )
          )
        ),
        windowWidth >= 768 && React.createElement('div', { className: 'auth-buttons' },
          React.createElement('a', {
            href: '/login',
            className: 'btn-login'
          }, 'Masuk'),
          React.createElement('a', {
            href: '/register',
            className: 'btn-register'
          }, 'Daftar')
        )
      )
    ),

    // Hero Section
    React.createElement('section', { className: 'hero-section', id: 'beranda' },
      React.createElement('div', { className: 'hero-content' },
        React.createElement('div', { className: 'hero-text' },
          React.createElement('h1', { className: 'hero-title' }, 'Tingkatkan Produktivitas Anda dengan Solusi Terbaik'),
          React.createElement('p', { className: 'hero-description' },
            'Platform kami membantu Anda mengatur, memprioritaskan, dan menyelesaikan pekerjaan dengan sistem manajemen yang intuitif dan powerful.'
          ),
          React.createElement('button', { className: 'cta-button' }, 'Mulai Sekarang'),
          React.createElement('div', { className: 'hero-stats' },
            React.createElement('span', null, '✨ 15.000+ pengguna bergabung')
          )
        ),
        React.createElement('div', { className: 'hero-visual' },
          React.createElement('div', { className: 'visual-container' },
            React.createElement('div', { className: 'visual-content' },
              React.createElement('div', { className: 'visual-icon' }, '🚀'),
              React.createElement('h3', null, 'LandingPage'),
              React.createElement('p', null, 'Produktivitas Maksimal')
            )
          )
        )
      )
    ),

    // Features Section
    React.createElement('section', { className: 'features-section', id: 'fitur' },
      React.createElement('div', { className: 'section-container' },
        React.createElement('h2', { className: 'section-title' }, 'Cari Fitur Kami'),
        React.createElement('div', { className: 'search-container' },
          React.createElement(Search, { size: 18, color: "#666", className: 'search-icon' }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Cari fitur yang Anda butuhkan...',
            className: 'search-input'
          }),
          React.createElement('button', { className: 'search-button' }, 'Cari')
        ),

        React.createElement('div', { className: 'features-content' },
          React.createElement('h3', { className: 'features-subtitle' }, 'Fitur Unggulan Kami'),
          React.createElement('div', { className: 'features-grid' },
            features.map((feature, index) =>
              React.createElement('div', {
                key: index,
                className: `feature-card feature-card-${index + 1}`
              },
                React.createElement('div', { className: 'feature-icon-container' }, feature.icon),
                React.createElement('h4', null, feature.title),
                React.createElement('p', null, feature.description)
              )
            )
          )
        )
      )
    ),

    // Team Section
    React.createElement('section', { className: 'team-section', id: 'tim' },
      React.createElement('div', { className: 'section-container' },
        React.createElement('h2', { className: 'section-title' }, 'Tim Pengembang Kami'),
        React.createElement('p', { className: 'section-description' },
          'Kenali tim yang mengembangkan platform menjadi solusi yang powerful'
        ),

        React.createElement('div', { className: 'team-grid' },
          teamMembers.map((member, index) =>
            React.createElement('div', {
              key: index,
              className: 'team-card'
            },
              React.createElement('div', { className: 'team-header' },
                React.createElement('div', { className: 'team-avatar' },
                  member.avatar ?
                    React.createElement('img', { src: member.avatar, alt: member.name }) :
                    React.createElement('div', { className: 'avatar-placeholder' }, '👨‍💻')
                )
              ),
              React.createElement('div', { className: 'team-info' },
                React.createElement('h4', null, member.name),
                React.createElement('p', { className: 'team-role' }, member.role),
                React.createElement('div', { className: 'team-meta' },
                  React.createElement('span', { className: 'meta-item' },
                    index === 0 ? React.createElement(Code, { size: 16 }) : React.createElement(Server, { size: 16 }),
                    member.skills[0]
                  ),
                  React.createElement('span', { className: 'meta-item' },
                    React.createElement(Calendar, { size: 16 }),
                    member.skills[1]
                  )
                ),
                React.createElement('p', { className: 'team-bio' }, member.bio)
              )
            )
          )
        )
      )
    ),

    // Advantages Section
    React.createElement('section', { className: 'advantages-section', id: 'tentang' },
      React.createElement('div', { className: 'section-container' },
        React.createElement('h2', { className: 'section-title' }, 'Keunggulan Platform Kami'),
        React.createElement('p', { className: 'section-description' },
          'Mengapa platform kami menjadi pilihan utama untuk kebutuhan sehari-hari'
        ),

        React.createElement('div', { className: 'advantages-list' },
          advantages.map((advantage, index) =>
            React.createElement('div', {
              key: index,
              className: 'advantage-item'
            },
              React.createElement('div', { className: 'advantage-icon' }, advantage.icon),
              React.createElement('div', { className: 'advantage-content' },
                React.createElement('h4', null, advantage.title),
                React.createElement('p', null, advantage.description),
                React.createElement('ul', { className: 'advantage-points' },
                  advantage.points.map((point, i) =>
                    React.createElement('li', { key: i },
                      React.createElement(Check, { size: 16, className: 'check-icon' }),
                      point
                    )
                  )
                )
              )
            )
          )
        ),

        React.createElement('div', { className: 'stats-grid' },
          stats.map((stat, index) =>
            React.createElement('div', {
              key: index,
              className: 'stat-card'
            },
              React.createElement('div', { className: 'stat-number' }, stat.number),
              React.createElement('p', null, stat.label)
            )
          )
        ),

        React.createElement('div', { className: 'cta-container' },
          React.createElement('a', {
            href: '/register',
            className: 'cta-button-large'
          }, 'Mulai Sekarang')
        )
      )
    ),

    // Footer
    React.createElement('footer', { className: 'landing-footer' },
      React.createElement('div', { className: 'footer-container' },
        React.createElement('div', { className: 'footer-content' },
          React.createElement('div', { className: 'footer-section' },
            React.createElement('h3', null, 'LandingPage'),
            React.createElement('p', null,
              'Platform solusi terbaik untuk produktivitas maksimal dalam pekerjaan sehari-hari.'
            ),
            React.createElement('div', { className: 'social-links' },
              [Instagram, Twitter, Facebook, Youtube].map((Icon, index) =>
                React.createElement('div', {
                  key: index,
                  className: 'social-icon'
                }, React.createElement(Icon, { size: 20 }))
              )
            )
          ),

          React.createElement('div', { className: 'footer-section' },
            React.createElement('h4', null, 'Halaman'),
            React.createElement('ul', null,
              ['beranda', 'fitur', 'tim', 'tentang'].map((item, index) =>
                React.createElement('li', { key: index },
                  React.createElement('a', {
                    className: 'footer-link',
                    onClick: () => scrollToSection(item)
                  }, item.charAt(0).toUpperCase() + item.slice(1))
                )
              )
            )
          ),

          React.createElement('div', { className: 'footer-section' },
            React.createElement('h4', null, 'Fitur'),
            React.createElement('ul', null,
              ['Manajemen Tugas', 'Prioritas Cerdas', 'Analisis Produktivitas', 'Notifikasi'].map((item, index) =>
                React.createElement('li', { key: index },
                  React.createElement('a', { className: 'footer-link' }, item)
                )
              )
            )
          ),

          React.createElement('div', { className: 'footer-section' },
            React.createElement('h4', null, 'Berlangganan'),
            React.createElement('p', null, 'Dapatkan tips produktivitas terbaru'),
            React.createElement('div', { className: 'subscribe-form' },
              React.createElement('input', {
                type: 'email',
                placeholder: 'Email anda...',
                className: 'subscribe-input'
              }),
              React.createElement('button', { className: 'subscribe-button' }, 'Kirim')
            )
          )
        ),

        React.createElement('div', { className: 'footer-bottom' },
          React.createElement('p', null, '© 2025 LandingPage. All rights reserved.'),
          React.createElement('div', { className: 'footer-links' },
            React.createElement('a', { className: 'footer-link' }, 'Kebijakan Privasi'),
            React.createElement('a', { className: 'footer-link' }, 'Syarat & Ketentuan')
          )
        )
      )
    )
  );
};

export default LandingPage;