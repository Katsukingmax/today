import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Keeping your existing setup
import './Time.css';
import nextButtonImg from '../../assets/nextbutton.PNG'; // Existing image import
import clockImage from '../../assets/clock.png'; // New image import

const Time = () => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const goToInterestPage = () => {
    navigate('/interest');
  }

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the user's time selection in local storage
    localStorage.setItem('time', time);

    // Navigate to the next page (interest selection)
    navigate('/interest');
  };

  return (
    <div>
      <div>
        <h1>How much time do you have?</h1>
                <label>
          <input
            type="radio"
            name="time"
            value="Less than 1 hour"
            checked={time === 'Less than 1 hour'}
            onChange={handleChange}
          />
          Less than 1 hour
        </label>
        <label>
          <input
            type="radio"
            name="time"
            value="2 to 5 hours"
            checked={time === '2 to 5 hours'}
            onChange={handleChange}
          />
          2 to 5 hours
        </label>
        <label>
          <input
            type="radio"
            name="time"
            value="5 to 8 hours"
            checked={time === '5 to 8 hours'}
            onChange={handleChange}
          />
          5 to 8 hours
        </label>
        <label>
          <input
            type="radio"
            name="time"
            value="More than 8 hours"
            checked={time === 'More than 8 hours'}
            onChange={handleChange}
          />
          More than 8 hours
        </label>
      <button onClick={goToInterestPage} id='btn'>
        <img src={nextButtonImg} alt="Go to next page" id='btn' />
      </button>
    </div>
  )
}

export default Time
