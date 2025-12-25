import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Education = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for that "Crazy Ass" depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section id="education" className="relative min-h-[120vh] w-full bg-black flex items-center justify-center overflow-hidden py-40">
      
      {/* 1. THE SPIRIT MASK (Background) */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute opacity-10 pointer-events-none select-none z-0"
      >
        <h2 className="font-['Kaisei Tokumin'] text-[60rem] text-red-900 drop-shadow-[0_0_50px_rgba(153,27,27,0.5)]">
          学
        </h2>
      </motion.div>

      {/* 2. THE FLOATING TEXT (No Containers) */}
      <div className="relative z-10 w-full max-w-7xl px-10 flex flex-col items-center">
        
        {/* THE YEAR - Massive and Ghostly */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 font-['Sb'] text-[20rem] text-white/[0.02] whitespace-nowrap"
        >
          2021 2025
        </motion.div>

        {/* THE MAIN CONTENT */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="font-['tox'] text-red-600 text-xs tracking-[1em] uppercase mb-4 block">
              The Great Forging
            </span>
            <h2 className="font-['Sb'] text-7xl md:text-[10rem] text-white leading-none tracking-tighter uppercase">
              HULKOTI <br /> <span className="text-red-700">CS RITUAL</span>
            </h2>
          </motion.div>

          {/* THE DETAILS - Floating in Space */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-5xl">
            
            <motion.div 
              whileHover={{ x: -10, color: "#ff0000" }}
              className="text-right space-y-2"
            >
              <h4 className="font-['tox'] text-zinc-500 text-[10px] tracking-widest uppercase italic">Institution</h4>
              <p className="font-['Sb'] text-2xl text-white uppercase tracking-wider">Rural Engineering College</p>
            </motion.div>

            <div className="flex justify-center">
              <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-red-600 to-transparent shadow-[0_0_15px_#ff0000]" />
            </div>

            <motion.div 
              whileHover={{ x: 10, color: "#ff0000" }}
              className="text-left space-y-2"
            >
              <h4 className="font-['tox'] text-zinc-500 text-[10px] tracking-widest uppercase italic">The Rank</h4>
              <p className="font-['Sb'] text-2xl text-white uppercase tracking-wider">Bachelor of Engineering</p>
            </motion.div>
          </div>
        </div>

        {/* 3. FLOATING DISCIPLINE EMBERS */}
        <div className="absolute inset-0 pointer-events-none">
          {["ALGORITHMS", "DATA STRUCTURES", "DBMS", "WEB TECH"].map((text, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -100, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ 
                left: `${15 + (i * 20)}%`, 
                top: `${20 + (i * 15)}%` 
              }}
              className="absolute font-['tox'] text-red-500 text-[10px] tracking-[1em] whitespace-nowrap"
            >
              {text}
            </motion.span>
          ))}
        </div>

      </div>

      {/* 4. THE BOTTOM "BLOOD" LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-red-950/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Education;