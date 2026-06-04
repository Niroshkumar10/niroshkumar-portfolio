import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects } from '../../data/resumeData';
import { fadeInLeft, staggerContainer, staggerItem } from '../../animations/variants';
import './Projects.css';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          04 — Projects
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
          Selected <span>Work</span>
        </motion.h2>

        <motion.div
          className="proj-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              className={`proj-card card ${p.highlight ? 'featured' : ''}`}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {p.highlight && <div className="proj-featured-badge">⭐ Featured</div>}

              <div className="proj-num-cat">
                <span className="proj-num">{p.num}</span>
                <span className="proj-cat">{p.category}</span>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.description}</p>

              <div className="proj-features">
                {p.features.slice(0, 4).map((f) => (
                  <span key={f} className="feature-pill">{f}</span>
                ))}
              </div>

              <div className="proj-stack">
                {p.stack.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>

              <div className="proj-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <FiGithub /> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-link">
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
