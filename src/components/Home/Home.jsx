import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/mainlogo.PNG';  
import About from '../About/About.jsx';  


const HomePage = () => {
  const [animatePage, setAnimatePage] = useState(false);

  useEffect(() => {
    setAnimatePage(true);
  }, []);

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
          <a href="#about" className="about">about</a> {/* Link to About section */}
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
      <About />
    </div>
  );
};

export default HomePage;
