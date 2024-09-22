import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-title">
        Unlock your perfect <span className="newsletter-today">today</span>
        </div>
        <div className="newsletter-signup">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="get-started-button">Join!</button>
        </div>
      </div>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="/home">Back to home</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
