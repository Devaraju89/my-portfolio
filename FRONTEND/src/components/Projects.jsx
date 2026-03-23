import React from 'react';
import { Reveal } from './Reveal';

const projects = [
  {
    title: "Pet Adoption Platform",
    desc: "Full-stack platform with adoption workflows, medical record tracking, and donation management using MERN stack.",
    img: "/assets/img/image copy 3.png",
    github: "https://github.com/Devaraju89",
    demo: "https://pet-adoption-platform-zeta.vercel.app/",
    tags: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    title: "OneKart Organic Marketplace",
    desc: "E-commerce platform connecting farmers directly to consumers with integrated cart and persistent sessions.",
    img: "/assets/img/image copy 2.png",
    github: "https://github.com/Devaraju89",
    demo: "https://onekart-devaraju.vercel.app/",
    tags: ["MERN", "Tailwind", "React Context"]
  },
  {
    title: "Virtual Therapy Bot",
    desc: "AI assistant featuring Mood-Tracking and human-like conversational flow powered by Gemini API.",
    img: "/assets/img/image copy.png",
    github: "https://github.com/Devaraju89",
    demo: "https://virtual-therapy-bot.onrender.com/",
    tags: ["Node.js", "Gemini AI", "Express"]
  },
  {
    title: "Smart Learning Platform",
    desc: "Interactive educational platform with quizzes and custom theme support.",
    img: "/assets/img/image.png",
    github: "https://github.com/Devaraju89",
    demo: "https://smart-learning-platform-zeta.vercel.app/",
    tags: ["React", "Vercel", "Interactive UI"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Portfolio</span>
                <h2>Featured <span className="gradient-text">Projects</span></h2>
            </Reveal>

            <div className="projects-grid">
                {projects.map((proj, idx) => (
                    <Reveal key={idx} direction="up" delay={idx * 0.1} className="project-card glass">
                        <div className="p-img">
                            <img src={proj.img} alt={proj.title} />
                            <div className="p-overlay">
                                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="p-btn" title="GitHub Repo"><i className="fab fa-github"></i></a>
                                <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="p-btn" title="Live Preview"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                        <div className="p-content">
                            <h3>{proj.title}</h3>
                            <p>{proj.desc}</p>
                            <div className="p-tags">
                                {proj.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
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
