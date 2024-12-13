import React, { useState } from "react";
import "./ConsultSpecialist.css";

const ConsultSpecialist = () => {
  const [formData, setFormData] = useState({
    name: "",
    diagnosis: "",
    doctorName: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Booked Successfully!");
  };

  return (
    <div className="consult-container">
      <div className="consult-content">
        <h1>Book Your Appointment</h1>
        <p>Select the options below to schedule your appointment.</p>
        <form onSubmit={handleSubmit} className="consult-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <label>Diagnosis</label>
          <select name="diagnosis" value={formData.diagnosis} onChange={handleChange} required>
            <option value="">Select your diagnosis</option>
            <option value="Acne">Acne</option>
            <option value="Eczema">Eczema</option>
            <option value="Psoriasis">Psoriasis</option>
            <option value="Other">Other</option>
          </select>
          <label>Doctor's Name</label>
          <select name="doctorName" value={formData.doctorName} onChange={handleChange} required>
            <option value="">Choose a doctor</option>
            <option value="Dr. Amir">Dr. Amir</option>
            <option value="Dr. Sherouk">Dr. Sherouk</option>
            <option value="Dr. Ashry">Dr. Ashry</option>
          </select>
          <label>Preferred Time</label>
          <select name="time" value={formData.time} onChange={handleChange} required>
            <option value="">Select a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="6:00 PM">6:00 PM</option>
          </select>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
};

export default ConsultSpecialist;