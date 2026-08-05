import React from 'react';
import { Reveal } from './Reveal';

const projects = [
  {
    title: "AI-Travel-Management Platform",
    desc: "Designed and architected a comprehensive travel platform connecting tourists with verified local guides. Crafted clean, highly responsive UI using Blade templates and CSS, ensuring smooth navigation and intuitive browsing experience across all devices.",
    img: "/assets/img/image copy 3.png",
    github: "https://github.com/Devaraju89",
    demo: "https://github.com/Devaraju89",
    tags: ["Responsive Design", "User Flow", "Blade UI", "CSS Architecture"],
    techStack: "Laravel (PHP) · MongoDB · JavaScript (ES6+) · REST APIs",
    date: "May 2025"
  },
  {
    title: "OneKart – Organic Marketplace",
    desc: "Established an end-to-end Organic E-seller marketplace. Implemented a seamlessly responsive, interactive frontend layout, prioritizing modern UI/UX design patterns to maximize visual fidelity and overall client interaction.",
    img: "/assets/img/image copy 2.png",
    github: "https://github.com/Devaraju89",
    demo: "https://onekart-devaraju.vercel.app/",
    tags: ["UI/UX Patterns", "Interactive Layout", "Visual Design", "Responsive"],
    techStack: "MongoDB · Express · React · Node.js · Tailwind CSS",
    date: "October 2025"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Case Studies</span>
                <h2>Design <span className="gradient-text">Projects</span></h2>
            </Reveal>

            <div className="projects-grid">
                {projects.map((proj, idx) => (
                    <Reveal key={idx} direction="up" delay={idx * 0.15} className="project-card glass">
                        <div className="p-img">
                            <img src={proj.img} alt={proj.title} />
                            <div className="p-overlay">
                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-btn" title="GitHub Repo"><i className="fab fa-github"></i></a>
                                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="p-btn" title="Live Preview"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <div className="p-content">
                            <div className="p-date">{proj.date}</div>
                            <h3>{proj.title}</h3>
                            <p>{proj.desc}</p>
                            <div className="p-tags">
                                {proj.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="p-tech-stack">
                                <i className="fas fa-cog"></i> {proj.techStack}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Projects;
