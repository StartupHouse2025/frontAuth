import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './Routes/GeneralRoutes/routes';
import './app.css';
import Sidebar from './Components/sidebar/sidebar';

function AppContent() {
  const location = useLocation();
  const hideSidebar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="app-container">
      {!hideSidebar && <Sidebar />}
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
