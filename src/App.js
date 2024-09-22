// /*import logo from './logo.svg';
// import './App.css';
// import Feeling from './components/Feeling/Feeling.jsx';

// function App() {
//   return (
//     <div className="App">
//       { <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}

//       <Feeling />
//     </div>
//   );
// }

// export default App;

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
