import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import './App.css';

export default function App() {
  return (
    <div>
      <header className="toolbar">
        <div className="toolbar-left">
          <nav className="toolbar-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          </nav>
        </div>
        <div className="toolbar-center">
          <div className="toolbar-title">Alex Yang</div>
        </div>
        <div className="toolbar-right">
          Icons
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
} 