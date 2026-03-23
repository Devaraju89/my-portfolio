import React from 'react';
import { Reveal } from './Reveal';

const certs = [
  { name: "Cloud Computing", org: "NPTEL | April 2025", icon: "fas fa-cloud", link: "/assets/docs/cert_nptel.pdf" },
  { name: "Computational Theory", org: "INFOSYS | August 2025", icon: "fas fa-microchip", link: "/assets/docs/cert_infosys.pdf" },
  { name: "Computer Communications", org: "Coursera | 4-Course Spec.", icon: "fas fa-network-wired", link: "/assets/docs/cert_coursera_comm.pdf" },
  { name: "Java Development", org: "Oracle | 2024", icon: "fab fa-java", link: "/assets/docs/cert_java.pdf" },
  { name: "Data Structures & Algos", org: "Algo-Uni | 2024", icon: "fas fa-project-diagram", link: "/assets/docs/cert_algovuni.pdf" },
  { name: "Summer Training Completion", org: "Industry Training | 2024", icon: "fas fa-sun", link: "/assets/docs/cert_summer.pdf" },
  { name: "ChatGPT-4 Prompt Eng.", org: "AI Training | Prompt Mastery", icon: "fas fa-brain", link: "/assets/docs/cert_chatgpt.pdf" },
  { name: "Network Comm. Fundamentals", org: "Coursera | Networking", icon: "fas fa-wifi", link: "/assets/docs/cert_network.pdf" },
  { name: "Advanced React.js", org: "Frontend Specialization", icon: "fab fa-react", link: "/assets/docs/cert_react2.pdf" },
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
