import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Project from './Project.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import About from './About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
