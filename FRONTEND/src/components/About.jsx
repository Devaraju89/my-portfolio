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
            <div className="card-icon"><i className="fas fa-pen-nib"></i></div>
            <h3>Who I Am</h3>
            <p>I am a 4th-year B.Tech student in Computer Science and Engineering at <strong>Lovely Professional University</strong> (CGPA: 7.31), passionate about <strong>UI/UX Design</strong> and creating intuitive, user-centered digital experiences.</p>
            <p>With a keen eye for visual design and a strong foundation in frontend technologies, I focus on crafting responsive, accessible, and aesthetically compelling interfaces that solve real user problems through design thinking.</p>
            
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
                  <p>Lovely Professional University | CGPA: 7.31</p>
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
                  <p>Z.P.H.S Yerragunta | 96.6%</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Design Philosophy Section */}
        <Reveal direction="up" delay={0.3}>
          <div className="glass" style={{ marginTop: '60px', padding: '40px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '30px', justifyContent: 'space-between' }}>
              <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--cyan)', marginBottom: '10px' }}>Design Philosophy</h3>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>I believe great design is invisible — it should feel natural, intuitive, and effortless. Every pixel serves a purpose, every interaction tells a story.</p>
              </div>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '20px 25px', borderRadius: '15px', border: '1px solid var(--border-light)' }}>
                      <div style={{ background: 'var(--gradient-primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#11100F', fontSize: '1.5rem' }}>
                          <i className="fas fa-search"></i>
                      </div>
                      <div>
                          <h4 style={{ fontSize: '1rem', margin: '0 0 4px' }}>Research</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Understand users first</p>
                      </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '20px 25px', borderRadius: '15px', border: '1px solid var(--border-light)' }}>
                      <div style={{ background: 'var(--gradient-primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#11100F', fontSize: '1.5rem' }}>
                          <i className="fas fa-pencil-ruler"></i>
                      </div>
                      <div>
                          <h4 style={{ fontSize: '1rem', margin: '0 0 4px' }}>Design</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Prototype & iterate</p>
                      </div>
                  </div>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '20px 25px', borderRadius: '15px', border: '1px solid var(--border-light)' }}>
                      <div style={{ background: 'var(--gradient-primary)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#11100F', fontSize: '1.5rem' }}>
                          <i className="fas fa-code"></i>
                      </div>
                      <div>
                          <h4 style={{ fontSize: '1rem', margin: '0 0 4px' }}>Implement</h4>
                          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pixel-perfect build</p>
                      </div>
                  </div>
              </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
