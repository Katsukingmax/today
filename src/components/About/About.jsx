import React, { useState, useEffect } from 'react';
import './About.css';
import happyImage from '../../assets/happy.PNG';
import sadImage from '../../assets/sad.PNG';
import huhImage from '../../assets/huh.PNG';

const About = () => {
  const images = [happyImage, sadImage, huhImage];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-container">
      <div className="about-image-container">
        <img src={images[currentImage]} alt="Slideshow" className="about-image" />
      </div>
      <div className="about-text">
        <h2></h2>
        <div className="aboutTitle">
            discover
            <span className="aboutItalicized">to</span>
            <span className="finalTitle">day.</span>
       </div>
       <div className="para">
        <p>
          Your personalized guide that helps you make the most of your time by offering personalized activity 
          recommendations based on your mood, interests, and availability. Whether it’s a few minutes or a whole day, 
          <span className='today'>today</span> suggests the perfect way to spend your time, ensuring every moment counts.
        </p>
        </div>
        <p className="personal-info">Start your day,<span className='secondToday'>today.</span> </p>
      </div>
    </section>
  );
};

export default About;
