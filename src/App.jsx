import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

import './styles/global.css';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [showBtt, setShowBtt] = useState(false);
  const [toast, setToast] = useState(false);
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  // Cursor
  useEffect(() => {
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);
    let raf;
    const animate = () => {
      cursorPos.current.x += (mouseRef.current.x - cursorPos.current.x) * 0.12;
      cursorPos.current.y += (mouseRef.current.y - cursorPos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x - 11 + 'px';
        cursorRef.current.style.top  = cursorPos.current.y - 11 + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = mouseRef.current.x - 2.5 + 'px';
        dotRef.current.style.top  = mouseRef.current.y - 2.5 + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  // Scroll
  useEffect(() => {
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setScrollPct(pct);
      setShowBtt(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3500);
  };

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />
      <div className="custom-cursor" ref={cursorRef} />
      <div className="cursor-dot" ref={dotRef} />

      <AnimatePresence>
        {loaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <main>
              <Hero />
              <div className="divider" />
              <About />
              <div className="divider" />
              <Services />
              <div className="divider" />
              <Skills />
              <div className="divider" />
              <Experience />
              <div className="divider" />
              <Projects />
              <div className="divider" />
              <Education />
              <div className="divider" />
              <Blog />
              <div className="divider" />
              <Contact showToast={showToast} />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBtt && loaded && (
          <motion.button
            className="btt-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ y: -4 }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>

      <div className={`toast ${toast ? 'show' : ''}`}>
        ✓ Message sent! I'll get back to you soon.
      </div>
    </>
  );
};

export default App;
