import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle main menu visibility
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track open submenu

  const toggleMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          {activeSubMenu === null && (
            <>
              <button onClick={() => navigate("login")}>Log In</button>
              <button onClick={() => navigate("register")}>Sign Up</button>
              <button onClick={() => toggleMenu("services")}>Services</button>
              <button onClick={() => navigate("gettoknowyourself")}>
                Get to Know Yourself Better
              </button>
              <button onClick={() => navigate("feedback")}>Feedback</button>
              <button onClick={() => navigate("locate-product")}>
                Locate Product
              </button>
            </>
          )}

          {/* Services Submenu */}
          {activeSubMenu === "services" && (
            <div className="submenu">
              <button onClick={() => navigate("appointment")}>
                Consult a Specialist
              </button>
              <button onClick={() => navigate("online-services")}>
                Online Services
              </button>
              <button className="back-button" onClick={() => setActiveSubMenu(null)}>
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;