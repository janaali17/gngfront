import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaConciergeBell, FaUser, FaCommentAlt, FaLocationArrow, FaChevronDown } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleSubmenu = () => setSubmenuOpen(!isSubmenuOpen);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <h1 className="navbar-title">Glow in Grace</h1>
      <div className="nav-right">
        <Link to="/login" className="nav-link">
          Log In
        </Link>
        <Link to="/register" className="nav-link">
          Sign Up
        </Link>
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <Link to="/" className="menu-item">
            <FaHome className="menu-icon" /> Home
          </Link>
          <div className="menu-item" onClick={toggleSubmenu}>
            <FaConciergeBell className="menu-icon" /> Services <FaChevronDown className="submenu-icon" />
          </div>
          {isSubmenuOpen && (
            <div className="submenu">
              <Link to="/services/consult-specialist" className="submenu-item">
                Consult Specialist
              </Link>
              <Link to="/services/online-services" className="submenu-item">
                Online Services
              </Link>
            </div>
          )}
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
}

export default Navbar;