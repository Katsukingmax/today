import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Greeting.css'; // Import the CSS file

const Greeting = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const timer = setTimeout(() => {
      navigate('/feeling'); // Navigate to Feeling component
    }, 2000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container"> {/* Apply the CSS class */}
      <div className = "greeting-message">hi, <span className = "greeting-name">{username || 'guest'}</span>!</div>
      <p>let's start <span className = "greeting-today">today</span></p>
    </div>
  );
};

export default Greeting;
