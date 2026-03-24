import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading delay securely and beautifully
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 800); // 800ms fadeout buffer to cleanly mount app
    }, 2500); // 2.5 second premium lock screen 

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bg-dark)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid var(--border-light)',
              borderTop: '3px solid var(--cyan)',
              borderRadius: '50%',
              animation: 'spin 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite'
            }}></div>
            <h2 style={{
              marginTop: '30px',
              fontFamily: 'var(--font-heading)',
              color: 'var(--text-white)',
              letterSpacing: '4px',
              fontSize: '1.2rem',
              fontWeight: 600,
              textTransform: 'uppercase'
            }}>Awakening</h2>
          </motion.div>

          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
