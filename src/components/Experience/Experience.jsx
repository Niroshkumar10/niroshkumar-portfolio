import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { experiences } from '../../data/resumeData';
import { fadeInLeft, timelineItem } from '../../animations/variants';
import './Experience.css';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          03 — Experience
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
          Work <span>History</span>
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              custom={i}
              variants={timelineItem}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              <div className="timeline-dot" />
              <motion.div
                className="exp-card card"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.company} · {exp.location}</div>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((p, pi) => (
                    <li key={pi}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
