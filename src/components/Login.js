import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobile: '',
    password: ''
  });
  
  const [feedback, setFeedback] = useState({
    show: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('login', '').toLowerCase();
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Ambil data users yang tersimpan
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Cari user berdasarkan mobile dan password
    const user = users.find(
      u => u.mobile === formData.mobile && u.password === formData.password
    );
    
    if (user) {
      // Login berhasil
      setFeedback({
        show: true,
        message: 'Login successful! Redirecting...',
        type: 'success'
      });
      
      // Simpan session user yang sedang login
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      // Redirect ke dashboard setelah 1.5 detik
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      // Login gagal
      setFeedback({
        show: true,
        message: 'Invalid mobile number or password. Please sign up first if you don\'t have an account.',
        type: 'error'
      });
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Please contact support to reset your password');
  };

  return (
    <div className="login-container">
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
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>
          
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="loginMobile">Mobile</label>
              <input
                type="tel"
                id="loginMobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="08473589556"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                id="loginPassword"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="form-footer">
              <a href="#" id="forgotPassword" onClick={handleForgotPassword}>
                Forgot Password?
              </a>
            </div>
            
            <button type="submit" className="btn btn-primary">
              LOG IN
            </button>
          </form>
          
          <div className="switch-form">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}