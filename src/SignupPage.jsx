import React from 'react';
import './css/App.css';
import './css/fonts.css';

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
      </div>      
      <button className="sign-up">Sign Up</button>
    </div>
  );
}

export default SignupPage;