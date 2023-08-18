import React from "react";
import './App.css';
import './fonts.css';

const HomePage = () => {
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
      <p className="sign-up">Sign Up</p>
    </div>
  );
}

export default HomePage;