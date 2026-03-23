import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="footer-logo gradient-text">RD</div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Rangappa Gari Devaraju. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Devaraju89" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/devaraju18/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
