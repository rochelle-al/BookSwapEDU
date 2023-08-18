import React from "react";
import { useNavigate } from 'react-router-dom';
import './css/App.css';
import './css/fonts.css';

const HomePage = () => {

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/SignupPage');
  };

  return (
    <div className="container">
      <h1 className="login-title">LOGIN</h1>
      <div className="form-group">
        <input type="text" placeholder="Username" className="form-input username-icon" />  
        <br/>
        <input type="password" placeholder="Password" className="form-input password-icon" />
        <br/>
        <button className="login-button">Login Here</button>
      </div>
      <p className="no-account">No Account?</p>
      <button className="sign-up" onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
}

export default HomePage;