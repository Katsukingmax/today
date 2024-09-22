import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css';
import logo from '../../assets/mainlogo.PNG';
import About from '../About/About';
import Footer from '../Footer/Footer';

const HomePage = () => {
  const [animatePage, setAnimatePage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimatePage(true);
  }, []);

  const handleStartNow = () => {
    navigate('/greeting'); // Navigate to Greeting component
  };

  return (
    <div className={`home-page ${animatePage ? 'pop-up' : ''}`}>
      {/* Home Section */}
      <section className="home" id="home">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Title Section */}
        <div className="content">
          <div className="title">
            <span className="italicized">to</span>
            <span>day.</span>
          </div>
        
          {/* Start Now Button */}
          <button onClick={handleStartNow} className="start-btn">start now</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
