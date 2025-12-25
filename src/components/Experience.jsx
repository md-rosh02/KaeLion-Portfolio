import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const campaigns = [
    {
      id: "AI_ML_0924",
      title: "AI ML INTERN",
      org: "ROOMAN / IBM",
      date: "2024.09 — 2025.02",
      brief: "DEEP STACK NEURAL TRAINING & LLM ARCHITECTURE.",
      data: ["LLM_TUNING", "PREDICTIVE_MODELS", "IBM_WATSON_ENV"]
    },
    {
      id: "WD_1023",
      title: "WEB DEV INTERN",
      org: "TECH FORTUNE",
      date: "2023.10 — 2023.11",
      brief: "SCALABLE ARCHITECTURE & API THROUGHPUT OPTIMIZATION.",
      data: ["ANGULAR_CORE", "NODE_BACKEND", "UX_REINFORCEMENT"]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen w-full bg-black text-[#444] p-6 md:p-20 overflow-hidden font-mono">
      
      {/* 1. BACKGROUND SCHEMATIC LAYER */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-zinc-900" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900" />
        <div className="absolute top-1/4 right-0 w-1/2 h-[1px] bg-red-900/20" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 border border-zinc-900">
        
        {/* LEFT COLUMN: THE MASTER LOG (3 Cols) */}
        <div className="lg:col-span-3 border-r border-zinc-900 p-8 flex flex-col justify-between min-h-[400px]">
          <div>
            <h2 className="text-white text-5xl font-['Sb'] leading-none mb-4">LOG_EXP</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600 animate-pulse" />
              <p className="text-[9px] tracking-[0.4em] uppercase">System_Active</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[8px] leading-loose uppercase tracking-widest">
              Scanning historical nodes... <br />
              Data packets recovered: 02 <br />
              Integrity: 100%
            </p>
            <div className="h-[2px] w-full bg-zinc-900">
              <motion.div 
                animate={{ width: ["0%", "100%", "0%"] }} 
                transition={{ duration: 4, repeat: Infinity }} 
                className="h-full bg-red-600" 
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE DATA STREAM (9 Cols) */}
        <div className="lg:col-span-9 flex flex-col">
          {campaigns.map((camp, index) => (
            <motion.div 
              key={index}
              whileHover={{ backgroundColor: "rgba(255,0,0,0.02)" }}
              className={`relative p-10 flex flex-col md:flex-row gap-10 border-b border-zinc-900 transition-colors group`}
            >
              {/* DATE BLOCK */}
              <div className="w-40 shrink-0">
                <span className="text-zinc-600 group-hover:text-red-600 text-[10px] tracking-tighter block mb-2 transition-colors">
                  TIMESTAMP //
                </span>
                <span className="text-white text-xl tracking-tighter italic">{camp.date}</span>
              </div>

              {/* CORE DATA */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[8px] border border-zinc-800 px-2 py-0.5 text-zinc-600 uppercase">Node_{camp.id}</span>
                  <div className="h-[1px] flex-1 bg-zinc-900" />
                </div>

                <h3 className="text-white text-4xl font-['Sb'] uppercase mb-2 tracking-tighter group-hover:translate-x-2 transition-transform">
                  {camp.title}
                </h3>
                <p className="text-red-700 text-[10px] tracking-[0.3em] uppercase mb-6">{camp.org}</p>
                
                <p className="text-zinc-500 text-xs mb-8 tracking-widest leading-relaxed border-l border-zinc-800 pl-6 uppercase">
                  {camp.brief}
                </p>

                {/* TECH TAGS AS BINARY PIXELS */}
                <div className="flex flex-wrap gap-4">
                  {camp.data.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-600 group-hover:scale-150 transition-transform" />
                      <span className="text-[9px] text-zinc-700 group-hover:text-zinc-300 transition-colors uppercase tracking-[0.2em]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROTATED SIDETAG */}
              <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-center">
                <span className="text-[7px] text-zinc-900 group-hover:text-red-900 transition-colors tracking-[1em] uppercase whitespace-nowrap">
                  VERIFIED_RECORDS_M_ROSHAN
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER COORDINATES */}
      <div className="mt-2 flex justify-between text-[7px] text-zinc-800 tracking-[1em] uppercase">
        <p>SEC_01_RECOVERY</p>
        <p>15.4214 / 75.6171</p>
        <p>EST_2025</p>
      </div>
    </section>
  );
};

export default Experience;