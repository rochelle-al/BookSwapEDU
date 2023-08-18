import React from 'react';
import './App.css';
import './fonts.css';

const SignupPage = () => {
  return (
    <div className="container">
      <h1 className="login-title">SIGN UP</h1>
      <div className="form-group">
        <input type="text" placeholder="Name" className="form-input username-icon" />
        <br />
        <input type="text" placeholder="Username" className="form-input username-icon" />
        <br />
        <input type="password" placeholder="Password" className="form-input password-icon" />
        <br />
        <button className="login-button">Sign Up Now</button>
      </div>
      <p className="no-account">Already have an account?</p>
      <p className="sign-up">Log In</p>
    </div>
  );
}

export default SignupPage;