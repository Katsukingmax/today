import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Time from './components/Time/Time';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Time />} />
      </Routes>
    </Router>
  );
}

export default App;
