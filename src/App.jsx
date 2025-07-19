import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portraits from './pages/Portraits';
import Sports from './pages/Sports';
import Travel from './pages/Travel';
import Video from './pages/Video';
import './App.css';

export default function App() {
  return (
    <div>
      <header className="toolbar">
        <div className="toolbar-left">
          <div className="toolbar-title">Alex Yang</div>
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