// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Welcome to Glow in Grace</h1>
      <p>
        Your one-stop solution for personalized skincare recommendations, dermatologist
        appointments, and finding the best skincare products. Let us help you embrace
        your natural beauty and glow with grace.
      </p>
      
      <div style={{ marginTop: "30px" }}>
        <h2>Explore Our Features</h2>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
          <div>
            <h3>Get to Know Yourself</h3>
            <p>
              Discover products tailored to your skin type, age, and preferences. Start your journey to healthy, glowing skin.
            </p>
          </div>
          <div>
            <h3>Book an Appointment</h3>
            <p>
              Need expert advice? Schedule an appointment with our trusted dermatologists at your convenience.
            </p>
          </div>
          <div>
            <h3>Find the Best Products</h3>
            <p>
              Search for stores near you to get your recommended skincare products quickly and easily.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Why Choose Glow and Grace?</h2>
        <ul style={{ listStyleType: "disc", textAlign: "left", margin: "auto", maxWidth: "600px" }}>
          <li>Personalized skincare recommendations based on your unique needs.</li>
          <li>Access to certified dermatologists for professional guidance.</li>
          <li>A curated selection of skincare products for every budget.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;