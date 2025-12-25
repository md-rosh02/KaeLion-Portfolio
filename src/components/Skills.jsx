import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the user is on a touch device
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);
  }, []);

  const allSkills = [
    "C++", "JAVA", "REACT.JS", "NEXT.JS", "PYTHON", "LLMs", "AI/ML", 
    "TYPESCRIPT", "NODE.JS", "MONGODB", "DOCKER", "SOCKET.IO", 
    "ANGULAR", "TAILWIND", "GIT", "LINUX", "SQL", "NEURAL NETS"
  ];

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="skills" 
      onMouseMove={handleMouseMove}
      className={`relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-20 ${!isTouchDevice ? 'cursor-none' : 'cursor-default'}`}
    >
      {/* 1. THE REVEAL MASK (Conditional: only active on desktop) */}
      {!isTouchDevice && (
        <div 
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0,0,0,0.95) 100%)`
          }}
        />
      )}

      {/* 2. BACKGROUND JAPANESE CHARACTER (ROSHAN / KILL) */}
      <div className="absolute inset-0 opacity-5 md:opacity-10 pointer-events-none flex items-center justify-center">
        {/* Scaled down for mobile (20rem) vs desktop (50rem) */}
        <h2 className="font-['Kaisei Tokumin'] text-[20rem] md:text-[50rem] text-red-900 select-none">殺</h2>
      </div>

      <div className="relative z-20 max-w-6xl w-full px-6 md:px-10">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <h2 className="font-['Sb'] text-6xl sm:text-7xl md:text-9xl text-white tracking-tighter leading-none opacity-40 md:opacity-60">
            THE <br /> <span className="text-red-700">ARSENAL</span>
          </h2>
        </div>

        {/* 3. THE CHAOTIC GRID */}
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
          {allSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: isTouchDevice ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={!isTouchDevice ? { 
                scale: 1.4, 
                rotate: Math.random() * 10 - 5,
                color: "#ff0000"
              } : {}}
              className="font-['Sb'] text-2xl sm:text-4xl md:text-6xl text-zinc-600 md:text-zinc-700 transition-all duration-200 select-none"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. CUSTOM BLADE CURSOR (Only shown on Desktop) */}
      {!isTouchDevice && (
        <motion.div 
          className="fixed w-[2px] h-24 bg-red-600 z-50 pointer-events-none blur-[1px] shadow-[0_0_15px_#ff0000]"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y - 48,
            position: 'absolute' // Ensures it stays within section relative to mouse move
          }}
          animate={{ rotate: 15 }}
        />
      )}
      
      {/* 5. DYNAMIC SCANLINES */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </section>
  );
};

export default Skills;