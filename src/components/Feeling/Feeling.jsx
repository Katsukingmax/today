import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feeling.css';  // Make sure you create Feeling.css
import happyImage from '../../assets/happy.PNG';
import sadImage from '../../assets/sad.PNG';
import huhImage from '../../assets/huh.PNG';
import nextButtonImg from '../../assets/nextbutton.PNG';

const Feeling = () => {
  const [feeling, setFeeling] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeeling(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feeling) {
      alert('Please select how you feel!');
      return;
    }

    // Store the feeling in localStorage
    localStorage.setItem('feeling', feeling);

    // Navigate to the Time page
    navigate('/time');
  };

  return (
    <div className="feeling-container">
      <div className="feeling-message">How are you feeling?</div>
      <form onSubmit={handleSubmit} className="feeling-form">
        
        <div className="feeling-option">
          <label>
            <input
              type="radio"
              name="feeling"
              value="Happy"
              checked={feeling === 'Happy'}
              onChange={handleChange}
            />
            <div className="feeling-image-container">
              <img src={happyImage} alt="Happy" className="feeling-image" />
            </div>
            <span className="feeling-label">Happy</span>
          </label>
        </div>

        <div className="feeling-option">
          <label>
            <input
              type="radio"
              name="feeling"
              value="Sad"
              checked={feeling === 'Sad'}
              onChange={handleChange}
            />
            <div className="feeling-image-container">
              <img src={sadImage} alt="Sad" className="feeling-image" />
            </div>
            <span className="feeling-label">Sad</span>
          </label>
        </div>

        <div className="feeling-option">
          <label>
            <input
              type="radio"
              name="feeling"
              value="Idk"
              checked={feeling === 'Idk'}
              onChange={handleChange}
            />
            <div className="feeling-image-container">
              <img src={huhImage} alt="IDK" className="feeling-image" />
            </div>
            <span className="feeling-label">Not sure</span>
          </label>
        </div>

        <button type="submit" className="submit-btn">
          <img src={nextButtonImg} alt="Go to the next page" className="next-btn" />
        </button>
      </form>
    </div>
  );
};

export default Feeling;
