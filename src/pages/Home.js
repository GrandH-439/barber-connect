import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Barber Experience</h1>
          <p>Where style meets precision. Book your perfect cut today.</p>
          <Link to="/booking" className="cta-button">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Haircut & Style</h3>
              <p className="price">$30</p>
              <p>Professional haircut with styling</p>
            </div>
            <div className="service-card">
              <h3>Beard Trim</h3>
              <p className="price">$15</p>
              <p>Precise beard shaping and grooming</p>
            </div>
            <div className="service-card">
              <h3>Full Service</h3>
              <p className="price">$40</p>
              <p>Haircut + Beard trim combo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;