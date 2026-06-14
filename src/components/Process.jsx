import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <>
      <style>{`
        /* Process Section */
        .process-section {
          padding: 50px 2rem;
          background: linear-gradient(180deg, #FAF7F5 0%, #F5F0EC 100%);
        }

        .process-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .process-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .process-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 1rem;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .process-card {
          padding: 3rem 2rem;
          background: white;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(212, 165, 165, 0.2);
        }

        .process-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(139, 64, 73, 0.15);
        }

        .process-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, rgba(212, 165, 165, 0.2), rgba(139, 64, 73, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
        }

        .process-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: #8B4049;
          margin-bottom: 1rem;
        }

        .process-card p {
          color: #5A5A5A;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .process-header h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Approach
            </motion.h2>
          </div>
          <div className="process-grid">
            <motion.div
              className="process-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="process-icon">💍</div>
              <h3>Pre-Wedding Consultation</h3>
              <p>We'll meet to discuss your vision, timeline, and special moments you want captured. This ensures I understand your story before the big day.</p>
            </motion.div>
            <motion.div
              className="process-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="process-icon">🎥</div>
              <h3>Unobtrusive Filming</h3>
              <p>On your wedding day, I blend into the background to capture authentic moments as they naturally unfold, without interrupting your celebration.</p>
            </motion.div>
            <motion.div
              className="process-card"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="process-icon">✨</div>
              <h3>Cinematic Storytelling</h3>
              <p>After your wedding, I carefully craft your film with professional color grading, music, and editing to create a timeless piece you'll treasure forever.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
