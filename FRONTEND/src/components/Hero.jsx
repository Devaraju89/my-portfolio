import React, { useState, useEffect } from 'react';
import { Reveal } from './Reveal';

const Hero = () => {
  const words = ["UI/UX Designer", "Design Thinker", "Frontend Craftsman", "Creative Problem Solver"];
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const currentWord = words[wordIndex];
    
    const type = () => {
      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === currentWord) {
        setIsDeleting(true);
        timeoutId = setTimeout(type, 2000);
        return;
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex((idx) => (idx + 1) % words.length);
        timeoutId = setTimeout(type, 500);
        return;
      }

      setCurrentText((prev) => 
        isDeleting 
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, isDeleting ? 50 : 100);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <Reveal direction="right" className="hero-content">
          <div className="hero-badge">Open for UI/UX Internship</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rangappa Gari</span><br />
            <span className="text-white">Devaraju</span>
          </h1>
          <p className="hero-subtitle">
            <span className="typewriter">{currentText}</span><span className="cursor">|</span>
          </p>
          <p className="hero-description">
            Crafting intuitive, user-centered digital experiences through design thinking, responsive interfaces, and a passion for visual storytelling.
          </p>
          <div className="hero-cta">
            <a href="/assets/docs/RangappaGariDevaraju_CV_2026.pdf" className="btn btn-primary" download="RangappaGariDevaraju_CV_2026.pdf">
                <i className="fas fa-file-download me-2"></i>Download CV
            </a>
            <a href="#projects" className="btn btn-outline">View Case Studies</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Devaraju89" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/devaraju18/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:devarajkuruba18@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.2} className="hero-image">
          <div className="profile-container">
            <div className="profile-glow"></div>
            <div className="profile-card">
              <img src="/assets/img/passport_size.jpg" alt="Rangappa Gari Devaraju" className="profile-img" />
            </div>
          </div>
        </Reveal>
      </div>
      <div className="scroll-down-indicator">
        <div className="mouse"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
