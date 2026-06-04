import { motion } from 'framer-motion';
import { FiClock, FiGithub, FiLinkedin } from 'react-icons/fi';
import { blogPosts, personalInfo } from '../../data/resumeData';
import './Blog.css';

const Blog = () => (
  <section className="section blog" id="blog">
    <div className="container">
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Writing
      </motion.span>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Articles &amp; <span>Insights</span>
      </motion.h2>

      <div className="blog-grid">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="blog-meta">
              <span className="blog-draft-badge">
                <span className="draft-dot" /> Draft
              </span>
              <span className="blog-time">
                <FiClock size={11} /> {post.readTime}
              </span>
            </div>

            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>

            <div className="blog-footer">
              <div className="blog-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
              <span className="blog-soon">Coming soon</span>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="blog-cta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="blog-cta-text">
          Articles in progress — follow me for updates when they drop.
        </p>
        <div className="blog-cta-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="cta-link">
            <FiGithub /> GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="cta-link">
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Blog;
