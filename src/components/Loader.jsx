import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("");

  // Simulated System Logs
  const logs = [
    "INITIALIZING_NEURAL_STREAMS...",
    "DECODING_BIO_DATA...",
    "ESTABLISHING_VIRTUAL_PROTOCOL...",
    "BYPASSING_SECURITY_ARRAY...",
    "KAELION_OS_READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const textInterval = setInterval(() => {
      setGlitchText(logs[Math.floor(Math.random() * logs.length)]);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center overflow-hidden font-mono"
    >
      {/* 1. THE ARCHITECTURAL GRID (Background) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ 
             backgroundImage: `radial-gradient(circle, #ff0000 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* 2. THE CENTRAL "CORE" */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Revolving Data Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-[400px] h-[400px] border border-zinc-900 rounded-full border-t-red-600 opacity-20"
        />

        {/* The Main Identity */}
        <div className="text-center">
          <motion.h1 
            animate={{ 
              textShadow: progress % 10 === 0 ? "2px 0px #ff0000, -2px 0px #00ffff" : "0px 0px #fff"
            }}
            className="font-['Sb'] text-[12vw] text-white leading-none tracking-tighter"
          >
            KAELION
          </motion.h1>
          
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p 
                key={glitchText}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-red-700 text-[8px] tracking-[0.8em] uppercase"
              >
                {glitchText}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 3. THE ANALYTIC SIDEBARS (Technical Data) */}
      <div className="absolute top-10 left-10 hidden md:block">
        <div className="space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="w-1 h-1 bg-red-600" />
              <div className="h-[1px] w-20 bg-zinc-900" />
              <span className="text-zinc-800 text-[7px] uppercase tracking-widest">Buffer_Stream_0{i}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-right">
        <p className="text-zinc-800 text-[7px] tracking-widest uppercase mb-4">Coordinate_Pulse</p>
        <div className="text-white font-['tox'] text-4xl italic">
          {progress}%
        </div>
      </div>

      {/* 4. THE BRUTALIST SHUTTER (Bottom Bar) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-1">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-red-600 shadow-[0_0_20px_#ff0000]"
        />
      </div>

      {/* 5. RANDOMIZED BINARY NOISE */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] flex flex-wrap gap-2 p-4 text-[8px] text-white overflow-hidden leading-none">
        {[...Array(200)].map((_, i) => (
          <span key={i}>{Math.random() > 0.5 ? "1" : "0"}</span>
        ))}
      </div>

      {/* SCANLINE EFFECT */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-[10001]" />
    </motion.div>
  );
};

export default Loader;