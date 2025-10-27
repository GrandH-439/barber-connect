import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import backgroundImage from '../assets/barber-bg.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* ✅ LIGHTER OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.25)', // was 0.45, now lighter
          zIndex: 1,
        }}
      ></div>

      <div className="overlay" style={{ position: 'relative', zIndex: 2, padding: '40px 20px' }}>
        <section className="header" data-aos="fade-up" style={{ textAlign: 'center' }}>
          <h1 className="shop-name" data-aos="zoom-in" data-aos-delay="200">
            Welcome to Grand H
          </h1>
          <p className="slogan" data-aos="fade-up" data-aos-delay="400">
            Sharp cuts. Clean fades. Real style.
          </p>
          <Link
            to="/booking"
            className="cta-button"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Book Appointment
          </Link>
        </section>

        <section className="why-choose" data-aos="fade-up">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-intro">
            At <strong>Grand H</strong>, every cut is crafted with precision and style.
          </p>

          <div className="why-list">
            <div className="service-card why-card" data-aos="zoom-in" data-aos-delay="150">
              <i className="fas fa-cut icon-large"></i>
              <h3>Clean Cuts</h3>
              <p>Sharp and detailed for your perfect look.</p>
            </div>

            <div className="service-card why-card" data-aos="zoom-in" data-aos-delay="300">
              <i className="fas fa-clock icon-large"></i>
              <h3>Flexible Hours</h3>
              <p>Open early till late — I fit your time.</p>
            </div>

            <div className="service-card why-card" data-aos="zoom-in" data-aos-delay="450">
              <i className="fas fa-user-check icon-large"></i>
              <h3>Personal Service</h3>
              <p>One barber. One vision — your best look.</p>
            </div>
          </div>
        </section>

        <section className="services" data-aos="fade-up">
          <h2 className="section-title">Our Services</h2>
          <div className="service-list">
            <div className="service-card" data-aos="flip-left" data-aos-delay="100">
              <h3>Cut</h3>
              <p className="price">R30</p>
              <p>Clean, classic male haircut.</p>
            </div>
            <div className="service-card" data-aos="flip-left" data-aos-delay="300">
              <h3>Cut & Dye</h3>
              <p className="price">R90</p>
              <p>Fresh cut with bold black dye.</p>
            </div>
            <div className="service-card" data-aos="flip-left" data-aos-delay="500">
              <h3>Chiskop</h3>
              <p className="price">R20</p>
              <p>Smooth, clean shave — done right.</p>
            </div>
          </div>
        </section>

        <section className="about" data-aos="fade-up">
          <p>
            <strong>Grand H</strong> is built on skill, passion, and precision.  
            Every cut shows pride and dedication to the craft.
          </p>
        </section>

        <section className="contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p><strong>📍</strong> Moshate</p>
          <p><strong>📞</strong> 060 697 5845</p>
          <p><strong>🕒</strong> 5 AM — Sunset</p>

          <div className="contact-buttons">
            <a href="https://wa.me/27606975845" target="_blank" rel="noreferrer" className="whatsapp-btn">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <a href="https://www.youtube.com/@GrandH8" target="_blank" rel="noreferrer" className="youtube-btn">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </div>
        </section>

        <a
          href="https://wa.me/27606975845"
          className="floating-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <footer className="footer">
          <p>© 2025 Grand H Barber Shop | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
