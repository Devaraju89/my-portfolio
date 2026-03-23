import React from 'react';
import { Reveal } from './Reveal';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Communication</span>
                <h2>Let's <span className="gradient-text">Connect</span></h2>
            </Reveal>

            <div className="contact-grid">
                <Reveal direction="left" className="contact-methods">
                    <div className="contact-card glass">
                        <i className="fas fa-envelope gradient-text"></i>
                        <div>
                            <h4>Email Me</h4>
                            <p><a href="mailto:devarajkuruba18@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>devarajkuruba18@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="contact-card glass">
                        <i className="fas fa-phone gradient-text"></i>
                        <div>
                            <h4>Call Me</h4>
                            <p>+91 6301553175</p>
                        </div>
                    </div>
                    <div className="contact-card glass">
                        <i className="fab fa-linkedin-in gradient-text"></i>
                        <div>
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/devaraju18/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>in/devaraju18</a></p>
                        </div>
                    </div>
                </Reveal>

                <Reveal direction="right">
                  <form 
                    className="contact-form glass" 
                    action="https://formsubmit.co/devarajkuruba18@gmail.com" 
                    method="POST"
                  >
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="john@example.com" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" rows="4" placeholder="How can I help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  </form>
                </Reveal>
            </div>
        </div>
    </section>
  );
};

export default Contact;
