import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';
import { useCountUp } from '../../hooks/useScrollAnimation';
import './Hero.css';

const StatItem = ({ value, suffix, label }) => {
  const count = useCountUp(value, 1800, true);
  return (
    <div className="hero-stat">
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

/* ---- Orbiting dot (parametric ellipse + rotation) ---- */
const OrbitDot = ({ cx, cy, rx, ry, duration, phase = 0, color, r = 5, rotation = 0 }) => {
  const xM = useMotionValue(cx + rx);
  const yM = useMotionValue(cy);

  useAnimationFrame((t) => {
    const angle = (t / 1000 / duration) * Math.PI * 2 + phase;
    const rawX = rx * Math.cos(angle);
    const rawY = ry * Math.sin(angle);
    const rad = (rotation * Math.PI) / 180;
    xM.set(cx + rawX * Math.cos(rad) - rawY * Math.sin(rad));
    yM.set(cy + rawX * Math.sin(rad) + rawY * Math.cos(rad));
  });

  return <motion.circle cx={xM} cy={yM} r={r} fill={color} filter="url(#dot-glow)" />;
};

/* ---- Tech Sphere Illustration ---- */
const TechSphere = () => (
  <div className="hero-visual">
    <div className="visual-glow" />

    <motion.div className="float-badge badge-react"
      animate={{ y: [0, -9, 0] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
    >
      <span style={{ color: '#61DAFB' }}>⚛</span> React.js
    </motion.div>
    <motion.div className="float-badge badge-node"
      animate={{ y: [0, 9, 0] }}
      transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.6 }}
    >
      <span style={{ color: '#68A063' }}>⬡</span> Node.js
    </motion.div>
    <motion.div className="float-badge badge-mongo"
      animate={{ y: [0, -7, 0] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1.1 }}
    >
      <span style={{ color: '#47A248' }}>◉</span> MongoDB
    </motion.div>

    <motion.div
      className="sphere-container"
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg className="sphere-svg" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Dot glow */}
          <filter id="dot-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Ring glow */}
          <filter id="ring-glow" x="-8%" y="-30%" width="116%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Ambient radial */}
          <radialGradient id="ambient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0" />
          </radialGradient>
          {/* Sphere body */}
          <radialGradient id="sphere-fill" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#1E3A6B" />
            <stop offset="100%" stopColor="#0B1220" />
          </radialGradient>
          {/* Sphere shine */}
          <radialGradient id="sphere-shine" cx="30%" cy="28%" r="52%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <circle cx="220" cy="220" r="215" fill="url(#ambient)" />

        {/* Ring 1 — horizontal */}
        <ellipse cx="220" cy="220" rx="165" ry="50"
          stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.35"
          fill="none" strokeDasharray="7 9" filter="url(#ring-glow)" />

        {/* Ring 2 — tilted +55° */}
        <ellipse cx="220" cy="220" rx="165" ry="50"
          stroke="#2563EB" strokeWidth="0.9" strokeOpacity="0.45"
          fill="none" strokeDasharray="7 9" filter="url(#ring-glow)"
          transform="rotate(55 220 220)" />

        {/* Ring 3 — tilted −55° */}
        <ellipse cx="220" cy="220" rx="165" ry="50"
          stroke="#38BDF8" strokeWidth="0.9" strokeOpacity="0.25"
          fill="none" strokeDasharray="7 9" filter="url(#ring-glow)"
          transform="rotate(-55 220 220)" />

        {/* Sphere body */}
        <circle cx="220" cy="220" r="62" fill="url(#sphere-fill)" />
        <circle cx="220" cy="220" r="62" fill="url(#sphere-shine)" />
        <circle cx="220" cy="220" r="62"
          fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx="220" cy="220" r="60"
          fill="none" stroke="#7DD3FC" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Center labels */}
        <text x="220" y="229" textAnchor="middle"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontSize="22" fontWeight="800" fill="#F8FAFC" letterSpacing="-1">
          NK
        </text>
        <text x="220" y="248" textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="8" fill="#38BDF8" letterSpacing="2.5" opacity="0.85">
          FULLSTACK
        </text>

        {/* Orbiting dots — Ring 1 */}
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={0}   duration={5}  phase={0}              color="#38BDF8" r={5.5} />
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={0}   duration={5}  phase={Math.PI}        color="#7DD3FC" r={3.5} />

        {/* Orbiting dots — Ring 2 */}
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={55}  duration={7}  phase={Math.PI / 3}    color="#60A5FA" r={5}   />
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={55}  duration={7}  phase={Math.PI * 1.33} color="#38BDF8" r={3.5} />

        {/* Orbiting dots — Ring 3 */}
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={-55} duration={9}  phase={Math.PI / 2}    color="#7DD3FC" r={4.5} />
        <OrbitDot cx={220} cy={220} rx={165} ry={50} rotation={-55} duration={9}  phase={Math.PI * 1.5}  color="#2563EB" r={3}   />

        {/* Outer static decorative dots */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <circle key={i}
              cx={220 + 208 * Math.cos(rad)}
              cy={220 + 208 * Math.sin(rad)}
              r="2.2" fill="#38BDF8" opacity="0.22"
            />
          );
        })}
      </svg>
    </motion.div>
  </div>
);

/* ---- Main Hero ---- */
const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.4,
      a: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.a * 0.45})`;
        ctx.fill();
      });
      pts.forEach((a, i) => {
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${(1 - d / 120) * 0.3})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', setSize); };
  }, []);

  const typeSequence = personalInfo.tagline.flatMap((t) => [t, 1800]);

  return (
    <section className="hero" id="hero">
      <div className="hero-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-content container">
        <div className="hero-grid">

          {/* Left — Text */}
          <div className="hero-text">
            <motion.div className="hero-badge"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="badge-dot" /> Available for opportunities
            </motion.div>

            <div className="hero-name-wrap">
              <motion.h2 className="hero-name"
                initial={{ opacity: 0, y: 60, skewY: 4 }} animate={{ opacity: 1, y: 0, skewY: 0 }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {personalInfo.name.split(' ')[0]}
                <span className="name-accent"> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
              </motion.h2>
            </div>

            <motion.p className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              Full Stack Developer —{' '}
              <span className="hero-typing">
                <TypeAnimation sequence={typeSequence} wrapper="span" repeat={Infinity} cursor speed={60} />
              </span>
            </motion.p>

            <motion.p className="hero-summary"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div className="hero-btns"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
            >
              <Link to="contact" smooth duration={600} offset={-64}>
                <motion.button className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <span>✉ Get in Touch</span>
                </motion.button>
              </Link>
              <Link to="projects" smooth duration={600} offset={-64}>
                <motion.button className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  View Projects →
                </motion.button>
              </Link>
            </motion.div>

            <motion.div className="hero-socials"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              {[
                { href: personalInfo.github,              icon: <FiGithub />,   label: 'GitHub' },
                { href: personalInfo.linkedin,            icon: <FiLinkedin />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`,  icon: <FiMail />,     label: 'Email' },
              ].map((s) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Sphere */}
          <TechSphere />
        </div>

        {/* Stats — full width */}
        <motion.div className="hero-stats"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          {personalInfo.stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>

      <motion.div className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiArrowDown />
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
