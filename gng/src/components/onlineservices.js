import React, { useState } from "react";
import "./OnlineServices.css";

const OnlineServices = () => {
  const [faq, setFaq] = useState(null);

  const toggleFaq = (id) => {
    setFaq(faq === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h1>Help & FAQ</h1>
      <div className="faq-item">
        <h3 onClick={() => toggleFaq(1)}>How can I find the right products for me?</h3>
        {faq === 1 && <p>Our personalized tool helps you choose products based on your skin type, age, and preferences.</p>}
      </div>
      <div className="faq-item">
        <h3 onClick={() => toggleFaq(2)}>What is Glow in Grace?</h3>
        {faq === 2 && <p>Glow in Grace is your one-stop platform for skincare consultations, product recommendations, and dermatological support.</p>}
      </div>
    </div>
  );
};

export default OnlineServices;