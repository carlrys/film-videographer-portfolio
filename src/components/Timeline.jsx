import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <>
      <style>{`
        /* Education & Experience */
        .timeline-section {
          padding: 100px 2rem 0px;
          background: #FAF7F5;
        }

        .timeline-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .timeline-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 1rem;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .timeline-grid h3{
          padding-bottom: 1rem;
        }

        .timeline-column h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 600;
          color: #8B4049;
          margin-bottom: 2rem;
        }

        .timeline-item {
          padding: 2rem;
          background: white;
          border-radius: 15px;
          margin-bottom: 1.5rem;
          border-left: 3px solid #D4A5A5;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .timeline-item h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 0.5rem;
        }

        .timeline-item .subtitle {
          font-size: 0.95rem;
          color: #8B4049;
          margin-bottom: 0.75rem;
        }

        .timeline-item .date {
          font-size: 0.85rem;
          color: #999;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .timeline-header h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="timeline-section">
        <div className="timeline-container">
          <div className="timeline-header">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Experience & Training
            </motion.h2>
          </div>
          <div className="timeline-grid">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Certifications & Training</h3>
              <div className="timeline-item">
                <h4>Advanced Cinematography</h4>
                <div className="subtitle">Film School Philippines</div>
                <div className="date">2021</div>
              </div>
              <div className="timeline-item">
                <h4>Wedding Videography Masterclass</h4>
                <div className="subtitle">Philip Bloom Workshop</div>
                <div className="date">2019</div>
              </div>
              <div className="timeline-item">
                <h4>Color Grading Certification</h4>
                <div className="subtitle">DaVinci Resolve</div>
                <div className="date">2018</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Experience Highlights</h3>
              <div className="timeline-item">
                <h4>Lead Videographer</h4>
                <div className="subtitle">Luxury Destination Weddings</div>
                <div className="date">2020 - Present</div>
              </div>
              <div className="timeline-item">
                <h4>Featured Filmmaker</h4>
                <div className="subtitle">WeddingWire & The Knot</div>
                <div className="date">2019 - Present</div>
              </div>
              <div className="timeline-item">
                <h4>Founder</h4>
                <div className="subtitle">Sophia Films Studio</div>
                <div className="date">2016 - Present</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
