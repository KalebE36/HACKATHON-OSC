import React from 'react';
//import './Login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-panel">
        <h1 className="title">CultureConnect</h1>
      </div>
      <div className="right-panel">
        <h2 className="subtitle">Sign Up</h2>
        <form className="login-form">
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Username/Email" />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
