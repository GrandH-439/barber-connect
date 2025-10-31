import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content glow">
          <h1>WELCOME TO</h1>
          <h2>GRAND H</h2>
          <p>Sharp Cuts. ere ke lokishe hlogo tsalena. Sleek Style.</p>

          {/* Animated person walking */}
          <div className="walking-person"></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why">
        <h2>WHY CHOOSE US</h2>
        <div className="underline"></div>
        <p>
          At Grand H, every cut is crafted with precision and pride. We combine
          tradition with modern style to give you that clean, confident look.
        </p>

        <div className="why-cards">
          <div className="card">
            <h3>Clean Cuts</h3>
            <p>Sharp fades and neat finishes every time.</p>
          </div>
          <div className="card">
            <h3>Personal Service</h3>
            <p>One barber, one goal — your perfect style.</p>
          </div>
          <div className="card">
            <h3>Affordable</h3>
            <p>Premium service at fair prices, always.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>OUR SERVICES</h2>
        <div className="underline"></div>
        <div className="service-cards">
          <div className="service-card">
            <h3>Cut</h3>
            <h4>R30</h4>
            <p>Clean, classic male haircut.</p>
          </div>
          <div className="service-card">
            <h3>Cut & Dye</h3>
            <h4>R90</h4>
            <p>Fresh cut with bold black dye.</p>
          </div>
          <div className="service-card">
            <h3>Chiskop</h3>
            <h4>R20</h4>
            <p>Smooth, clean shave – done right.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="underline"></div>
        <p>
          Grand H is built on skill, passion, and precision. Every customer is
          shown pride and dedication to the craft.
        </p>

        <div className="contact-info">
          <p>📍 Mosate</p>
          <p>📞 060 697 5845</p>
          <p>🕒 5 AM – when ever letsatsi le subela am done</p>
        </div>

        <div className="socials">
          <a href="https://www.youtube.com/@GrandH8" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://wa.me/27606975845" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <footer>© 2025 GRAND H. All rights reserved.</footer>
      </section>
    </div>
  );
};

export default Home;

