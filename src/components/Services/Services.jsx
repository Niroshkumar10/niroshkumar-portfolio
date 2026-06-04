import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiDatabase, FiLayers, FiFeather, FiShield } from 'react-icons/fi';
import { services } from '../../data/resumeData';
import './Services.css';

const ICONS = [FiMonitor, FiServer, FiDatabase, FiLayers, FiFeather, FiShield];

const Services = () => (
  <section className="section services" id="services">
    <div className="container">
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What I Do
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Services &amp; <span>Expertise</span>
      </motion.h2>

      <div className="services-grid">
        {services.map((svc, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={svc.id}
              className="service-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className="service-icon-wrap">
                <Icon />
              </div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.desc}</p>
              <div className="service-tags">
                {svc.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
