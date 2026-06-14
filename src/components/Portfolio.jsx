import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Portfolio = ({ projects, setSelectedVideo }) => {
  return (
    <>
      <style>{`
        /* Portfolio Section */
        .portfolio-section {
          padding: 100px 2rem;
          background: #FAF7F5;
        }

        .portfolio-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .portfolio-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem;
          font-weight: 600;
          color: #2D2D2D;
          margin-bottom: 1rem;
        }

        .portfolio-header .subtitle {
          font-size: 1.2rem;
          color: #8B4049;
          font-style: italic;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .portfolio-grid .large {
          grid-column: span 2;
          grid-row: span 2;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          background: white;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(139, 64, 73, 0.2);
        }

        .project-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .project-card:hover .play-button {
          background: #C9A66B;
          transform: translate(-50%, -50%) scale(1.1);
        }

        .play-button svg {
          color: #8B4049;
          transition: color 0.3s ease;
        }

        .project-card:hover .play-button svg {
          color: white;
        }

        .project-info {
          color: white;
        }

        .project-info h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .project-info p {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .category-tag {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(201, 166, 107, 0.9);
          border-radius: 50px;
          font-size: 0.75rem;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .portfolio-header h2 {
            font-size: 2.5rem;
          }

          .portfolio-grid {
            grid-template-columns: 1fr;
          }

          .portfolio-grid .large {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      `}</style>

      <section id="work" className="portfolio-section">
        <div className="portfolio-container">
          <div className="portfolio-header">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Stories I've Captured
            </motion.h2>
            <motion.p
              className="subtitle"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Each story is a unique journey
            </motion.p>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${index === 0 ? 'large' : ''}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedVideo(project)}
              >
                <img src={project.thumbnail} alt={project.coupleNames} />
                <div className="play-button">
                  <Play size={28} fill="currentColor" />
                </div>
                <div className="project-overlay">
                  <div className="project-info">
                    <h3>{project.coupleNames}</h3>
                    <p>{project.date} • {project.location}</p>
                    <span className="category-tag">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
