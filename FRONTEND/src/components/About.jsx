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
            <p>I am a 3rd-year B.Tech student in Computer Science and Engineering at <strong>Lovely Professional University</strong> (CGPA: 7.19). Passionate about full-stack development and integrating AI into modern web solutions.</p>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Reveal direction="left" delay={0.2} className="education-timeline">
              <h3 style={{ marginBottom: '20px', color: 'var(--cyan)' }}>Education</h3>
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

        {/* Brand New Dedicated Professional Training Section for High Visibility */}
        <Reveal direction="up" delay={0.4}>
          <div className="glass" style={{ marginTop: '60px', padding: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', justifyContent: 'space-between' }}>
              <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--cyan)', marginBottom: '10px' }}>Professional Training</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Intensive skill-building and continuous mastery.</p>
              </div>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', border: '1px solid var(--border-light)' }}>
                  <div style={{ background: 'var(--gradient-primary)', width: '60px', height: '60px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#11100F', fontSize: '1.8rem' }}>
                      <i className="fas fa-laptop-code"></i>
                  </div>
                  <div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--cyan)', fontWeight: 'bold' }}>July 2025</span>
                      <h4 style={{ fontSize: '1.3rem', margin: '5px 0' }}>DSA Training</h4>
                      <p style={{ margin: 0, fontWeight: 600 }}>Board Infinity <span style={{ opacity: 0.5 }}>|</span> C++ Mastery</p>
                  </div>
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
