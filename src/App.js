import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import TaskManager from "./components/TaskManager"; 
import Notifikasi from "./components/Notifikasi"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Default: arahkan ke login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskManager />} />
        <Route path="/notifikasi" element={<Notifikasi />} />

        {/* Fallback jika user masuk route yang tidak ada */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
