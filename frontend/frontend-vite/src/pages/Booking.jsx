import React, { useState } from "react";
import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "haircut",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Use Render backend URL (no extra /bookings at the end)
  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://grandh-backend.onrender.com/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Correct endpoint → /api/bookings
      const response = await axios.post(`${API_BASE_URL}/bookings`, formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 20000,
      });

      if (response.status === 201) {
        alert("✅ Booking submitted successfully! We will confirm soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "haircut",
          date: "",
          time: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("❌ Booking error:", error);

      if (error.message.includes("timeout") || error.message.includes("Network Error")) {
        alert("⚠️ The server might be waking up. Please try again shortly.");
      } else if (error.response) {
        alert(`❌ Error: ${error.response.data.message || "Booking failed."}`);
      } else {
        alert("❌ Could not connect to the server. Please check your connection.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h1 className="booking-title">Book Your Appointment</h1>
        <p className="booking-subtitle">Reserve your spot at Grand H Barber Shop.</p>
        <div className="underline"></div>

        <form onSubmit={handleSubmit} className="booking-form" aria-label="Booking form">
          <h2 className="form-heading">Reservation Details</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Select Service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="haircut">Haircut – R30</option>
              <option value="dye">Cut & Dye – R90</option>
              <option value="chiskop">Chiskop – R20</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date*</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time*</label>
            <input
              id="time"
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Notes</label>
            <textarea
              id="message"
              name="message"
              placeholder="Any special requests?"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="book-btn" disabled={isSubmitting}>
            {isSubmitting ? "Booking..." : "Confirm Booking"}
          </button>
        </form>

        <footer className="booking-footer">
          <p>© 2025 Grand H Barber Shop | Driven by Passion</p>
        </footer>
      </div>
    </div>
  );
};

export default Booking;
