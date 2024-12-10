// src/components/GetToKnowYourself.js
import React, { useState } from "react";

const GetToKnowYourself = () => {
  const [formData, setFormData] = useState({
    age: "",
    skinType: "",
    priceRange: "",
    productType: "",
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call to fetch skincare recommendations
    fetch("http://localhost:1784/skincare/getdata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data); // Update recommendations based on the response
        alert("Recommendations fetched successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while fetching recommendations.");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Get to Know Yourself</h1>
      <p>
        Fill out the form below to get personalized skincare product
        recommendations tailored to your needs.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Skin Type:
          <select name="skinType" value={formData.skinType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="dry">Dry</option>
            <option value="oily">Oily</option>
            <option value="combination">Combination</option>
            <option value="sensitive">Sensitive</option>
          </select>
        </label>
        <br />
        <label>
          Price Range:
          <select name="priceRange" value={formData.priceRange} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="low">Low ($0-$20)</option>
            <option value="medium">Medium ($20-$50)</option>
            <option value="high">High ($50+)</option>
          </select>
        </label>
        <br />
        <label>
          Product Type:
          <select name="productType" value={formData.productType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="moisturizer">Moisturizer</option>
            <option value="cleanser">Cleanser</option>
            <option value="sunscreen">Sunscreen</option>
            <option value="serum">Serum</option>
          </select>
        </label>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Get Recommendations
        </button>
      </form>

      {/* Display Recommendations */}
      {recommendations.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Recommendations</h2>
          <ul>
            {recommendations.map((item, index) => (
              <li key={index}>
                <strong>{item.productName}</strong> - {item.brandName} (${item.price})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetToKnowYourself;