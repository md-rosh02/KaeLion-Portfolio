import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

/* --- SUB-COMPONENT: ADVANCED MINIMALIST PROFILE CARD --- */
const ProfileCard = ({ isOpen, onClose }) => {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-roshan02/', uid: '001' },
    { name: 'GitHub', url: 'https://github.com/md-rosh02', uid: '002' },
    { name: 'Instagram', url: 'https://www.instagram.com/_i_wren_lix/?hl=en', uid: '003' },
    { name: 'Archive', url: '#', uid: '004' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[5000] bg-[#050505]/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        >
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[grid:20px_20px]" />

          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -20 }}
            className="relative w-full max-w-lg my-auto"
          >
            {/* Minimalist Top Bar */}
            <div className="flex justify-between items-end mb-8 md:mb-12">
              <div className="space-y-1">
                <p className="font-['tox'] text-[7px] md:text-[8px] text-zinc-600 tracking-[0.4em] md:tracking-[0.6em] uppercase">User_Authorization</p>
                <h2 className="font-['Sb'] text-4xl md:text-5xl text-white leading-none tracking-tighter">ROSHAN</h2>
              </div>
              <button 
                onClick={onClose} 
                className="group flex items-center gap-2 md:gap-4 focus:outline-none"
              >
                <span className="font-['tox'] text-[7px] md:text-[8px] text-zinc-500 group-hover:text-red-600 transition-colors uppercase tracking-[0.3em] md:tracking-[0.4em]">Deactivate</span>
                <div className="w-6 md:w-8 h-[1px] bg-zinc-800 group-hover:bg-red-600 transition-colors" />
              </button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6 md:gap-8 border-t border-zinc-900 pt-8">
              
              {/* Left Column: Biometric HUD */}
              <div className="col-span-12 md:col-span-5 space-y-6">
                <div className="relative aspect-square bg-zinc-900/20 border border-zinc-900 flex items-center justify-center overflow-hidden max-w-[200px] mx-auto md:max-w-none">
                  <motion.div 
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[1px] bg-red-600/40 z-10 shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                  />
                  <span className="font-['Sb'] text-[60px] md:text-[100px] text-white/[0.02] select-none">R</span>
                  <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 font-['tox'] text-[5px] md:text-[6px] text-zinc-600 tracking-widest uppercase">
                    Ref_Node: {Math.random().toString(36).substring(7).toUpperCase()}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between font-['tox'] text-[7px] text-zinc-500 uppercase">
                    <span>Sync_Integrity</span>
                    <span>100%</span>
                  </div>
                  <div className="h-[1px] w-full bg-zinc-900">
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.5, duration: 1.5 }} className="h-full bg-red-600 shadow-[0_0_10px_red]" />
                  </div>
                </div>
              </div>

              {/* Right Column: Social Nodes */}
              <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
                <div className="space-y-0.5">
                  <p className="font-['tox'] text-[7px] text-zinc-600 uppercase tracking-[0.3em] mb-4">Connect_Protocol</p>
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="group flex items-center justify-between py-3 md:py-4 border-b border-zinc-900/50 transition-colors hover:border-red-900/50"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-['tox'] text-[8px] text-zinc-700 group-hover:text-red-600">{social.uid}</span>
                        <span className="font-['tox'] text-[10px] md:text-xs text-zinc-400 group-hover:text-white uppercase tracking-[0.2em] transition-colors">{social.name}</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full border border-zinc-800 group-hover:bg-red-600 group-hover:border-red-600 transition-all shadow-[0_0_5px_transparent] group-hover:shadow-[0_0_8px_red]" />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 font-['tox'] text-[8px] text-zinc-600 leading-relaxed uppercase">
                  <p>Designation: Full-Stack Interface Architect</p>
                  <p className="text-zinc-800">C_2025 // Global_Access</p>
                </div>
              </div>
            </div>

            {/* Bottom Aesthetic Footer */}
            <div className="mt-8 md:mt-12 flex items-center gap-4 opacity-30">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
              <div className="text-[5px] font-['tox'] text-zinc-500 tracking-[1em] md:tracking-[1.5em] uppercase whitespace-nowrap">Secure Connection Established</div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* --- MAIN COMPONENT --- */
const Sabout = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const audioRef = useRef(null);
  const name = "ROSHAN";

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    audioRef.current = new Audio('/katana-draw.mp3');
    audioRef.current.volume = 0.4;
  }, []);

  const handleSync = () => {
    setIsSubmitted(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
    setIsFormOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsFormOpen(false), 3000);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#080808] flex flex-col justify-between p-6 md:p-12 overflow-hidden select-none">
      
      {/* Profile Card Integration */}
      <ProfileCard isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />

      {/* ADVANCED RIGHT-SIDE SCROLL HUD */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-zinc-900 z-[100] hidden md:block">
        <motion.div 
          style={{ scaleY }}
          className="w-full h-full bg-red-600 origin-top shadow-[0_0_15px_red]"
        />
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-['tox'] text-[6px] text-zinc-600 uppercase">Start</div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 font-['tox'] text-[6px] text-zinc-600 uppercase">End</div>
      </div>

      {/* Hire Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-black/98 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

            <motion.div 
              initial={{ scale: 1.1, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-2xl bg-[#050505] border border-red-900/30 p-6 md:p-12 shadow-[0_0_100px_rgba(255,0,0,0.1)] my-auto"
            >
              <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t border-l border-red-600" />
              <div className="absolute -bottom-[1px] -right-[1px] w-12 h-12 border-b border-r border-red-600" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div key="form" exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <div className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start gap-4">
                      <div className="space-y-2">
                        <h2 className="font-['Sb'] text-3xl md:text-4xl text-white tracking-tighter uppercase leading-none">Hire Me</h2>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-red-600 animate-pulse" />
                          <p className="font-['Hp'] text-[8px] md:text-[9px] text-zinc-500 tracking-[0.3em] md:tracking-[0.5em] uppercase">Status: Available for Projects</p>
                        </div>
                      </div>
                      <button onClick={() => setIsFormOpen(false)} className="font-['tox'] text-red-600 hover:text-white transition-colors text-[8px] tracking-[0.2em] border border-red-900/40 px-4 py-2 uppercase">Close Form</button>
                    </div>

                    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="group space-y-2">
                          <label className="font-['tox'] text-[9px] text-zinc-600 uppercase tracking-widest group-focus-within:text-red-600 transition-colors">Full Name</label>
                          <input required type="text" placeholder="Enter your name" className="w-full bg-transparent border-b border-zinc-800 p-2 font-['tox'] text-[10px] text-white focus:border-red-600 outline-none transition-all placeholder:text-zinc-800" />
                        </div>
                        <div className="group space-y-2">
                          <label className="font-['tox'] text-[9px] text-zinc-600 uppercase tracking-widest group-focus-within:text-red-600 transition-colors">Email Address</label>
                          <input required type="email" placeholder="Enter your email" className="w-full bg-transparent border-b border-zinc-800 p-2 font-['tox'] text-[10px] text-white focus:border-red-600 outline-none transition-all placeholder:text-zinc-800" />
                        </div>
                      </div>
                      <div className="group space-y-2">
                        <label className="font-['tox'] text-[9px] text-zinc-600 uppercase tracking-widest group-focus-within:text-red-600 transition-colors">Project Details</label>
                        <textarea required rows="3" placeholder="Tell me about your project" className="w-full bg-transparent border border-zinc-800 p-4 font-['tox'] text-[10px] text-white focus:border-red-600 outline-none transition-all resize-none placeholder:text-zinc-800" />
                      </div>
                      <motion.button type="submit" whileHover={{ letterSpacing: "1em", backgroundColor: "#ff0000", color: "#fff" }} whileTap={{ scale: 0.95 }} className="w-full py-4 md:py-6 bg-transparent border border-red-600 text-red-600 font-['tox'] text-[11px] tracking-[0.6em] md:tracking-[0.8em] uppercase transition-all duration-500">Send Message</motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 border border-red-600 flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-red-600/10 animate-pulse" />
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-red-600 text-3xl md:text-4xl">✓</motion.div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="font-['Sb'] text-2xl md:text-3xl text-white uppercase tracking-tighter">Transmission Sent</h2>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Data Strip */}
      <div className="flex justify-between items-start z-20">
        <div className="font-['tox'] text-[8px] md:text-[10px] text-zinc-500 tracking-[0.3em] md:tracking-[0.5em] leading-relaxed uppercase">
          <p>Index_001</p>
          <p className="text-red-700 animate-pulse">Protocol_Active</p>
        </div>
        <div className="text-right font-['tox'] text-[8px] md:text-[10px] text-zinc-500 tracking-[0.3em] md:tracking-[0.5em] uppercase">
          <p>15.4214 / 75.6171</p>
          <p>Hulkoti_Node</p>
        </div>
      </div>

      {/* Kinetic Center */}
      <div className="relative flex flex-col items-center justify-center flex-1">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute font-['Sb'] text-[25vw] text-white leading-none select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px white", fill: "transparent" }}
        >
          {name}
        </motion.h1>

        <div className="relative overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.8, 0, 0.1, 1] }}
            className="font-['Sb'] text-[20vw] md:text-[18vw] text-white leading-none tracking-tighter"
          >
            {name}
          </motion.h1>
        </div>

        <div className="flex items-center gap-4 md:gap-8 mt-4">
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} md={{ width: 100 }} transition={{ delay: 1, duration: 1 }} className="h-[1px] bg-red-600 w-10 md:w-[100px]" />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="font-['tox'] text-zinc-400 text-[8px] md:text-[10px] tracking-[0.8em] md:tracking-[1.5em] uppercase whitespace-nowrap">Fullstack_Ronin</motion.span>
          <motion.div initial={{ width: 0 }} animate={{ width: 40 }} md={{ width: 100 }} transition={{ delay: 1, duration: 1 }} className="h-[1px] bg-red-600 w-10 md:w-[100px]" />
        </div>
      </div>

      {/* Bottom Utility Dock */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end z-20 gap-8">
        <div className="max-w-xs text-center md:text-left">
          <p className="font-['tox'] text-[8px] md:text-[9px] text-zinc-600 tracking-widest leading-loose uppercase italic">
            Architecting neural interfaces and scalable full-stack ecosystems. 
            Blending lethal precision with creative chaos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <motion.button
            onClick={() => setIsProfileOpen(true)}
            whileHover={{ y: -5, color: "#fff", borderColor: "#ff0000" }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 md:px-8 py-3 md:py-4 border border-zinc-900 bg-[#0a0a0a]/50 text-zinc-600 font-['tox'] text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase flex items-center justify-center gap-3 transition-all duration-300"
          >
            <div className="w-1 h-1 bg-zinc-800 group-hover:bg-red-600 shadow-[0_0_5px_red] transition-colors" />
            Access ID
          </motion.button>

          <motion.a
            href="src/assets/Finale.pdf" 
            download="Roshan_Resume.pdf"
            whileHover={{ y: -5, color: "#fff", borderColor: "#444" }}
            whileTap={{ scale: 0.95 }}
            className="group px-6 md:px-8 py-3 md:py-4 border border-zinc-900 bg-[#0a0a0a]/50 text-zinc-600 font-['tox'] text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase flex items-center justify-center gap-3 transition-all duration-300"
          >
            <div className="w-1 h-1 bg-zinc-800 group-hover:bg-red-600 transition-colors" />
            Export CV
          </motion.a>

          <motion.button
            onClick={handleSync}
            whileHover={{ backgroundColor: "#ff0000", color: "#fff", boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            className="px-8 md:px-12 py-3 md:py-4 border border-zinc-800 bg-transparent text-zinc-400 font-['tox'] text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase transition-all duration-300"
          >
            Initiate Sync
          </motion.button>
        </div>
      </div>

      {/* Axis Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-zinc-900" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900" />
      </div>
    </section>
  );
};

export default Sabout;