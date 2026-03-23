import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      let current = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = id;
          }
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home" className="gradient-text">RD</a>
        </div>
        <nav className="nav">
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
            {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
