import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const architectures = [
    {
      id: "PROT 001",
      name: "COLLAB_SYSTEM",
      intel: "A REAL-TIME SYNCHRONIZED ENVIRONMENT FOR DISTRIBUTED TEAMS.",
      arsenal: ["React", "TypeScript", "Node.js", "Socket.io"],
      link: "#",
      status: "STABLE"
    },
    {
      id: "PROT 002",
      name: "CHESS_TACTICAL",
      intel: "HIGH-FIDELITY BATTLE SIMULATION WITH MOVE-VALIDATION LOGIC.",
      arsenal: ["Next.js", "TypeScript", "Tailwind", "Chess.js"],
      link: "#",
      status: "OPTIMIZED"
    },
    {
      id: "PROT 003",
      name: "LABOR_LOOM",
      intel: "NEURAL HUB FOR CONTRACTOR ACQUISITION AND LABOR OPTIMIZATION.",
      arsenal: ["React", "Tailwind", "Node.js", "MongoDB"],
      link: "#",
      status: "ACTIVE"
    }
  ];

  return (
    <section id="projects" className="relative w-full bg-[#050505] py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      
      {/* 1. THE CENTRAL SPINE (Vertical Axis) */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-zinc-900 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-24 md:mb-40 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-['Sb'] text-6xl sm:text-7xl md:text-9xl text-white tracking-tighter uppercase"
          >
            Vault_<span className="text-red-700">01</span>
          </motion.h2>
          <p className="font-['tox'] text-zinc-500 text-[8px] md:text-[9px] tracking-[0.8em] md:tracking-[1.5em] uppercase mt-4">
            Authorized Personnel Only // Scanning Core...
          </p>
        </div>

        {/* LINEAR PROJECT MAPPING */}
        <div className="flex flex-col gap-24 md:gap-40 lg:gap-64">
          {architectures.map((proj, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-10 md:gap-12`}
            >
              {/* THE NODE (The point on the spine) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-red-600 rotate-45 hidden lg:block z-20 group-hover:bg-red-600 transition-colors duration-500 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />

              {/* TEXT SIDE: THE SCHEMATICS */}
              <div className="w-full lg:w-[45%] space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-['tox'] text-[9px] md:text-[10px] text-red-600 border border-red-900/50 px-2 py-1 italic tracking-widest">{proj.id}</span>
                  <span className="font-['tox'] text-[7px] md:text-[8px] text-zinc-600 tracking-widest uppercase">{proj.status}</span>
                </div>
                
                <h3 className="font-['Sb'] text-4xl sm:text-5xl md:text-7xl text-white tracking-tight uppercase transition-colors hover:text-red-600">
                  {proj.name}
                </h3>
                
                <p className="font-['tox'] text-[10px] md:text-[11px] text-zinc-500 leading-relaxed tracking-widest max-w-sm uppercase">
                  {proj.intel}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
                  {proj.arsenal.map((tech, i) => (
                    <span key={i} className="font-['tox'] text-[9px] md:text-[10px] text-white border border-zinc-800 px-2 md:px-3 py-1 bg-zinc-900/40 tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION SIDE: THE UPLINK */}
              <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-end justify-center mt-6 lg:mt-0">
                <div className="relative group w-full sm:w-auto">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative border border-zinc-900 p-8 md:p-12 bg-zinc-950/50 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center"
                  >
                    {/* Fake Loading Bar Decor */}
                    <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-red-950/20" />
                    
                    <div className="flex flex-col gap-6 md:gap-8 items-center text-center">
                       <FaGithub className="text-zinc-700 text-4xl md:text-5xl hover:text-white transition-colors cursor-pointer" />
                       <p className="font-['tox'] text-[7px] md:text-[8px] text-zinc-600 tracking-widest uppercase lg:rotate-90 lg:my-6">System_Link_0{index+1}</p>
                       <motion.a 
                         href={proj.link}
                         whileHover={{ scale: 1.2, color: "#ff0000" }}
                         className="text-white text-xl md:text-2xl"
                       >
                         <FaExternalLinkAlt />
                       </motion.a>
                    </div>
                  </motion.div>
                  
                  {/* Decorative Ghost ID (Hidden on smaller mobile to prevent layout shift) */}
                  <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-4 font-['Sb'] text-6xl md:text-[8rem] text-white/[0.02] pointer-events-none uppercase">
                    {proj.id.split(' ')[1]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DECOR: THE SCANLINE */}
      <div className="absolute top-0 right-4 md:right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-red-900/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-zinc-900/50" />
    </section>
  );
};

export default Projects;