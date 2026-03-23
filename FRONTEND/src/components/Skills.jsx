import React from 'react';
import { Reveal } from './Reveal';

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
        <div className="container">
            <Reveal direction="up" className="section-title">
                <span className="subtitle">Expertise</span>
                <h2>Technical <span className="gradient-text">Arsenal</span></h2>
            </Reveal>

            <div className="skills-container">
                <Reveal direction="up" delay={0} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-code text-cyan"></i>
                        <h3>Languages</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">C / C++</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">Java</span>
                        <span className="tag">PHP</span>
                        <span className="tag">DSA</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.1} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-layer-group text-purple"></i>
                        <h3>Frameworks</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">MERN Stack</span>
                        <span className="tag">React.js</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">Express.js</span>
                        <span className="tag">Tailwind CSS</span>
                        <span className="tag">jQuery</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.2} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-database text-orange"></i>
                        <h3>Databases</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">MongoDB</span>
                        <span className="tag">MySQL</span>
                    </div>
                </Reveal>

                <Reveal direction="up" delay={0.3} className="skill-category glass card">
                    <div className="skill-header">
                        <i className="fas fa-tools text-blue"></i>
                        <h3>Tools</h3>
                    </div>
                    <div className="skill-tags">
                        <span className="tag">Git & GitHub</span>
                        <span className="tag">VS Code</span>
                        <span className="tag">Postman</span>
                        <span className="tag">Figma</span>
                        <span className="tag">XAMPP</span>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};

export default Skills;
