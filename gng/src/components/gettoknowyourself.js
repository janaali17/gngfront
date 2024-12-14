import React, { useState, useEffect } from "react";
import "./GetToKnowYourself.css";
import products from "../data/products"; // Import the product list

const GetToKnowYourself = () => {
  const [step, setStep] = useState(1); // Track the current slide
  const [answers, setAnswers] = useState({
    ageGroup: "",
    skinType: "",
    priceRange: "",
    productType: "",
  });
  const [recommendation, setRecommendation] = useState(""); // For storing the recommendation

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  // Calculate recommendation when transitioning to step 5
  useEffect(() => {
    if (step === 5) {
      const matchedProduct = products.find(
        (product) =>
          product.ageGroup === answers.ageGroup &&
          product.skinType === answers.skinType &&
          product.priceRange === answers.priceRange &&
          product.productType === answers.productType
      );

      if (matchedProduct && matchedProduct.name) {
        setRecommendation(matchedProduct.name);
      } else {
        setRecommendation("No matching product found. Try adjusting your answers!");
      }
    }
  }, [step, answers]); // Re-run only when step or answers change

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="slide">
            <h2>What is your age group?</h2>
            <div className="options-container">
              <div
                className="option-box age-below18"
                onClick={() => handleSelect("ageGroup", "Below 18")}
              >
                <p>Below 18</p>
              </div>
              <div
                className="option-box age-18to25"
                onClick={() => handleSelect("ageGroup", "18-25")}
              >
                <p>18-25</p>
              </div>
              <div
                className="option-box age-26to35"
                onClick={() => handleSelect("ageGroup", "26-35")}
              >
                <p>26-35</p>
              </div>
              <div
                className="option-box age-36to45"
                onClick={() => handleSelect("ageGroup", "36-45")}
              >
                <p>36-45</p>
              </div>
              <div
                className="option-box age-above45"
                onClick={() => handleSelect("ageGroup", "Above 45")}
              >
                <p>Above 45</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="slide">
            <h2>What is your skin type?</h2>
            <div className="options-container">
              <div
                className="option-box skin-normal"
                onClick={() => handleSelect("skinType", "Normal")}
              >
                <p>Normal</p>
              </div>
              <div
                className="option-box skin-dry"
                onClick={() => handleSelect("skinType", "Dry")}
              >
                <p>Dry</p>
              </div>
              <div
                className="option-box skin-oily"
                onClick={() => handleSelect("skinType", "Oily")}
              >
                <p>Oily</p>
              </div>
              <div
                className="option-box skin-combination"
                onClick={() => handleSelect("skinType", "Combination")}
              >
                <p>Combination</p>
              </div>
              <div
                className="option-box skin-sensitive"
                onClick={() => handleSelect("skinType", "Sensitive")}
              >
                <p>Sensitive</p>
              </div>
            </div>
            <button onClick={previousStep}>Back</button>
          </div>
        );
        case 3:
          return (
            <div className="slide">
              <h2>What is your price range?</h2>
              <div className="price-range-container">
                <div
                  className="price-box"
                  onClick={() => handleSelect("priceRange", "$10-$20")}
                >
                  $10-$20
                </div>
                <div
                  className="price-box"
                  onClick={() => handleSelect("priceRange", "$20-$50")}
                >
                  $20-$50
                </div>
                <div
                  className="price-box"
                  onClick={() => handleSelect("priceRange", "$50-$100")}
                >
                  $50-$100
                </div>
                <div
                  className="price-box"
                  onClick={() => handleSelect("priceRange", "$100+")}
                >
                  $100+
                </div>
              </div>
              <button onClick={previousStep}>Back</button>
            </div>
          
        );
      case 4:
        return (
          <div className="slide">
            <h2>What type of product are you looking for?</h2>
            <div className="options-container">
              <div
                className="option-box product-cleanser"
                onClick={() => handleSelect("productType", "Cleanser")}
              >
                <p>Cleanser</p>
              </div>
              <div
                className="option-box product-moisturizer"
                onClick={() => handleSelect("productType", "Moisturizer")}
              >
                <p>Moisturizer</p>
              </div>
              <div
                className="option-box product-serum"
                onClick={() => handleSelect("productType", "Serum")}
              >
                <p>Serum</p>
              </div>
              <div
                className="option-box product-sunscreen"
                onClick={() => handleSelect("productType", "Sunscreen")}
              >
                <p>Sunscreen</p>
              </div>
            </div>
            <button onClick={previousStep}>Back</button>
          </div>
        );
        case 5:
          return (
            <div className="slide">
              <div className="answer-box">
                <h2>Your Perfect Product</h2>
                <p>
                  <strong>Age Group:</strong> {answers.ageGroup} <br />
                  <strong>Skin Type:</strong> {answers.skinType} <br />
                  <strong>Price Range:</strong> {answers.priceRange} <br />
                  <strong>Product Type:</strong> {answers.productType} <br />
                </p>
                <h3>Recommendation: {recommendation}</h3>
                <button onClick={previousStep}>Back</button>
              </div>
            </div>
          );
      
      default:
        return null;
    }
  };

  return (
    <div className="get-to-know-yourself-container">
      {renderStep()}
    </div>
  );
};

export default GetToKnowYourself;