import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for hardware-accelerated movement
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for the "clamping" brackets
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const moveCursor = useCallback((e) => {
    if (!isVisible) setIsVisible(true);
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setCoords({ x: e.clientX, y: e.clientY });
  }, [isVisible, mouseX, mouseY]);

  const handleHover = useCallback((e) => {
    // Check if hovering over interactive elements
    const target = e.target.closest('button, a, .group, input, [role="button"]');
    setIsHovering(!!target);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [moveCursor, handleHover]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[999999] mix-blend-difference">
      {/* 1. THE BRACKETS */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          rotate: isHovering ? 90 : 0
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
      </motion.div>

      {/* 2. CENTER POINT */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute w-1 h-1 bg-white -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: isHovering ? 2 : 1, backgroundColor: isHovering ? "#ff0000" : "#ffffff" }}
      />

      {/* 3. COORDINATE DATA */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="absolute ml-6 mt-6 font-mono text-[7px] text-zinc-500 uppercase tracking-widest"
      >
        <p>X:{coords.x}</p>
        <p>Y:{coords.y}</p>
        {isHovering && <p className="text-red-600 animate-pulse">LOCK_ON</p>}
      </motion.div>
    </div>
  );
};

export default CustomCursor;