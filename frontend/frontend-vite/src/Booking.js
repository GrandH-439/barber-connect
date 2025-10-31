import React, { useState } from "react";
import axios from "axios";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await axios.post(`${API_URL}/api/bookings`, formData);

      alert("✅ Booking successful!");
      setFormData({ name: "", service: "", date: "", time: "" });
      console.log("📦 Server Response:", response.data);
    } catch (error) {
      console.error("❌ Booking error:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option value="Cut">Cut - R30</option>
          <option value="Chiskop">Chiskop - R20</option>
          <option value="Cut and Dye">Cut and Dye - R90</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
