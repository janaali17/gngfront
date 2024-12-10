// src/components/BookAppointment.js
import React, { useState } from "react";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    diagnosis: "",
    doctor_name: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call to send appointment details to the backend
    fetch("http://localhost:1784/booking/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Appointment booked successfully!");
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while booking your appointment.");
      });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Diagnosis (e.g., Skin Issue or Concern):
          <input
            type="text"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Doctor's Name:
          <input
            type="text"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Appointment Time (e.g., 2024-12-15 14:00):
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;