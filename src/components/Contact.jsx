import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <style>{`
        /* Contact Section */
        .contact-section {
          padding: 100px 2rem;
          background: #FAF7F5;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-container h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 1rem;
        }

        .contact-container p {
          font-size: 1.1rem;
          color: #5A5A5A;
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(212, 165, 165, 0.2), rgba(139, 64, 73, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .contact-method:hover .contact-icon {
          background: linear-gradient(135deg, #D4A5A5, #8B4049);
          transform: translateY(-3px);
        }

        .contact-method:hover .contact-icon svg {
          color: white;
        }

        .contact-icon svg {
          color: #8B4049;
          transition: color 0.3s ease;
        }

        .contact-link {
          color: #5A5A5A;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #8B4049;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: white;
          border: 2px solid rgba(212, 165, 165, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8B4049;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #8B4049;
          color: white;
          border-color: #8B4049;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .contact-container h2 {
            font-size: 2.5rem;
          }

          .contact-methods {
            flex-direction: column;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'd love to hear about your wedding plans. Reach out and let's start the conversation.
          </motion.p>
          <motion.div
            className="contact-methods"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <a href="mailto:sophia@sophiafilms.com" className="contact-link">
                sophia@sophiafilms.com
              </a>
            </div>
          </motion.div>
          <motion.div
            className="social-links"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
              {/* <Instagram size={20} /> */}
            </a>
            <a href="https://youtube.com" className="social-link" target="_blank" rel="noopener noreferrer">
              {/* <Youtube size={20} /> */}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
