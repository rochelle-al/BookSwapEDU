import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './SignupPage.jsx';
import HomePage from './HomePage.jsx';
import Dash from './Dash.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/Dash" element={<Dash />} />
      </Routes>
    </Router>
  );
}

export default App;
