import React from "react";
import { NavLink } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>Select a service to explore:</p>
      <div className="services-options">
        <NavLink to="/services/consultspecialist" className="service-link">
          Consult a Specialist
        </NavLink>
        <NavLink to="/services/onlineservices" className="service-link">
          Online Services
        </NavLink>
        <NavLink to="/feedback" className="service-link">
          Feedback
        </NavLink>
      </div>
    </div>
  );
};

export default Services;