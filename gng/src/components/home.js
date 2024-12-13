import React from "react";
import "./Home.css";
import background from "../images/background.webp";

const Home = () => {
  return (
    <div className="home-container">
      <img src={background} alt="Background" className="home-background" />
      <div className="home-content">
        <h1>Glow in Grace</h1>
        <h2>Your personalized journey to radiant skincare starts here!</h2>
        <div className="home-buttons">
          <button onClick={() => (window.location.href = "/gettoknowyourself")}>
            Get to Know Yourself Better
          </button>
          <button onClick={() => (window.location.href = "/locate-product")}>
            Locate a Product
          </button>
          <button onClick={() => (window.location.href = "/services/consult-specialist")}>
            Consult a Specialist
          </button>
        </div>
      </div>
      <footer>
        Glow in Grace is your trusted partner for personalized skincare.
        <br />
        <a href="/contact-us">Contact Us</a> | <a href="/faq">FAQ</a> |{" "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </footer>
    </div>
  );
};

export default Home;