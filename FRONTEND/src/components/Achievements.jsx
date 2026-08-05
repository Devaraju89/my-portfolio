import React from 'react';
import { Reveal } from './Reveal';

const achievements = [
  {
    title: "Competitive Programming",
    date: "March 2026",
    icon: "fas fa-trophy",
    description: "Solved 100+ Data Structures and Algorithms problems on various platforms focusing on arrays, linked lists, stacks, queues, and dynamic programming.",
  },
  {
    title: "CODE OFF DUTY — Web Hackathon",
    date: "March 2025",
    icon: "fas fa-rocket",
    description: "Round 1 Qualifier — Spearheaded the development of a functional web prototype, integrating 5 unique features under strict competition constraints and tight deadlines.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements section-padding">
      <div className="container">
        <Reveal direction="up" className="section-title">
          <span className="subtitle">Milestones</span>
          <h2>My <span className="gradient-text">Achievements</span></h2>
        </Reveal>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15} className="achievement-card glass">
              <div className="achievement-icon">
                <i className={item.icon}></i>
              </div>
              <div className="achievement-content">
                <div className="achievement-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
