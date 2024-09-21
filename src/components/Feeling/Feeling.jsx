import React, { useState } from 'react';
import './Feeling.css';
import happyImage from '../../assets/happy.PNG';
import sadImage from '../../assets/sad.PNG';
import huhImage from '../../assets/huh.PNG';

const Feeling = () => {
  const [feeling, setFeeling] = useState('');

  const handleChange = (e) => {
    setFeeling(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feelingData = { feeling };
    localStorage.setItem('feelingData', JSON.stringify(feelingData));
    console.log('Feeling data stored in local storage:', feelingData);
    alert(`Your feeling "${feeling}" has been saved locally!`);
  };

  return (
    <div className="feeling-container">
      <h1>How are you feeling?</h1>
      <form onSubmit={handleSubmit} className="feeling-form">
        <div className="feeling-option">
          <label>
            <input
              type="radio"
              value="Happy"
              checked={feeling === 'Happy'}
              onChange={handleChange}
            />
            <img src={happyImage} alt="Happy" className="feeling-image" />
            Happy
          </label>
        </div>

        <div className="feeling-option">
          <label>
            <input
              type="radio"
              value="Sad"
              checked={feeling === 'Sad'}
              onChange={handleChange}
            />
            <img src={sadImage} alt="Sad" className="feeling-image" />
            Sad
          </label>
        </div>

        <div className="feeling-option">
          <label>
            <input
              type="radio"
              value="Idk"
              checked={feeling === 'Idk'}
              onChange={handleChange}
            />
            <img src={huhImage} alt="IDK" className="feeling-image" />
            IDK
          </label>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default Feeling;
