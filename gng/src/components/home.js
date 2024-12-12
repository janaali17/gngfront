import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Glow in Grace</h1>
        <p>Your personalized journey to radiant skincare starts here!</p>
        <button className="get-started-button" onClick={() => navigate('/login')}>
          Get Started
        </button>
      </div>
      <div className="home-options">
        <button onClick={() => navigate('/services')}>Explore Services</button>
        <button onClick={() => navigate('/gettoknowyourself')}>Get to Know Yourself Better</button>
        <button onClick={() => navigate('/locate-product')}>Locate a Product</button>
        <button onClick={() => navigate('/feedback')}>Give Feedback</button>
      </div>
      <footer className="home-footer">
        Glow in Grace is your trusted partner for personalized skincare.
        <br />
        Contact us at info@glowingrace.com
      </footer>
    </div>
  );
};

export default Home;