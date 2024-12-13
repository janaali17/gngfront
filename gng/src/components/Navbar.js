import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger menu button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icon for the menu */}
      </button>

      {/* Navbar links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </NavLink>

        <NavLink to="/services/consult-specialist" className="nav-link" onClick={toggleMenu}>
          Consult a Specialist
        </NavLink>

        <NavLink to="/services/online-services" className="nav-link" onClick={toggleMenu}>
          Online Services
        </NavLink>

        <NavLink to="/feedback" className="nav-link" onClick={toggleMenu}>
          Feedback
        </NavLink>

        <NavLink to="/gettoknowyourself" className="nav-link" onClick={toggleMenu}>
          Get to Know Yourself Better
        </NavLink>

        <NavLink to="/locate-product" className="nav-link" onClick={toggleMenu}>
          Locate a Product
        </NavLink>
      </div>

      {/* Login and Sign Up Links */}
      <div className="navbar-right">
        <NavLink to="/login" className="nav-link" onClick={toggleMenu}>
          Log In
        </NavLink>
        <NavLink to="/register" className="nav-link" onClick={toggleMenu}>
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;