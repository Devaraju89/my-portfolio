import React from 'react';
import { Reveal } from './Reveal';

const projects = [
  {
    title: "AI-Travel-Management Platform",
    desc: "Architected a comprehensive travel platform connecting tourists with verified local guides. Designed clean, highly responsive user interfaces using Blade templates and CSS — ensuring smooth navigation and intuitive browsing across all devices with a seamless automated booking experience.",
    img: "/assets/img/image copy 3.png",
    github: "https://github.com/Devaraju89",
    demo: "https://github.com/Devaraju89",
    designTags: ["Responsive UI", "User Flow Design", "Cross-Device UX", "Clean Interface"],
    techStack: "Laravel · MongoDB · JavaScript (ES6+) · Blade · REST APIs",
    date: "May 2025",
    role: "UI/UX Designer & Developer"
  },
  {
    title: "OneKart – Organic Marketplace",
    desc: "Designed and built an end-to-end Organic marketplace connecting consumers directly with source farmers. Implemented seamlessly responsive, interactive frontend layouts prioritizing modern UI/UX design patterns to maximize visual fidelity and client interaction.",
    img: "/assets/img/image copy 2.png",
    github: "https://github.com/Devaraju89",
    demo: "https://onekart-devaraju.vercel.app/",
    designTags: ["UI/UX Patterns", "Interactive Layout", "Visual Design", "E-commerce UX"],
    techStack: "MongoDB · Express · React · Node.js · Tailwind CSS",
    date: "October 2025",
    role: "UI Designer & Frontend Dev"
  },
  {
    title: "Pet Adoption Platform",
    desc: "Designed a user-friendly adoption platform with intuitive workflows for pet discovery, adoption tracking, and donation management. Created empathetic UI with clear visual hierarchy guiding users through the adoption journey seamlessly.",
    img: "/assets/img/image copy 3.png",
    github: "https://github.com/Devaraju89",
    demo: "https://pet-adoption-platform-zeta.vercel.app/",
    designTags: ["User Journey", "Visual Hierarchy", "Empathetic Design", "Workflow UX"],
    techStack: "MongoDB · Express · React · Node.js",
    date: "2024",
    role: "UI/UX Designer & Developer"
  },
  {
    title: "Virtual Therapy Bot",
    desc: "Designed a calming, accessible conversational interface for an AI therapy assistant featuring mood-tracking visualizations and human-like conversational flow. Focused on creating a safe, welcoming UI that encourages user interaction.",
    img: "/assets/img/image copy.png",
    github: "https://github.com/Devaraju89",
    demo: "https://virtual-therapy-bot.onrender.com/",
    designTags: ["Accessible Design", "Conversational UI", "Mood Visualization", "Calming UX"],
    techStack: "Node.js · Gemini AI · Express",
    date: "2024",
    role: "UI Designer & AI Integration"
  },
  {
    title: "Smart Learning Platform",
    desc: "Crafted an interactive educational platform with clean quiz interfaces, custom theme support, and engaging micro-animations. Designed an intuitive learning experience that keeps students engaged through thoughtful UI decisions.",
    img: "/assets/img/image.png",
    github: "https://github.com/Devaraju89",
    demo: "https://smart-learning-platform-zeta.vercel.app/",
    designTags: ["Interactive UI", "Theme System", "Micro-animations", "Learning UX"],
    techStack: "React · Vercel · Interactive Components",
    date: "2024",
    role: "UI/UX Designer"
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

            {/* Featured Project — Full Width */}
            <Reveal direction="up" delay={0} className="featured-project glass">
                <div className="featured-img">
                    <img src={projects[0].img} alt={projects[0].title} />
                    <div className="p-overlay">
                        <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="p-btn" title="GitHub"><i className="fab fa-github"></i></a>
                        <a href={projects[0].demo} target="_blank" rel="noopener noreferrer" className="p-btn" title="Live Preview"><i className="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div className="featured-content">
                    <div className="p-date">{projects[0].date}</div>
                    <h3>{projects[0].title}</h3>
                    <div className="p-role"><i className="fas fa-user-circle"></i> {projects[0].role}</div>
                    <p>{projects[0].desc}</p>
                    <div className="p-tags">
                        {projects[0].designTags.map((tag, i) => (
                            <span key={i}>{tag}</span>
                        ))}
                    </div>
                    <div className="p-tech-stack">
                        <i className="fas fa-cog"></i> {projects[0].techStack}
                    </div>
                </div>
            </Reveal>

            {/* Project Grid — Remaining Projects */}
            <div className="projects-grid">
                {projects.slice(1).map((proj, idx) => (
                    <Reveal key={idx} direction="up" delay={idx * 0.1} className="project-card glass">
                        <div className="p-img">
                            <img src={proj.img} alt={proj.title} />
                            <div className="p-overlay">
                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-btn" title="GitHub"><i className="fab fa-github"></i></a>
                                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="p-btn" title="Live Preview"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <div className="p-content">
                            <div className="p-date">{proj.date}</div>
                            <h3>{proj.title}</h3>
                            <div className="p-role"><i className="fas fa-user-circle"></i> {proj.role}</div>
                            <p>{proj.desc}</p>
                            <div className="p-tags">
                                {proj.designTags.map((tag, i) => (
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
