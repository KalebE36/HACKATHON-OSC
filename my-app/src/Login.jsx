import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {

  return (
      <div className="login-page">
        <div className="left-panel">
          <h5 className="title">CultureConnect</h5>
        </div>
        <div className="right-panel">
          <h2 className="subtitle">Log In</h2>
          <form className="login-form">
            <div className="input-group">
              <input type="text" id="username" name="username" placeholder="Username/Email"/>
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
