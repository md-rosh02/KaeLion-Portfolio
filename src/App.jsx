import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Sabout from './components/Sabout'
import About from './components/About' 
import Education from './components/Education'
import Loader from './components/Loader'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import { useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

// Inside your component function:
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001
});


useEffect(() => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}, []);

  return (
    // Ensure overflow-y-auto is present to allow scrolling
    <div className='relative w-full min-h-screen bg-transparent selection:bg-red-800 selection:text-white overflow-x-hidden overflow-y-auto'>
      
      {/* FIXED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-transparent" />

      <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-[9999] shadow-[0_0_15px_rgba(255,0,0,0.5)]"
    />
      <CustomCursor/>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          
          {/* Use a simple div or motion.div without restrictive height */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-full"
          >
            {/* These sections will now stack vertically */}
            <Sabout />
            <About />
            <Education />
            <Experience/>
            <Projects/>
            <Skills/>
            <Contact/>
          </motion.main>
        </>
      )}
    </div>
  )
}

export default App