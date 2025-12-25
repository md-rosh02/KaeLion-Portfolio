import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden py-16 md:py-24">
      
      {/* 1. THE DISTORTED BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1a0000_0%,_transparent_70%)]" />
        {/* Responsive font size for background text: 10rem on mobile, 30rem on desktop */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Sb'] text-[12rem] md:text-[30rem] text-white/[0.02] tracking-tighter select-none">
          ROSHAN
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        
        {/* LEFT COLUMN: THE GLITCH TITLE */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="font-['tox'] text-red-600 text-[10px] md:text-xs tracking-[0.5em] md:tracking-[1em] block mb-4 md:mb-6">LOG_FILE: 001</span>
            
            {/* Sliced Heading Effect: Adjusted font sizes for mobile viewports */}
            <div className="relative group cursor-none">
              <h2 className="font-['Sb'] text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.85] md:leading-[0.8] uppercase tracking-tighter">
                THE <br /> 
                <span className="text-red-700">RONIN</span>
              </h2>
              {/* Ghost Layer on Hover (Hidden on mobile for performance/clarity) */}
              <h2 className="hidden md:block absolute top-0 left-0 font-['Sb'] text-8xl md:text-[9rem] text-red-600/20 leading-[0.8] uppercase tracking-tighter translate-x-1 translate-y-1 group-hover:translate-x-4 group-hover:translate-y-2 transition-transform duration-200">
                THE <br /> RONIN
              </h2>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: THE ENCRYPTED DATA */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8 md:space-y-12"
          >
            {/* THE BIO BLOCK: Pure Typography */}
            <div className="relative">
              <div className="absolute -left-4 md:-left-6 top-0 h-full w-[1px] bg-red-900/50" />
              <p className="font-['tox'] text-xl sm:text-2xl md:text-4xl text-zinc-400 leading-tight">
                IDENTIFIED AS <span className="text-white">M. ROSHAN</span>. <br className="hidden md:block"/>
                FORGED AT <span className="text-red-600">REC HULKOTI</span>. <br className="hidden md:block"/>
                SPECIALIZING IN <span className="text-white italic">IBM-PARTNERED</span> AI ARCHITECTURES 
                AND HIGH-STAKES FULL-STACK SYSTEMS. 
              </p>
            </div>

            {/* THE "MISSION LOG" STATS: Responsive grid (1 col mobile, 2 sm, 3 md) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-zinc-900 pt-8 md:pt-10">
              <div className="flex flex-col">
                <span className="font-['tox'] text-red-600 text-[9px] md:text-[10px] tracking-widest uppercase mb-1 md:mb-2">Origin</span>
                <span className="font-['tox'] text-lg md:text-xl text-white">CLASS OF 2025</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['tox'] text-red-600 text-[9px] md:text-[10px] tracking-widest uppercase mb-1 md:mb-2">Specialization</span>
                <span className="font-['tox'] text-lg md:text-xl text-white">FULL STACK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-['tox'] text-red-600 text-[9px] md:text-[10px] tracking-widest uppercase mb-1 md:mb-2">Combat Rank</span>
                <span className="font-['tox'] text-lg md:text-xl text-white">AI/ML TRAINED</span>
              </div>
            </div>

            {/* DECODING TEXT ANIMATION PREVIEW */}
            <motion.div 
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-['tox'] text-zinc-800 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase"
            >
              System.Status: Initializing_Blade_Protocol...
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 4. THE SCANNER LINE */}
      <motion.div 
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-[1px] bg-red-600/10 z-50 pointer-events-none"
      />

      {/* 5. SIDEBAR COORDINATES: Hidden on mobile to avoid overlap */}
      <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-10 md:gap-20 opacity-20 hidden sm:flex">
        <div className="h-20 md:h-40 w-[1px] bg-white" />
        <p className="font-['tox'] text-[8px] md:text-[10px] text-white rotate-90 uppercase tracking-[1em]">
          COORD_98.80.23.65.13
        </p>
      </div>
    </section>
  );
};

export default About;