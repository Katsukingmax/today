import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import Greeting from './components/Greeting/Greeting';
import Feeling from './components/Feeling/Feeling';
import Time from './components/Time/Time';
import Interest from './components/Interest/Interest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/feeling" element={<Feeling />} /> 
        <Route path="/time" element={<Time />} /> 
        <Route path="/interest" element={<Interest />} /> 
      </Routes>
    </Router>
  );
}

export default App;


