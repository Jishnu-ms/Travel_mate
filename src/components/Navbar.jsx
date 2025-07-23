import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="https://travelmateholidays.com/Resources/logo.png" alt="TravelMate Holidays" />
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
          <div className={menuOpen ? 'bar change' : 'bar'}></div>
        </div>

        {/* Nav links */}
       <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
  <li><a href="#home" onClick={() => { onNavigate('home'); toggleMenu(); }}>Home</a></li>
  <li><a href="#Secondpage" onClick={() => { onNavigate('about'); toggleMenu(); }}>About Us</a></li>
  <li><a href="#services" onClick={toggleMenu}>Services</a></li>
  <li><a href="#packages" onClick={toggleMenu}>Packages</a></li>
  <li>
    <a href="#contact" onClick={(e) => {
      e.preventDefault();
      onNavigate('contact');
      toggleMenu();
    }}>Contact</a>
  </li>
</ul>


        {/* ✅ Book Now Button */}
        <div className="book-now-btn">
          <a
            href="#book"
            className="book-btn"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('book');
              toggleMenu();
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

