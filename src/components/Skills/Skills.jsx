import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skillCategories } from '../../data/resumeData';
import { staggerContainer, staggerItem, fadeInLeft } from '../../animations/variants';
import './Skills.css';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          02 — Skills
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
          Technical <span>Stack</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              className="skill-cat card"
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="cat-header">
                <div className="cat-icon">{cat.icon}</div>
                <div className="cat-name">{cat.name}</div>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
