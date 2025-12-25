import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about", desc: "Biography & Logic" },
    { name: "SKILLS", href: "#skills", desc: "Offensive Tech Stack" },
    { name: "EDUCATION", href: "#education", desc: "Past Operations" },
    { name: "CONTACT", href: "#contact", desc: "Direct Uplink" },
  ];

  return (
    <>
      {/* 1. THE TRIGGER: THE FLOATING EYE */}
      {/* Adjusted left-4 for mobile, left-6 for desktop. Top-10 on mobile to avoid thumb-blocking */}
      <div className="fixed left-4 md:left-6 top-[15%] md:top-1/2 -translate-y-1/2 z-[2000] pointer-events-auto">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center group"
        >
          {/* Pulsing Outer Rings */}
          <div className="absolute inset-0 border border-red-600/30 rounded-full animate-ping" />
          <div className="absolute inset-1 md:inset-2 border border-white/20 rounded-full group-hover:border-red-600 transition-colors" />
          
          {/* The Inner "Iris" */}
          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 ${isOpen ? 'bg-white' : 'bg-red-600'} shadow-[0_0_15px_#ff0000] transition-colors duration-500`} />
          
          {/* Label (Hidden on small mobile to prevent clutter, shown on md+) */}
          <span className="absolute left-14 font-['tox'] text-[7px] md:text-[8px] text-zinc-500 tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap hidden sm:block">
            {isOpen ? "[TERMINATE_LINK]" : "[ESTABLISH_NEURAL_LINK]"}
          </span>
          
          {/* Decorative Vertical Lines */}
          <div className="absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 w-px h-6 md:h-8 bg-gradient-to-t from-red-600/50 to-transparent" />
          <div className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 w-px h-6 md:h-8 bg-gradient-to-b from-red-600/50 to-transparent" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1900] bg-black flex items-center justify-center overflow-y-auto py-20"
          >
            {/* 2. BACKGROUND: THE "SCANLINE" GRID */}
            <div className="absolute inset-0 opacity-10 md:opacity-20 pointer-events-none"
              style={{ backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
            />

            {/* 3. THE CENTER SHATTERED MENU */}
            {/* Grid switches from 1 col on mobile to 2 cols on md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 w-full max-w-5xl mx-4 md:mx-10 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group bg-black p-8 md:p-20 overflow-hidden flex flex-col justify-end min-h-[180px] md:min-h-[250px]"
                >
                  {/* Hover Background Glitch */}
                  <motion.div 
                    whileHover={{ opacity: 0.1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    className="absolute inset-0 bg-red-600 pointer-events-none" 
                  />

                  {/* Link Meta */}
                  <span className="font-['tox'] text-[8px] md:text-[10px] text-red-600 mb-2 transition-transform group-hover:-translate-y-2">0{i + 1} // NODE</span>
                  
                  {/* Main Title */}
                  <h2 className="font-['Sb'] text-3xl md:text-6xl text-white group-hover:text-red-600 group-hover:translate-x-4 transition-all duration-500 italic uppercase">
                    {link.name}
                  </h2>
                  
                  {/* Description Subtext */}
                  <p className="font-['tox'] text-[7px] md:text-[8px] text-zinc-600 tracking-[0.2em] md:tracking-[0.4em] uppercase mt-2 md:mt-4 group-hover:text-white transition-colors">
                    {link.desc}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-800 group-hover:border-red-600 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* 4. THE DECORATIVE SYSTEM OVERLAY */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 font-['tox'] text-[6px] md:text-[8px] text-zinc-800 max-w-[150px] md:max-w-xs space-y-1 hidden sm:block">
              <p>DECODING_S_TIER_PROTOCOLS...</p>
              <p>STATUS: NEURAL_OVERLAY_ACTIVE</p>
            </div>
            
            <div className="absolute top-1/2 right-4 md:right-10 -translate-y-1/2 font-['tox'] text-[6px] md:text-[8px] text-zinc-800 rotate-90 tracking-[0.5em] md:tracking-[1em] uppercase whitespace-nowrap hidden xs:block">
              Neural_Interface_v7.0.2
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;