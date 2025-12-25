import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  // Smooth scroll function for the rolling effect
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between p-6 md:p-16 overflow-hidden">
      
      {/* 1. BACKGROUND: THE "VOID" TEXT */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none opacity-10 select-none overflow-hidden">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-['Sb'] text-[40vw] md:text-[30vw] text-white leading-none -rotate-90 md:-rotate-90 origin-left translate-x-10 md:translate-x-20 whitespace-nowrap"
        >
          SPIRIT
        </motion.h1>
      </div>

      {/* 2. TOP DATA STRIP */}
      <div className="relative z-20 flex justify-between items-start w-full border-t border-zinc-900 pt-4">
        <div className="font-['tox'] text-[7px] md:text-[9px] text-red-700 tracking-[0.3em] md:tracking-[0.5em] uppercase">
          [ Phase_04: Rebirth ]
        </div>
        <div className="font-['tox'] text-[7px] md:text-[9px] text-zinc-600 tracking-[0.3em] md:tracking-[0.5em] uppercase text-right">
          Connection_Stable // 00:00:00
        </div>
      </div>

      {/* 3. MAIN INTERACTIVE CORE */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-end justify-between h-full py-12 md:py-20 gap-12 lg:gap-20">
        
        {/* LEFT SIDE: THE RITUAL CALL */}
        <div className="w-full max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['Sb'] text-5xl sm:text-6xl md:text-9xl text-white mb-6 leading-tight uppercase">
              The <span className="text-red-700">Final</span> <br /> Handshake
            </h2>
            <p className="font-['tox'] text-zinc-500 tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase max-w-sm leading-loose">
              Initiating the termination of solitude. Transfer your data to the Ronin’s core.
            </p>
          </motion.div>

          <div className="mt-10 md:mt-16 flex flex-col gap-8 md:gap-12">
            <motion.a 
              href="mailto:mohammedajeez716972@gmail.com"
              className="group flex items-center gap-4 md:gap-6 w-full"
              whileHover={{ x: 10 }}
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                <FaEnvelope className="text-zinc-600 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-['tox'] text-[7px] md:text-[8px] text-zinc-700 tracking-widest uppercase mb-1">Send_Protocol</span>
                <span className="font-['tox'] text-white text-xs sm:text-sm md:text-lg tracking-wider break-all md:break-normal">
                  mohammedajeez716972@gmail.com
                </span>
              </div>
            </motion.a>

            <motion.div 
              className="group flex items-center gap-4 md:gap-6"
              whileHover={{ x: 10 }}
            >
              <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                <FaPhone className="text-zinc-600 group-hover:text-red-600 transition-colors" />
              </div>
              <div className="flex flex-col">
                <span className="font-['tox'] text-[7px] md:text-[8px] text-zinc-700 tracking-widest uppercase mb-1">Direct_Uplink</span>
                <span className="font-['tox'] text-white text-lg sm:text-xl md:text-3xl tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap">
                  +91 9880236513
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE: THE DIGITAL SEAL (Updated with Rolling Home Button) */}
        <div className="flex flex-row lg:flex-col items-center gap-8 md:gap-10 w-full lg:w-auto justify-center lg:justify-end">
          <div className="hidden lg:block w-[1px] h-32 bg-gradient-to-b from-transparent via-red-900 to-red-600" />
          
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.2, color: "#ff0000" }}
            className="text-zinc-700 text-2xl md:text-3xl"
          >
            <FaGithub />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com"
            whileHover={{ scale: 1.2, color: "#ff0000" }}
            className="text-zinc-700 text-2xl md:text-3xl"
          >
            <FaLinkedin />
          </motion.a>

          {/* THE ROLLING RED SEAL */}
          <motion.button
            onClick={scrollToTop}
            initial={{ rotate: 45 }}
            whileHover={{ 
              rotate: 405, // Full 360 degree spin + original 45
              scale: 1.1,
              borderColor: "#ff0000",
              boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)"
            }}
            whileTap={{ scale: 0.9, rotate: 45 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="w-14 h-14 md:w-16 md:h-16 border-2 border-red-900/50 flex items-center justify-center text-red-600 font-bold bg-black group"
          >
             <span className="font-['Sb'] text-xl md:text-2xl -rotate-45 group-hover:-rotate-[405deg] transition-transform duration-500">
               R
             </span>
             {/* Tooltip for user clarity */}
             <span className="absolute -top-10 font-['tox'] text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               [ REBOOT_SYSTEM ]
             </span>
          </motion.button>
        </div>
      </div>

      {/* 4. FOOTER: SYSTEM SPECS */}
      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center md:items-end w-full border-t border-zinc-900 pt-8 gap-6 md:gap-4 text-center md:text-left">
        <div className="font-['tox'] text-[7px] md:text-[8px] text-zinc-800 tracking-[0.3em] md:tracking-[0.5em] uppercase">
          Build_Log: v2.0.25_STABLE
        </div>
        <div className="font-['tox'] text-[7px] md:text-[8px] text-zinc-600 tracking-[0.3em] md:tracking-[0.5em] uppercase md:text-right leading-loose">
          Forged by Mohammed Roshan <br /> 
          <span className="text-zinc-900">Class of 2025 // No Rights Reserved</span>
        </div>
      </div>

      <motion.div 
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-red-900/10 pointer-events-none z-50"
      />

    </section>
  );
};

export default Contact;