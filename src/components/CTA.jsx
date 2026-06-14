import React from 'react';
import { motion } from 'framer-motion';

const CTA = ({ scrollToSection }) => {
  return (
    <>
      <style>{`
        /* CTA Section */
        .cta-section {
          padding: 120px 2rem;
          background: linear-gradient(135deg, #8B4049, #D4A5A5);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: drift 20s linear infinite;
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 600;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .cta-content p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .cta-button-white {
          display: inline-block;
          padding: 1.2rem 3rem;
          background: white;
          color: #8B4049;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          border: none;
          font-size: 1.05rem;
          cursor: pointer;
        }

        .cta-button-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .cta-content h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="cta-content">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Capture Your Story
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your special moments deserve to be preserved in the most beautiful way. Let's create something timeless together.
          </motion.p>
          <motion.button
            className="cta-button-white"
            onClick={() => scrollToSection('contact')}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default CTA;
