import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portraits from './pages/Portraits';
import Sports from './pages/Sports';
import Travel from './pages/Travel';
import Video from './pages/Video';
import './App.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function App() {
  return (
    <div>
      <header className="toolbar">
        <div className="toolbar-left">
          <div className="toolbar-title" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Alex Yang
            </NavLink>
            <a
              href="https://www.instagram.com/ayangsrealm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ayangsrealm"
              style={{ color: '#000', display: 'flex', alignItems: 'center' }}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:aqyang.photography@gmail.com"
              aria-label="Email aqyang.photography@gmail.com"
              style={{ color: '#000', display: 'flex', alignItems: 'center' }}
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        <div className="toolbar-right">
          <nav className="toolbar-nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/portraits" className={({ isActive }) => isActive ? 'active' : ''}>Portraits</NavLink>
            <NavLink to="/sports" className={({ isActive }) => isActive ? 'active' : ''}>Sports</NavLink>
            <NavLink to="/travel" className={({ isActive }) => isActive ? 'active' : ''}>Travel</NavLink>
            <NavLink to="/video" className={({ isActive }) => isActive ? 'active' : ''}>Video</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          </nav>
        </div>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </main>
    </div>
  );
} 