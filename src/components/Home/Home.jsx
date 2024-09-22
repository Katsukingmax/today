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
    navigate('/name-input');
  };

  return (
    <div className={`home-page ${animatePage ? 'pop-up' : ''}`}>
      <section className="home" id="home">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="content">
          <div className="title">
            <span className="italicized">to</span>
            <span>day.</span>
          </div>
        
          <button onClick={handleStartNow} className="start-btn">start now</button>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
