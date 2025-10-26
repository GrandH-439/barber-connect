import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Meet Your Barber</h2>
            <p>
              With over 8 years of experience in the barbering industry, I'm passionate about 
              creating styles that enhance your personality and confidence. Every haircut is 
              a masterpiece, tailored specifically to your features and lifestyle.
            </p>
            
            <p>
              I believe that a great haircut is more than just trimming hair - it's about 
              understanding your vision and bringing it to life with precision and artistry.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <h3>🎯 Precision</h3>
                <p>Attention to detail in every cut</p>
              </div>
              <div className="feature">
                <h3>💎 Quality</h3>
                <p>Premium products and tools</p>
              </div>
              <div className="feature">
                <h3>⭐ Experience</h3>
                <p>Years of mastering the craft</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1567894340315-6d1f5a3c8f3f?ixlib=rb-4.0.3" 
              alt="Professional Barber" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;