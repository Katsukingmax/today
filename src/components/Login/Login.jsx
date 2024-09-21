import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [currState, setCurrState] = useState('Login');

  return (
    <div className="login-page">
      <form className="login-page-container">
        <div className="login-page-title">
          <h2>{currState}</h2>
        </div>
        <div className="login-page-inputs">
          {currState === 'Sign Up' && (
            <>
              <input type="text" placeholder="What do you want to be called" required />
              <input type="date" placeholder="Birthday" required />
              <input type="email" placeholder="Your email address" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
            </>
          )}
          {currState === 'Login' && (
            <>
              <input type="email" placeholder="Your email address" required />
              <input type="password" placeholder="Password" required />
            </>
          )}
        </div>

        <button type="submit">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>

        <div className="login-page-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>

        {currState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrState('Login')}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
