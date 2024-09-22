import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Greeting.css';

const Greeting = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const capitalizeFirstLetter = (name) => {
    if(!name) return 'guest';
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const timer = setTimeout(() => {
      navigate('/feeling');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className = "greeting-message">Hi, <span className = "greeting-name">{capitalizeFirstLetter(username)}</span>!</div>
      <p>Let's start <span className = "greeting-today">today</span></p>
    </div>
  );
};

export default Greeting;
