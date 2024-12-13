import React, { useState } from "react";
import "./GetToKnowYourself.css";

const GetToKnowYourself = () => {
  const [step, setStep] = useState(1); // Track the current slide
  const [answers, setAnswers] = useState({
    ageGroup: "",
    skinType: "",
    priceRange: "",
    productType: "",
  });

  const handleSelect = (field, value) => {
    setAnswers({ ...answers, [field]: value });
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="slide">
            <h2>What is your age group?</h2>
            <div className="options-container">
              <div
                className="option-box"
                onClick={() => handleSelect("ageGroup", "Below 18")}
              >
                <img src="/images/teen.png" alt="Below 18" />
                <p>Below 18</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("ageGroup", "18-25")}
              >
                <img src="/images/young.png" alt="18-25" />
                <p>18-25</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("ageGroup", "26-35")}
              >
                <img src="/images/adult.png" alt="26-35" />
                <p>26-35</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("ageGroup", "36-45")}
              >
                <img src="/images/mature.png" alt="36-45" />
                <p>36-45</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("ageGroup", "Above 45")}
              >
                <img src="/images/senior.png" alt="Above 45" />
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
                className="option-box"
                onClick={() => handleSelect("skinType", "Normal")}
              >
                <img src="/images/normal.png" alt="Normal" />
                <p>Normal</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("skinType", "Dry")}
              >
                <img src="/images/dry.png" alt="Dry" />
                <p>Dry</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("skinType", "Oily")}
              >
                <img src="/images/oily.png" alt="Oily" />
                <p>Oily</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("skinType", "Combination")}
              >
                <img src="/images/combination.png" alt="Combination" />
                <p>Combination</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("skinType", "Sensitive")}
              >
                <img src="/images/sensitive.png" alt="Sensitive" />
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
            <div className="options-container">
              <div
                className="option-box"
                onClick={() => handleSelect("priceRange", "$10-$20")}
              >
                <p>$10-$20</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("priceRange", "$20-$50")}
              >
                <p>$20-$50</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("priceRange", "$50-$100")}
              >
                <p>$50-$100</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("priceRange", "$100+")}
              >
                <p>$100+</p>
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
                className="option-box"
                onClick={() => handleSelect("productType", "Cleanser")}
              >
                <img src="/images/cleanser.png" alt="Cleanser" />
                <p>Cleanser</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("productType", "Moisturizer")}
              >
                <img src="/images/moisturizer.png" alt="Moisturizer" />
                <p>Moisturizer</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("productType", "Serum")}
              >
                <img src="/images/serum.png" alt="Serum" />
                <p>Serum</p>
              </div>
              <div
                className="option-box"
                onClick={() => handleSelect("productType", "Sunscreen")}
              >
                <img src="/images/sunscreen.png" alt="Sunscreen" />
                <p>Sunscreen</p>
              </div>
            </div>
            <button onClick={previousStep}>Back</button>
          </div>
        );
      case 5:
        return (
          <div className="slide">
            <h2>Your Perfect Product</h2>
            <p>
              Based on your answers:
              <br />
              <strong>Age Group:</strong> {answers.ageGroup}
              <br />
              <strong>Skin Type:</strong> {answers.skinType}
              <br />
              <strong>Price Range:</strong> {answers.priceRange}
              <br />
              <strong>Product Type:</strong> {answers.productType}
            </p>
            <button onClick={previousStep}>Back</button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="get-to-know-container">{renderStep()}</div>;
};

export default GetToKnowYourself;