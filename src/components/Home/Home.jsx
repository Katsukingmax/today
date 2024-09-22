import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/mainlogo.PNG';  
import About from '../About/About.jsx';  
import Footer from '../Footer/Footer.jsx';  // Import the Footer component

const HomePage = () => {
  const [animatePage, setAnimatePage] = useState(false);

  useEffect(() => {
    setAnimatePage(true);
  }, []);

  // Smooth scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`home-page ${animatePage ? 'pop-up' : ''}`}>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="navbar">
          <Link to="/register" className="register">register</Link>
          <Link to="/login" className="login">login</Link>
          <button onClick={scrollToAbout} className="about">about</button> {}
        </nav>
        <div className="content">
          <div className="title">
            <span className="italicized">to</span>
            <span>day.</span>
          </div>
          <Link to="/register">
            <button className="start-btn">start now</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Footer Section */}
      <Footer />  {/* Render Footer component at the bottom */}
    </div>
  );
};

export default HomePage;
