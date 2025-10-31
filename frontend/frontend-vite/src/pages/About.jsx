import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import barberImage from "../assets/barber.jpg"; // ✅ import image properly

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, offset: 100 });
  }, []);

  return (
    <div className="about-wrapper">
      <section className="about-section" data-aos="fade-up">
        <h1 className="title">ABOUT GRAND H</h1>
        <p className="subtitle">My story and my start</p>
        <div className="underline"></div>

        <div className="about-box">
          <p className="text">
            Welcome to <strong>Grand H</strong>. My journey started simple: cutting hair
            with my brother just for fun. Let’s be honest—it looked bad! We called it
            <em> re senyana dihlogo</em>, but that’s where my passion began.
          </p>

          <p className="text">
            I spent hours on <strong>YouTube</strong> learning new techniques. Since I
            didn’t own a clipper, I saved up and bought my first one—a
            <strong> Wahl clipper</strong>. To practice, I offered free haircuts to kids
            in my street between Grade 10 and 11. By Grade 12, I saw how far I’d come.
          </p>

          <p className="text">
            That’s when I started my small business and called it{" "}
            <strong>Grand H</strong>. I keep improving every day and truly love what I
            do.
          </p>
        </div>
      </section>

      <section className="barber-section" data-aos="fade-up">
        <div className="barber-photo">
          {/* ✅ use the imported image here */}
          <img src={barberImage} alt="The Barber" />
        </div>
        <div className="barber-info">
          <h2>THE BARBER: THE MAN BEHIND GRAND H</h2>
          <div className="underline small"></div>
          <p>
            Dumelang, I’m the face and hands of <strong>Grand H</strong>. I don’t just cut
            hair—I craft confidence. What began as a hobby turned into a deep passion for
            <strong> precision and perfection</strong>.
          </p>
          <p>
            When you sit in my chair, you’re not just getting a haircut—you’re getting
            years of <strong>dedication, learning, and care</strong>. Every cut shows my
            skill, passion, and pride in the craft. Ke tse a nako yaka ke kota—so come
            here o sena mabaka please, otherwise you will be late!
          </p>
        </div>
      </section>

      <section className="values-section" data-aos="fade-up">
        <h1 className="title">MISSION & VALUES</h1>
        <div className="underline"></div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Affordable Quality</h3>
            <p>Premium cuts at fair prices. Style and confidence for everyone.</p>
          </div>
          <div className="value-card">
            <h3>Precision Focused</h3>
            <p>Every fade and line matters. Clean detail and sharp finish.</p>
          </div>
          <div className="value-card">
            <h3>Constant Growth</h3>
            <p>Always learning. Every cut better than the last.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" data-aos="fade-up">
        <h2>Ready for a Cut with a Story?</h2>
        <Link to="/booking" className="book-btn">
          Book Your Appointment Now
        </Link>
      </section>

      <footer className="footer">
        © 2025 Grand H Barber Shop | Driven by Passion
      </footer>
    </div>
  );
};

export default About;
