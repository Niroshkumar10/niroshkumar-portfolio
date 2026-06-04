import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';
import './Footer.css';

const navLinks = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-brand">
        <div className="footer-logo">NK.</div>
        <p className="footer-tagline">Full Stack Developer · Coimbatore, India</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {navLinks.map((l) => (
          <Link key={l} to={l} smooth duration={600} offset={-64} className="footer-link">
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </Link>
        ))}
      </nav>

      <div className="footer-socials">
        <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social" whileHover={{ y: -3 }}>
          <FiGithub />
        </motion.a>
        <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" whileHover={{ y: -3 }}>
          <FiLinkedin />
        </motion.a>
        <motion.a href={`mailto:${personalInfo.email}`} className="footer-social" whileHover={{ y: -3 }}>
          <FiMail />
        </motion.a>
      </div>
    </div>

    <div className="footer-copy">
      <p>© 2025 Niroshkumar K. Built with <FiHeart style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--blue-electric)' }} /> React + Vite</p>
    </div>
  </footer>
);

export default Footer;
