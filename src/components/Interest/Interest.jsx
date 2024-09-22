import React, { useState } from 'react';
import './Interest.css';

const Interest = () => {
  const [interest, setInterest] = useState('');

  const handleChange = (e) => {
    setInterest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const interestData = {
      interest: interest
    };

    localStorage.setItem('interestData', JSON.stringify(interestData));

    console.log('Interest data stored in local storage: ', interestData);
    alert(`Your interest "${interest}" has been saved locally!`);
  };

  return (
    <div className="interest-container">
      <div className="interest-message">What are you interested in?</div>
      <form onSubmit={handleSubmit} className="interest-form">
        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Art"
              checked={interest === 'Art'}
              onChange={handleChange}
            />
            <span className="interest-label">Art</span>
          </label>
        </div>

        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Sport"
              checked={interest === 'Sport'}
              onChange={handleChange}
            />
            <span className="interest-label">Sport</span>
          </label>
        </div>

        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Food"
              checked={interest === 'Food'}
              onChange={handleChange}
            />
            <span className="interest-label">Food</span>
          </label>
        </div>

        <div className="interest-option">
          <label>
            <input
              type="radio"
              value="Relax/Chill"
              checked={interest === 'Relax/Chill'}
              onChange={handleChange}
            />
            <span className="interest-label">Relax/Chill</span>
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

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Interest;
