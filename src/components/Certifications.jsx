import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaBrain, FaRobot } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "Introduction to Large Language Models",
      issuer: "Coursera",
      date: "Feb 19, 2025",
      details: "Fundamentals of LLMs, architectures, and AI-driven system applications.",
      type: "AI_CORE",
      icon: <FaBrain />
    },
    {
      title: "AI- Machine Learning Engineer",
      issuer: "Rooman Technologies (IBM Partner)",
      date: "Sep 2024 - Feb 2025",
      details: "Professional training in Neural Networks, Deep Learning, and Predictive Modeling.",
      type: "ML_SPEC",
      icon: <FaRobot />
    },
    {
      title: "Life Skills (Jeevan Kaushal) 2.0",
      issuer: "Rooman Technologies",
      date: "Dec 26, 2024",
      details: "Professional development and essential leadership integration.",
      type: "SOFT_INTEL",
      icon: <FaAward />
    }
  ];

  return (
    <section id="certifications" className="relative min-h-screen w-full bg-[#050505] py-32 px-6 md:px-12 overflow-hidden">
      
      {/* 1. THE DATA STREAM SPINE */}
      <div className="absolute left-6 md:left-1/2 top-0 w-[1px] h-full bg-zinc-900">
        <motion.div 
          className="w-full bg-red-600 shadow-[0_0_15px_#ff0000]"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-32 md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block border border-red-900/30 px-4 py-1 mb-6"
          >
            <span className="font-['tox'] text-[10px] text-red-600 tracking-[0.5em] uppercase">
              Archive_Access: Granted
            </span>
          </motion.div>
          <h2 className="font-['Sb'] text-6xl md:text-9xl text-white tracking-tighter uppercase leading-none">
            Validated_<span className="text-red-700">Intel</span>
          </h2>
        </div>

        {/* 2. THE CHRONOLOGICAL FEED */}
        <div className="flex flex-col gap-24 relative">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* TIMELINE CONNECTOR NODE */}
              <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black border border-red-600 rotate-45 z-20 shadow-[0_0_10px_#ff0000]" />

              {/* CERTIFICATE CARD */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="w-full md:w-[45%] group relative border border-zinc-900 bg-zinc-950/40 p-8 backdrop-blur-md"
              >
                {/* Scanning Laser Effect on Hover */}
                <motion.div 
                  initial={{ top: '0%' }}
                  whileHover={{ top: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-0 w-full h-[2px] bg-red-600/50 blur-[2px] z-30 opacity-0 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between mb-6">
                  <div className="text-3xl text-red-700 opacity-50 group-hover:opacity-100 transition-opacity">
                    {cert.icon}
                  </div>
                  <span className="font-['tox'] text-[8px] text-zinc-600 tracking-[0.3em] uppercase">
                    {cert.type}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="font-['tox'] text-[9px] text-zinc-500 uppercase tracking-widest italic">
                    {cert.date} [cite: 30, 33, 37]
                  </div>
                  <h3 className="font-['Sb'] text-2xl md:text-3xl text-white group-hover:text-red-600 transition-colors uppercase">
                    {cert.title} [cite: 29, 32, 35]
                  </h3>
                  <p className="font-['tox'] text-[10px] text-zinc-500 leading-relaxed tracking-widest uppercase">
                    {cert.issuer} [cite: 30, 33, 36]
                  </p>
                  <div className="h-[1px] w-full bg-zinc-900 group-hover:bg-red-900 transition-colors" />
                  <p className="font-['tox'] text-[11px] text-zinc-400 leading-relaxed uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {cert.details} [cite: 31, 34, 38]
                  </p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-red-900/50 group-hover:border-red-600" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-red-900/50 group-hover:border-red-600" />
              </motion.div>

              {/* DECORATIVE GHOST DATE */}
              <div className="hidden lg:block w-[45%] text-left md:text-right">
                <span className="font-['Sb'] text-8xl text-white/[0.02] select-none uppercase">
                  {cert.date.split(' ')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECOR: NOISE & SCANLINES */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </section>
  );
};

export default Certifications;