import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [currState, setCurrState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    if (currState === 'Sign Up' && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      name,
      birthday,
      email,
      password,
    });

  };

  return (
    <div className="login-page">
      <form className="login-page-container" onSubmit={handleSubmit}>
        <div className="login-page-title">
          <h2>{currState}</h2>
        </div>
        <div className="login-page-inputs">
          {currState === 'Sign Up' && (
            <>
              <input
                type="text"
                placeholder="What do you want to be called"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Birthday</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
           
