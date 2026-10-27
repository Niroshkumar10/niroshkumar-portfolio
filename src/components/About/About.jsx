import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo, highlights } from '../../data/resumeData';
import { staggerContainer, staggerItem, fadeInLeft, fadeInRight } from '../../animations/variants';
import './About.css';

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="section" id="about" ref={ref} data-aos="fade-right">
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
              I'm a Full Stack Developer based in Coimbatore, Tamil Nadu, with 2+ years of experience
              building production web and mobile applications. At NeuralArc Global Pvt Ltd, I've
              contributed end-to-end to MicroLab (home sample collection) and RedTaxi (cab booking),
              covering booking, dispatch, live tracking, fare, payment and admin workflows.
            </p>
            <p>
              I work across Flutter, React.js, Node.js, Express.js and MySQL, with a focus on REST API
              design, OTP/JWT authentication, role-based access control, and real-time features using
              Socket.IO, Firebase Cloud Messaging and Google Maps. I support production deployments,
              code reviews and GitLab CI/CD in an agile team.
            </p>
           <p>
  A graduate in Computer Science and Engineering from Arjun College of Technology,
  I have successfully transitioned from academia to the professional world, where I
  contribute to building production-ready applications. My academic background, combined
  with practical experience in full-stack development, enables me to deliver reliable,
  user-focused, and scalable software solutions.
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
