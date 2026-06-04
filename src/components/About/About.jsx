import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo, highlights } from '../../data/resumeData';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from '../../animations/variants';
import './About.css';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          variants={fadeInLeft}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          01 — About
        </motion.span>
        <motion.h2
          className="section-title"
          variants={fadeInLeft}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
        >
          Who I <span>Am</span>
        </motion.h2>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-text"
            variants={fadeInLeft}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <div className="about-avatar">NK</div>
            <p>
              I'm a Full Stack Developer based in Coimbatore, Tamil Nadu, with a passion for building
              production-ready web applications from the ground up. Currently working at NeuralArc
              Global Pvt Ltd, I've delivered e-commerce platforms, admin dashboards, and enterprise
              applications.
            </p>
            <p>
              I thrive in agile environments, working closely with senior developers on code reviews,
              CI/CD pipelines, and performance optimization. My approach blends clean architecture
              with pixel-perfect UI execution aligned with Figma prototypes.
            </p>
            <p>
              Pursuing my B.E. in Computer Science at Arjun College of Technology (graduating 2025)
              with a CGPA of 7.77, I bring both academic rigor and real-world production experience
              to every challenge.
            </p>

            <div className="about-contact-pills">
              <a href={`mailto:${personalInfo.email}`} className="contact-pill">
                ✉ {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-pill">
                📱 {personalInfo.phone}
              </a>
              <span className="contact-pill">📍 {personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            className="about-highlights"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {highlights.map((h) => (
              <motion.div key={h.title} className="highlight-card card" variants={staggerItem}>
                <div className="hl-icon">{h.icon}</div>
                <div>
                  <div className="hl-title">{h.title}</div>
                  <div className="hl-desc">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
