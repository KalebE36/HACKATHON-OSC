import React from 'react';
import './Signup.css';

const SignUpPage = () => {
  return (
    <div className="login-page">
      <div className="left-panel">
        <h1 className="title">CultureConnect</h1>
      </div>
      <div className="right-panel">
        <h2 className="subtitle">Sign Up</h2>
        <form className="signup-form">
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Username/Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="submit-btn">Signup</button>
          {/* This should be a button if it's not submitting a form, or a link if it's navigation */}
          <button type="button" className="Loginhyperlink">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;