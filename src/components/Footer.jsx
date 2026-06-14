import React from 'react';

const Footer = () => {
  return (
    <>
      <style>{`
        /* Footer */
        .footer {
          padding: 3rem 2rem;
          background: #2D2D2D;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer p {
          font-size: 0.9rem;
        }
      `}</style>

      <footer className="footer">
        <p>All rights reserved. Crafted with love in Cebu.</p>
      </footer>
    </>
  );
};

export default Footer;
