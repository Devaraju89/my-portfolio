import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Scroll, useScroll, Sparkles, Float, Plane, Text } from '@react-three/drei';
import * as THREE from 'three';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Certifications from './Certifications.jsx';
import Contact from './Contact.jsx';

export default function ImmersiveScene() {
  const scroll = useScroll();
  const { viewport } = useThree();
  
  // A ref to animate background clouds or particles based on scroll
  const particleGroup = useRef();

  useFrame((state, delta) => {
    // Parallax rotate the particle group slightly as user scrolls
    if (particleGroup.current) {
      particleGroup.current.position.y = -scroll.offset * 10;
      particleGroup.current.rotation.y = scroll.offset * Math.PI;
    }
  });

  return (
    <>
      {/* Dynamic 3D Environment - Sunset Skybox / Floating Particles */}
      <group ref={particleGroup}>
        <Sparkles count={150} scale={20} size={8} speed={0.4} opacity={0.6} color="#FFD700" />
        <Sparkles count={100} scale={30} size={15} speed={0.2} opacity={0.3} color="#71556B" />
        <Sparkles count={30} scale={15} size={25} speed={0.1} opacity={0.1} color="#FFFFFF" />
        
        {/* Floating abstract geometry mimicking clouds or environments */}
        {Array.from({ length: 10 }).map((_, i) => (
          <Float key={i} speed={1} rotationIntensity={1} floatIntensity={2} position={[
            (Math.random() - 0.5) * 20, 
            (Math.random() - 0.5) * 20 - 5, 
            (Math.random() - 0.5) * 10 - 5
          ]}>
             <mesh>
               <boxGeometry args={[Math.random() * 2 + 1, Math.random() * 2 + 1, Math.random() * 2 + 1]} />
               <meshStandardMaterial color="#FFD700" opacity={0.05} transparent wireframe />
             </mesh>
          </Float>
        ))}
      </group>

      <Scroll html style={{ width: '100vw' }}>
        
        {/* We map the actual components down the document so no content is lost */}
        <div style={{ position: 'relative', width: '100vw' }}>
          
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Hero />
          </div>

          <div style={{ minHeight: '100vh', padding: '100px 0' }}>
            <About />
          </div>

          <div style={{ minHeight: '100vh', padding: '100px 0' }}>
            <Skills />
          </div>

          <div style={{ minHeight: '100vh', padding: '100px 0' }}>
            <Projects />
          </div>

          <div style={{ minHeight: '100vh', padding: '100px 0' }}>
            <Certifications />
          </div>

          <div style={{ minHeight: '100vh', padding: '100px 0' }}>
            <Contact />
          </div>

        </div>
      </Scroll>
    </>
  );
}
