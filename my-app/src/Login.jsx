import React, { useEffect, useState } from 'react';
import './Login.css';
import { useUser } from './UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const {user, setUser} = useUser();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Example: Adjust the URL to where your Flask backend is hosted
    const url = 'http://localhost:5000/signup';
    const userData = {
      username,
      password,
      email, // Add form fields to capture these as needed
      nationality: '',
      language: '',
      bio: ''
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error('Signup failed');

      const userresponse = await response.json()

      console.log(userresponse)

      // Handle success, perhaps redirect to login page or display a success message
      console.log('Signup successful');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <h5 className="title">CultureConnect</h5>
      </div>
      <div className="right-panel">
        <h2 className="subtitle">Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" id="username" name="username" placeholder="Username/Email" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-group">
            <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
