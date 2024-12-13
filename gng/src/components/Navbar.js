import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  // Toggle the main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSubmenuOpen(false); // Close submenu when toggling the main menu
  };

  // Toggle the Services submenu
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Hamburger menu button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Icon for the menu */}
      </button>

  
      {/* Navbar links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {/* Home Link */}
        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleSubmenu}>
            Services
          </button>
          {isSubmenuOpen && (
            <div className="dropdown-menu">
              <NavLink
                to="/services/consult-specialist"
                className="dropdown-item"
                onClick={toggleMenu}
              >
                Consult a Specialist
              </NavLink>
              <NavLink
                to="/services/online-services"
                className="dropdown-item"
                onClick={toggleMenu}
              >
                Online Services
              </NavLink>
            </div>
          )}
        </div>

        {/* Additional Links */}
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
        <NavLink to="/signup" className="nav-link" onClick={toggleMenu}>
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;