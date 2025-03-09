import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../Pages/Login/loginPage';
import RegisterPage from '../../Pages/Register/registerPage';
import Home from '../../Pages/Home/home';
import About from '../../Pages/About/about';
import LandingPage from '../../Pages/LandingPage/landingPage';
import './routes.css'; // Import the CSS file

function AppRoutes() {
    return (
        <div className="centered-content">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
}

export default AppRoutes;
