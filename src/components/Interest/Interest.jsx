import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Interest.css'; 
import backButtonImg from '../../assets/backbutton.PNG';

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

    localStorage.setItem('interest', interest);

    navigate('/plan');
  };

  const handleBack = () => {
    navigate('/time');
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
              <span className="interest-label">Art</span>
            </label>
          </div>

          <div className="interest-option">
            <label>
              <input
                type="radio"
                name="interest"
                value="Sports"
                checked={interest === 'Sports'}
                onChange={handleChange}
              />
              <span className="interest-label">Sports</span>
            </label>
          </div>

          <div className="interest-option">
            <label>
              <input
                type="radio"
                name="interest"
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
                name="interest"
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
                name="interest"
                value="Relax"
                checked={interest === 'Relax'}
                onChange={handleChange}
              />
              <span className="interest-label">Relax/Chill</span>
            </label>
          </div>

          <div className="interest-option">
            <label>
              <input
                type="radio"
                name="interest"
                value="Try New Thing"
                checked={interest === 'Try New Thing'}
                onChange={handleChange}
              />
              <span className="interest-label">Try New Things</span>
            </label>
        </div>

        <button type="submit" id="btn"  className="submit-btn">See Result</button>
        
      </form>

      <button className='back-btn' onClick={handleBack}>
        <img src={backButtonImg} alt="Go back" className='back-btn-img' />
      </button>
    </div>
  );
};

export default Interest;
