import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Time.css';
import nextButtonImg from '../../assets/nextbutton.PNG';
import backButtonImg from '../../assets/backbutton.PNG';
import clockImg from '../../assets/clock.png';

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

    localStorage.setItem('time', time);
    navigate('/interest');
  };

  const handleBack = () => {
    navigate('/feeling');
  };

  return (
    <div className='time-container'>
      <div className="clock-container">
        <img src={clockImg} alt="Clock" className="clock-image" />
      </div>
      
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

      <button className='back-btn' onClick={handleBack}>
        <img src={backButtonImg} alt="Go back" className='back-btn-img' />
      </button>
    </div>
  )
}

export default Time;
