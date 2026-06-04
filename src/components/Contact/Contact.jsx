import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/resumeData';
import { fadeInLeft, fadeInRight } from '../../animations/variants';
import './Contact.css';

const contactItems = [
  { icon: <FiMail />, label: 'Email', value: 'niroshkumar35@gmail.com', href: 'mailto:niroshkumar35@gmail.com' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 73395 35472', href: 'tel:+917339535472' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'nirosh-kumark2003', href: personalInfo.linkedin },
  { icon: <FiGithub />, label: 'GitHub', value: 'Niroshkumar10', href: personalInfo.github },
  { icon: <FiMapPin />, label: 'Location', value: 'Coimbatore, Tamil Nadu, India', href: null },
];

const Contact = ({ showToast }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert('Please fill in all fields.');
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      showToast();
    }, 1200);
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'}>
          06 — Contact
        </motion.span>
        <motion.h2 className="section-title" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.1 }}>
          Let's Work <span>Together</span>
        </motion.h2>

        <div className="contact-grid">
          {/* Left: Contact info */}
          <motion.div className="contact-info" variants={fadeInLeft} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.2 }}>
            <p className="contact-intro">
              I'm currently open to full-time roles and freelance opportunities. Whether you have a project in mind or just want to connect — my inbox is always open.
            </p>
            {contactItems.map((item) =>
              item.href ? (
                <motion.a key={item.label} href={item.href} className="contact-item card" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                  <div className="ci-icon">{item.icon}</div>
                  <div><div className="ci-label">{item.label}</div><div className="ci-val">{item.value}</div></div>
                </motion.a>
              ) : (
                <motion.div key={item.label} className="contact-item card" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                  <div className="ci-icon">{item.icon}</div>
                  <div><div className="ci-label">{item.label}</div><div className="ci-val">{item.value}</div></div>
                </motion.div>
              )
            )}
          </motion.div>

          {/* Right: Form */}
          <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeInRight} initial="hidden" animate={isVisible ? 'visible' : 'hidden'} transition={{ delay: 0.3 }}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project inquiry..." value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={handleChange} />
            </div>
            <motion.button type="submit" className="btn-primary send-btn" disabled={sending} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <span>{sending ? 'Sending...' : <><FiSend /> Send Message</>}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
