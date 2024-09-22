import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-title">
        unlock your perfect <span className="newsletter-today">today</span>
        </div>
        <div className="newsletter-signup">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="get-started-button">join!</button>
        </div>
      </div>
      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="/home">back to home</a></li>
          <li><a href="/login">login</a></li>
          <li><a href="/signup">sign up</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
