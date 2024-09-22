import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Keeping your existing setup
import './Time.css';
import nextButtonImg from '../../assets/nextbutton.PNG'; // Existing image import
// import clockImage from '../../assets/clock.png'; // New image import

const Time = () => {
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!time) {
      alert('Please select a time!');
      return;
    }

    // Store the user's time selection in local storage
    localStorage.setItem('time', time);

  
      navigate('/interest');
  
  };

  return (
    <div className='time-container'>
      <div className='time-message'>How much time do you have?</div>
      <div className='time-form'>
        <form onSubmit={handleSubmit}>
          <label className='time-option'>
            <input
              type="radio"
              name="time"
              value="Less than 1 hour"
              checked={time === 'Less than 1 hour'}
              onChange={handleChange}
            />
            Less than 1 hour
          </label>
          <label className='time-option'>
            <input
              type="radio"
              name="time"
              value="2 to 5 hours"
              checked={time === '2 to 5 hours'}
              onChange={handleChange}
            />
            2 to 5 hours
          </label>
          <label className='time-option'>
            <input
              type="radio"
              name="time"
              value="5 to 8 hours"
              checked={time === '5 to 8 hours'}
              onChange={handleChange}
            />
            5 to 8 hours
          </label>
          <label className='time-option'>
            <input
              type="radio"
              name="time"
              value="More than 8 hours"
              checked={time === 'More than 8 hours'}
              onChange={handleChange}
            />
            More than 8 hours
          </label>
        
          <button className='submit-btn'>
            <img src={nextButtonImg} alt="Go to next page" className='next-btn' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Time
