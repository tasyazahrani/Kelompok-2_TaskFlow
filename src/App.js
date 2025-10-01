import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // Simple routing berdasarkan URL path
  const path = window.location.pathname;
  
  // Render komponen berdasarkan path
  if (path === '/login' || path === '/') {
    return <Login />;
  } else if (path === '/register') {
    return <Register />;
  }
  
  // Default ke login jika path tidak dikenali
  return <Login />;
}

export default App;