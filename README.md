## 📌 TaskFlow - ToDo List App
TaskFlow adalah aplikasi ToDo List berbasis ReactJS yang membantu pengguna dalam mengelola aktivitas harian.
Aplikasi ini sudah dikontainerisasi menggunakan Docker sehingga bisa dengan mudah dijalankan di berbagai environment.

## 👩‍💻 Author
Dea Zasqia Pasaribu Malau (2308107010004) dan Tasya Zahrani (2308107010006)

## 🚀 Fitur Utama
1. Tambah, edit, dan hapus tugas harian
2. Penanda status tugas (selesai/belum)
3. Tampilan user-friendly berbasis ReactJS
4. Siap dijalankan dalam container Docker

## 🐳 Docker Hub Repository
Image Docker sudah tersedia di Docker Hub:
👉 tasyazahrani/taskflow

## Tag image untuk UTS:
LINK DOCKER: https://hub.docker.com/repository/docker/tasyazahrani/taskflow/general
tasyazahrani/taskflow:submit-UTS

⚡ Cara Menjalankan dengan Docker
1. Pull Image dari Docker Hub
docker pull tasyazahrani/taskflow:submit-UTS

2. Jalankan Container
- Jalankan di port 3000:
- docker run -d -p 3000:3000 tasyazahrani/taskflow:submit-UTS
Jika port 3000 sudah terpakai, bisa gunakan port lain, misalnya 3001:
- docker run -d -p 3001:3000 tasyazahrani/taskflow:submit-UTS

3. Akses Aplikasi
- Buka browser dan akses:
👉 http://localhost:3000
- atau jika pakai port lain:
👉 http://localhost:3001

## 🛠️ Pengembangan Lokal (Tanpa Docker)
1. Clone repository:
- git clone https://github.com/USERNAME/taskflow.git
- cd taskflow

2. Install dependencies:
npm install

3. Jalankan aplikasi:
npm start

4. Akses di browser: http://localhost:3000

### 📄 Lisensi
Proyek ini dibuat untuk keperluan akademik (UTS POPL 2025).