import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
    const [username, checkUsername] = useState('');
    const [password, checkPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Example: Adjust the URL to where your Flask backend is hosted
        const url = 'http://127.0.0.1:5000/signup'; //change to local host for windows
        const userData = {
            username,
            password,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Signup failed');
            }

            // Handle success, perhaps redirect to login page or display a success message
            console.log('Signup successful');
            setRedirect(true);
        } catch (error) {
            console.error('Error during signup:', error.message);
            setError(error.message); // Set error message state
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
              <input type="text" id="username" name="username" placeholder="Username/Email" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="input-group">
              <input type="password" id="password" name="password" placeholder="Password"/>
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
