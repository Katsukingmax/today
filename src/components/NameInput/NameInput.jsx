import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NameInput.css';

const NameInput = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('username', name);
    navigate('/greeting'); 

    if(!name) {
      alert('Type your name!')
      return;
    }
  };

  

  return (
    <div className="nameinput-container">
      <div className="nameinput-message">Enter Your Name</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
        className="nameinput-field"
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NameInput;
