import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <div className="about-page">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="overlay"></div>

      {/* 📄 Text Content */}
      <div className="content-container">
        <h1 className="section-title" data-aos="fade-up">
          ABOUT GRAND H
        </h1>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          More than just cuts — it’s a craft.
        </p>

        <p className="about-text" data-aos="fade-up" data-aos-delay="200">
          Welcome to <strong>Grand H</strong>, where every cut is done with precision,
          style, and care. We specialize in male grooming — from classic fades and
          clean chiskops to modern dyes. Every client who walks in is treated with
          respect and attention to detail, ensuring you leave confident and looking
          your best.
        </p>

        <p className="about-text" data-aos="fade-up" data-aos-delay="300">
          At Grand H, we believe a good haircut isn’t just about appearance — it’s
          about confidence. We take pride in offering professional service at
          affordable prices, creating a space where every man feels at home.
        </p>

        <div className="social-links" data-aos="fade-up" data-aos-delay="400">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
