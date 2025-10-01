import React, { useState } from 'react';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [feedback, setFeedback] = useState({
    show: false,
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('register', '').toLowerCase();
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ambil data users yang sudah ada
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Cek apakah mobile sudah terdaftar
    const existingUser = users.find(u => u.mobile === formData.mobile);
    
    if (existingUser) {
      setFeedback({
        show: true,
        message: 'Mobile number already registered. Please login instead.',
        type: 'error'
      });
      return;
    }
    
    // Cek apakah email sudah terdaftar
    const existingEmail = users.find(u => u.email === formData.email);
    
    if (existingEmail) {
      setFeedback({
        show: true,
        message: 'Email already registered. Please use another email.',
        type: 'error'
      });
      return;
    }
    
    // Simpan user baru
    users.push({
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
      registeredAt: new Date().toISOString()
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    
    setFeedback({
      show: true,
      message: 'Registration successful! Redirecting to login...',
      type: 'success'
    });
    
    // Redirect ke login setelah 2 detik
    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="bg-decoration"></div>
      <div className="bg-decoration"></div>
      <div className="bg-decoration"></div>
      <div className="bg-decoration"></div>
      
      <div className="container">
        <div className="splash-screen">
          <div className="logo">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              <path d="M10.95,18.95C10.95,19.5 10.55,19.95 10,19.95C9.45,19.95 9.05,19.5 9.05,18.95C9.05,18.45 9.45,18 10,18C10.55,18 10.95,18.45 10.95,18.95M12.95,16.95C12.95,17.5 12.55,17.95 12,17.95C11.45,17.95 11.05,17.5 11.05,16.95C11.05,16.45 11.45,16 12,16C12.55,16 12.95,16.45 12.95,16.95M8.95,16.95C8.95,17.5 8.55,17.95 8,17.95C7.45,17.95 7.05,17.5 7.05,16.95C7.05,16.45 7.45,16 8,16C8.55,16 8.95,16.45 8.95,16.95M10.95,14.95C10.95,15.5 10.55,15.95 10,15.95C9.45,15.95 9.05,15.5 9.05,14.95C9.05,14.45 9.45,14 10,14C10.55,14 10.95,14.45 10.95,14.95M12.95,12.95C12.95,13.5 12.55,13.95 12,13.95C11.45,13.95 11.05,13.5 11.05,12.95C11.05,12.45 11.45,12 12,12C12.55,12 12.95,12.45 12.95,12.95M8.95,12.95C8.95,13.5 8.55,13.95 8,13.95C7.45,13.95 7.05,13.5 7.05,12.95C7.05,12.45 7.45,12 8,12C8.55,12 8.95,12.45 8.95,12.95"/>
            </svg>
          </div>
          <h1>Todo List</h1>
          <p>Manage your tasks efficiently</p>
        </div>
        
        <div className="auth-form">
          {feedback.show && (
            <div className={`feedback ${feedback.type}`}>
              {feedback.message}
            </div>
          )}
          
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Join us today</p>
          </div>
          
          <form id="registerForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="registerName">Full Name</label>
              <input
                type="text"
                id="registerName"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abdullah Afnan"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                id="registerEmail"
                value={formData.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerMobile">Mobile</label>
              <input
                type="tel"
                id="registerMobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="08473589556"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                id="registerPassword"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength="6"
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          
          <div className="switch-form">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}