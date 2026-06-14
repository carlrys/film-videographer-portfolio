import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <style>{`
        /* About Section */
        .about-section {
          padding: 50px 2rem;
          background: linear-gradient(180deg, #FAF7F5 0%, #F5F0EC 100%);
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        //   align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image img {
          width: 100%;
          height: 500px;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(139, 64, 73, 0.1);
        }

        .about-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: #2D2D2D;
        }

        .about-content .highlight {
          color: #8B4049;
        }

        .about-content p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #5A5A5A;
          margin-bottom: 2rem;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: #8B4049;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #5A5A5A;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-content h2 {
            font-size: 2.5rem;
          }

          .stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="about-container">
          <motion.div
            className="about-image"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="src/assets/movie-poster.jpg" alt="Okay Ra Gihapon poster" />
            <img src="src/assets/cathy-at-work.jpg" alt="Catherine Anne Reyes at work" />
            {/* <div className="stats">
              <div className="stat">
                <div className="stat-number">150+</div>
                <div className="stat-label">Weddings Filmed</div>
              </div>
              <div className="stat">
                <div className="stat-number">4+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">12</div>
                <div className="stat-label">Locations</div>
              </div>
            </div> */}
          </motion.div>
          <motion.div
            className="about-content"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>About <span className="highlight">Catherine Anne Reyes</span></h2>
            <p>
              Hi, I'm a Film and Media graduate and filmmaker with a passion for visual storytelling.
              I enjoy being behind the camera, capturing meaningful moments and bringing stories to life through cinematography.
              My work primarily focuses on short films, documentaries, and creative visual projects.
            </p>
            <p>
              During my academic years, I worked as a cinematographer and video editor on student films that received recognition at multiple film festivals. My dedication and performance during my internship earned me the Best Intern Award. At the same time, I gained valuable industry experience by working on short films, corporate videos, and commercial productions as a Production Assistant, Talent Coordinator, Behind-the-Scenes Videographer, and Photographer.
              While filmmaking remains my primary passion, I currently specialize in wedding post-production, editing international wedding films including full-length documentaries, feature edits, and cinematic highlight reels. 
              My commitment to quality and creativity has also been recognized through awards such as Employee of the Month.
              Whether filming a documentary, capturing a cinematic scene, or crafting a wedding film in the editing room, I am driven by a passion for creating authentic and impactful stories through visual media.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
