import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NameInput.css';

const NameInput = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', name);
    navigate('/greeting');
  };

  return (
    <div className="nameinput-container">
      <div className="nameinput-message">Enter Your Name</div>
      <form className="nameinput-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className='nameinput-field'
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Next</button>
      </form>
    </div>
  );
};

export default NameInput;
