import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">A Symbol of Excellence in Placement Training</h1>

      <p className="about-description">
        Aptitude Guru Hem was born from the aspiration to create a learning
        environment that inspires greatness. Our founder, driven by personal
        experiences and a desire to make a difference, established the company
        with a mission to empower students with the right skills and mindset
        for success.
      </p>

      {/* Vision & Mission */}
      <div className="vm-section">
        <div className="vision-box">
          <h2 className="vision-title">| Our Vision</h2>
          <p className="vision-text">
            Our vision is to empower individuals from diverse backgrounds to
            become accomplished professionals. At Aptitude Guru Hem, we believe
            that knowledge has the power to transcend boundaries.
          </p>
        </div>

        <div className="mission-box">
          <h2 className="mission-title">| Our Mission</h2>
          <p className="mission-text">
            Our mission is to revolutionize education by providing comprehensive
            training in aptitude, coding, and web/mobile development. We foster
            a culture of inclusivity and personal growth.
          </p>
        </div>
      </div>

      {/* Red Section */}
      <div className="bottom-banner">
        <h2 className="banner-title">Learners Today, Leaders Tomorrow</h2>
        <p className="banner-desc">
          With our continuous research and development, we provide you with an
          excellent Aptitude training.
        </p>
      </div>
    </div>
    
  );
};

export default AboutSection;
