import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { education, certifications } from '../../data/resumeData';
import { fadeInLeft, staggerContainer, staggerItem } from '../../animations/variants';
import './Education.css';

const Education = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          05 — Education
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
          Academic <span>Background</span>
        </motion.h2>

        <motion.div
          className="edu-list"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {education.map((e) => (
            <motion.div key={e.id} className="edu-card card" variants={staggerItem} whileHover={{ x: 4 }}>
              <div className="edu-icon">{e.icon}</div>
              <div className="edu-body">
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.institution}</div>
                <div className="edu-meta">
                  <span className="edu-year">{e.year}</span>
                  <span className="edu-grade">{e.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="cert-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="cert-heading">
            <span className="section-label" style={{ display: 'inline', marginBottom: 0 }}>Certifications</span>
          </h3>
          <motion.div
            className="cert-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {certifications.map((c) => (
              <motion.div key={c.id} className="cert-card card" variants={staggerItem} whileHover={{ y: -4 }}>
                <div className="cert-icon">{c.icon}</div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.org}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
