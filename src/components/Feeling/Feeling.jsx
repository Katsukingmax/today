import React, { useState } from 'react'
import './Feeling.css';
import huhImage from '../../assets/huh.PNG';

const Feeling = () => {
  const [feeling, setFeeling] = useState('');

  const handleChange = (e) => {
    setFeeling(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const feelingData = {
      feeling: feeling
    };

    localStorage.setItem('feelingData', JSON.stringify(feelingData));

    console.log('Feeling data stored in local storage:', feelingData);
    alert(`Your feeling "${feeling}" has been saved locally!`);
  };

  return (
    <div>
      <h1>How are you feeling?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="Happy"
            checked={feeling === 'Happy'}
            onChange={handleChange}
          />
          Happy
        </label>
        <label>
          <input
            type="radio"
            value="Sad"
            checked={feeling === 'Sad'}
            onChange={handleChange}
          />
          Sad
        </label>
        <label>
          <input
            type="radio"
            value="Idk"
            checked={feeling === 'Idk'}
            onChange={handleChange}
          />
          <img src="huhImage" alt="idk" />
          Idk
        </label>
        <button type="submit">Submit</button>
        {/* <button onClick={  }>Go to Next Page</button> */}
      </form>
    </div>
  );
};

export default Feeling;
