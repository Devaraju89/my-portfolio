import React from 'react';
import { Reveal } from './Reveal';

const certs = [
  { name: "Responsive Web Design", org: "FreeCodeCamp | October 2023", icon: "fas fa-mobile-alt", link: "/assets/docs/cert_freecodecamp.pdf" },
  { name: "Oracle Cloud AI Foundations", org: "ORACLE | March 2026", icon: "fas fa-cloud", link: "/assets/docs/cert_nptel.pdf" },
  { name: "Computational Theory", org: "INFOSYS | August 2025", icon: "fas fa-microchip", link: "/assets/docs/cert_infosys.pdf" },
  { name: "Object Oriented Programming", org: "Certified | December 2024", icon: "fas fa-project-diagram", link: "/assets/docs/cert_java.pdf" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Validation</span>
                <h2>My <span className="gradient-text">Certifications</span></h2>
            </Reveal>

            <div className="cert-grid">
                {certs.map((cert, idx) => (
                    <Reveal key={idx} direction="up" delay={(idx % 3) * 0.1} className="cert-item glass">
                        <div className="cert-icon"><i className={cert.icon}></i></div>
                        <div className="cert-info">
                            <h4>{cert.name}</h4>
                            <p>{cert.org}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert">View Certificate</a>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Certifications;
