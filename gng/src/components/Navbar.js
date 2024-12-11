import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle main menu
  const [activeSubMenu, setActiveSubMenu] = useState(null); // Track open submenu
  const navigate = useNavigate();

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        &#9776; {/* Hamburger Icon */}
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          {/* Main Menu */}
          {activeSubMenu === null && (
            <>
              <button onClick={() => navigate("/login")}>Log In</button>
              <button onClick={() => navigate("/register")}>Sign Up</button>
              <button onClick={() => toggleSubMenu("services")}>Services</button>
              <button onClick={() => navigate("/gettoknowyourself")}>
                Get to Know Yourself Better
              </button>
              <button onClick={() => navigate("/feedback")}>Feedback</button>
              <button onClick={() => navigate("/locate-product")}>
                Locate Product
              </button>
            </>
          )}

          {/* Services Submenu */}
          {activeSubMenu === "services" && (
            <>
              <button onClick={() => navigate("/consult-specialist")}>
                Consult a Specialist
              </button>
              <button onClick={() => navigate("/online-services")}>
                Online Services
              </button>
              <button onClick={() => setActiveSubMenu(null)}>Back</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;