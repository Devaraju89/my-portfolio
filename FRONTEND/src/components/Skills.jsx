import React from 'react';
import { Reveal } from './Reveal';

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Expertise</span>
                <h2>Design <span className="gradient-text">Arsenal</span></h2>
            </Reveal>

            <div className="skills-container">
                <Reveal direction="up" delay={0} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-pen-nib text-cyan"></i>
                        <h3>Design Tools</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">Figma</span>
                        <span className="tag">Wireframing</span>
                        <span className="tag">Prototyping</span>
                        <span className="tag">Canva</span>
                        <span className="tag">UI Mockups</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.1} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-palette text-purple"></i>
                        <h3>Frontend & UI</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">HTML5</span>
                        <span className="tag">CSS3</span>
                        <span className="tag">Tailwind CSS</span>
                        <span className="tag">React.js</span>
                        <span className="tag">Responsive Design</span>
                        <span className="tag">Blade Templates</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.2} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-users text-orange"></i>
                        <h3>UX & Research</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">User Research</span>
                        <span className="tag">Design Thinking</span>
                        <span className="tag">Information Architecture</span>
                        <span className="tag">User Flows</span>
                        <span className="tag">Usability Testing</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.3} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-tools text-blue"></i>
                        <h3>Development & Ops</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">JavaScript</span>
                        <span className="tag">Git & GitHub</span>
                        <span className="tag">VS Code</span>
                        <span className="tag">Vercel</span>
                        <span className="tag">REST APIs</span>
                        <span className="tag">Laravel (MVC)</span>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};

export default Skills;
