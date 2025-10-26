import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'haircut',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      alert('✅ Booking submitted successfully! We will confirm your appointment soon.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'haircut',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      alert('❌ Error submitting booking. Please try again.');
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-page">
      <div className="container">
        <h1 className="section-title">Book Your Appointment</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="haircut">Haircut & Style - $30</option>
              <option value="beard-trim">Beard Trim - $15</option>
              <option value="full-service">Full Service - $40</option>
            </select>
          </div>
          
          <div className="form-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Special requests or notes..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          
          <button type="submit" className="cta-button" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;