import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Ensure you have the correct CSS file linked
import { FaHome, FaUser, FaProductHunt, FaConciergeBell, FaCommentAlt, FaLocationArrow } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* App Name */}
      <h1 className="app-name">Glow in Grace</h1>

      {/* Log In/Sign Up Links */}
      <div className="auth-links">
        <Link to="/login">Log In</Link>
        <Link to="/register">Sign Up</Link>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="menu-item">
            <FaHome className="menu-icon" /> Home
          </Link>
          <Link to="/services" className="menu-item">
            <FaConciergeBell className="menu-icon" /> Services
          </Link>
          <Link to="/gettoknowyourself" className="menu-item">
            <FaUser className="menu-icon" /> Get to Know Yourself Better
          </Link>
          <Link to="/feedback" className="menu-item">
            <FaCommentAlt className="menu-icon" /> Feedback
          </Link>
          <Link to="/locate-product" className="menu-item">
            <FaLocationArrow className="menu-icon" /> Locate Product
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;