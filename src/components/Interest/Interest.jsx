import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Interest.css';
import nextButtonImg from '../../assets/nextbutton.PNG'; 

const Interest = () => {
  const [interest, setInterest] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!interest) {
      alert('Please select an interest!');
      return;
    }

    // Store the interest in localStorage
    localStorage.setItem('interest', interest);

    // Navigate to the results page
    navigate('/plan');  // Assuming your results page is PlanToday
  };

  return (
    <div className="interest-container">
      <div className="interest-message">What are you interested in?</div>
      <form onSubmit={handleSubmit} className="interest-form">
        <div className="interest-option">
          <label>
          <input
            type="radio"
            name="interest"
            value="Art"
            checked={interest === 'Art'}
            onChange={handleChange}
          />
          Art
        </label>
        <label>
          <input
            type="radio"
            name="interest"
            value="Sports"
            checked={interest === 'Sports'}
            onChange={handleChange}
          />
          Sports
        </label>
        <label>
          <input
            type="radio"
            name="interest"
            value="Nature"
            checked={interest === 'Nature'}
            onChange={handleChange}
          />
          Nature
        </label>
        <label>
          <input
            type="radio"
            name="interest"
            value="Food"
            checked={interest === 'Food'}
            onChange={handleChange}
          />
          Food
        </label>
        <label>
          <input
            type="radio"
            name="interest"
            value="Relax"
            checked={interest === 'Relax'}
            onChange={handleChange}
          />
          Relax
        </label>
        <label>
          <input
            type="radio"
            name="interest"
            value="Try New Thing"
            checked={interest === 'Try New Thing'}
            onChange={handleChange}
          />
          Try New Thing
        </label>
        </div>

        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Nature"
              checked={interest === 'Nature'}
              onChange={handleChange}
            />
            <span className="interest-label">Nature</span>
          </label>
        </div>


        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Try New Things"
              checked={interest === 'Try New Things'}
              onChange={handleChange}
            />
            <span className="interest-label">Try New Things</span>
          </label>
        </div>

        <button type="submit" id="btn"  className="submit-btn">
          <img src={nextButtonImg} alt="Go to the next page" id="next-btn" />
        </button>
      </form>
    </div>
  );
};

export default Interest;
