import React, { useState } from 'react'
import React, { useState } from 'react'
import './Interest.css'

const Interest = () => {
  const [interest, setInterest]=useState('');
  const handleChange=(e)=>{
    setInterest(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    const interestData = {
      interest: interest
    };

    localStorage.setItem('interestData', JSON.stringify(interestData));

    console.log('Interest data stored in local storage: ', interestData);
    alert('Your interest "${feeling}" has been saved locally!');
  };

  
  
  return (
    <div>
      <h1>What are you interested in</h1>
      <form onSubmit={handleSubmit}>
      <label>
        <input type="radio"
                value="Art"
                checked={interest==='Art'}
                onChange={handleChange}
          />
        Art
      </label>
        <label>
        <input type="radio"
                value="Sport"
                checked={interest==='Sport'}
                onChange={handleChange}
          />
        Sport
      </label>
        <label>
        <input type="radio"
                value="Food"
                checked={interest==='Food'}
                onChange={handleChange}
          />
        Food
      </label>
        <label>
        <input type="radio"
                value="Relax"
                checked={interest==='Relax'}
                onChange={handleChange}
          />
        Relax
      </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Interest
