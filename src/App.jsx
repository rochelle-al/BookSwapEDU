import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './SignupPage.jsx';
import HomePage from './HomePage.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
      </Routes>
      <Navigate to="/HomePage" replace={true} />
    </Router>
  );
}
export default App;