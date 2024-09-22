import React, { useState, useEffect } from 'react'

const Greeting = () => {
  const [username, setUsername] = useState('');

  useEffect (() => {
    const storedUsername = localStorage.getItem('username');
    if(storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div>
      <h1>Hello, {username}!</h1>
    </div>
  );
};

export default Greeting;
