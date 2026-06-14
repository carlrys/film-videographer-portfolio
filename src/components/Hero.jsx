import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ scrollToSection }) => {
  return (
    <>
      <style>{`
        /* Hero Section */
        .hero {
          padding: 140px 2rem 0px;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 90vh;
        }

        .hero-content h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          font-weight: 300;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: #2D2D2D;
        }

        .hero-content .name {
          font-weight: 600;
          display: block;
        }

        .hero-content .tagline {
          font-size: 2rem;
          line-height: 1.3;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #8B4049, #D4A5A5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
        }

        .hero-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #5A5A5A;
          margin-bottom: 2.5rem;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #C9A66B, #D4A5A5);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(201, 166, 107, 0.3);
          cursor: pointer;
          border: none;
          font-size: 1rem;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201, 166, 107, 0.4);
        }

        .hero-image {
          position: relative;
        }

        .hero-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(139, 64, 73, 0.15);
        }

        .category-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .badge {
          padding: 0.5rem 1.25rem;
          background: white;
          border: 1px solid rgba(212, 165, 165, 0.3);
          border-radius: 50px;
          font-size: 0.85rem;
          letter-spacing: 1px;
          font-weight: 500;
          color: #8B4049;
        }

        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-content h1 {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content .tagline {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <motion.section 
        id="hero"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm <span className="name">Catherine.</span>
          </motion.h1>
          <motion.div
            className="tagline"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Film Videographer • Cinematographer • Editor
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            From behind the camera to the editing room, I craft cinematic stories that blend creativity, emotion, and authenticity.
          </motion.p>
          <motion.button
            className="cta-button"
            onClick={() => scrollToSection('work')}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            View My Work
          </motion.button>
          <motion.div
            className="category-badges"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="badge">WEDDINGS</span>
            <span className="badge">ENGAGEMENT</span>
            <span className="badge">SAME-DAY EDIT</span>
            <span className="badge">CINEMATIC</span>
            <span className="badge">DESTINATION</span>
            <span className="badge">DESTINATION</span>
          </motion.div>
        </div>
        <motion.div
          className="hero-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <img src="src/assets/hero-image.jpg" alt="Catherine" />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Hero;
