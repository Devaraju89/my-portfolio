import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';

function App() {
  return (
    <>
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      {/* Footer can be placed here or inside Contact depending on layout */}
    </>
  );
}

export default App;
