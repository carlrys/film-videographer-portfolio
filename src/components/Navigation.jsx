import React from 'react';
import { Menu } from 'lucide-react';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  return (
    <>
      <style>{`
        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(250, 247, 245, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(212, 165, 165, 0.2);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: #8B4049;
          letter-spacing: 0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #2D2D2D;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 400;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #8B4049;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #8B4049;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(250, 247, 245, 0.98);
            backdrop-filter: blur(10px);
            padding: 2rem;
            border-bottom: 1px solid rgba(212, 165, 165, 0.2);
          }

          .mobile-menu a {
            display: block;
            padding: 1rem 0;
            color: #2D2D2D;
            text-decoration: none;
            font-size: 1.1rem;
            border-bottom: 1px solid rgba(212, 165, 165, 0.1);
            cursor: pointer;
          }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-container">
          <div className="logo">Catherine</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('work')}>My Work</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a onClick={() => scrollToSection('hero')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('work')}>My Work</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
