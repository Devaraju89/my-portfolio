import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <Reveal direction="up" className="section-title">
            <span className="subtitle">Discovery</span>
            <h2>About <span className="gradient-text">Me</span></h2>
        </Reveal>

        <div className="about-grid">
          <Reveal direction="right" className="about-card glass card">
            <div className="card-icon"><i className="fas fa-user-graduate"></i></div>
            <h3>Who I Am</h3>
            <p>I am a final-year B.Tech student in Computer Science and Engineering at <strong>Lovely Professional University</strong> (CGPA: 7.19). Passionate about full-stack development and integrating AI into modern web solutions.</p>
            <p>With a strong foundation in DSA and a versatile tech stack, I focus on building efficient, scalable, and user-centric applications.</p>
            
            <div className="stats-row">
                <div className="stat-item">
                    <span className="stat-num">5+</span>
                    <span className="stat-lab">Projects</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">10+</span>
                    <span className="stat-lab">Certificates</span>
                </div>
                <div className="stat-item">
                    <span className="stat-num">24/7</span>
                    <span className="stat-lab">Learning</span>
                </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.2} className="education-timeline">
            <div className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-date">July 2025</div>
                <h4>DSA Training</h4>
                <p>Board Infinity | C++ Mastery</p>
            </div>
            <div className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2023 - Present</div>
                <h4>B.Tech CSE</h4>
                <p>Lovely Professional University | CGPA: 7.19</p>
            </div>
            <div className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021 - 2023</div>
                <h4>Intermediate</h4>
                <p>Swami Vivekananda Junior College | 94.7%</p>
            </div>
            <div className="timeline-box">
                <div className="timeline-dot"></div>
                <div className="timeline-date">March 2021</div>
                <h4>Matriculation</h4>
                <p>Z.P.H.S Yerragunta | 96%</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
