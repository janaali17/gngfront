import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Glow in Grace</h1>
        <p>Your personalized journey to radiant skincare starts here!</p>
        <button className="cta-button">Get Started</button>
      </div>

      {/* Action Buttons Section */}
      <div className="actions-section">
        <div className="button-grid">
          <button className="action-button">Explore Services</button>
          <button className="action-button">Get to Know Yourself Better</button>
          <button className="action-button">Locate a Product</button>
          <button className="action-button">Give Feedback</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>
          Glow in Grace is your trusted partner for personalized skincare.
          <br />
          Contact us at info@glowingrace.com.
        </p>
      </footer>
    </div>
  );
};

export default Home;