import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import InitialLoader from './components/InitialLoader.jsx';
import CustomCursor from './components/CustomCursor.jsx';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!appLoaded && <InitialLoader onComplete={() => setAppLoaded(true)} />}
      
      <div style={{ opacity: appLoaded ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}>
        <ParticleBackground />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
