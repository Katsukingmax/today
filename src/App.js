import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import Greeting from './components/Greeting/Greeting';
import Feeling from './components/Feeling/Feeling';
import Time from './components/Time/Time';
import Interest from './components/Interest/Interest';
import PlanToday from './components/PlanToday/PlanToday';
import NameInput from './components/NameInput/NameInput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/name-input" element={<NameInput />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/time" element={<Time />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/plan" element={<PlanToday />} />
      </Routes>
    </Router>
  );
}

export default App;
