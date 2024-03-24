import React, { useEffect, useState } from 'react';
import './Profile.css';

const CustomProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    nationality: '',
    language: '',
    bio: '',
  });

  useEffect(() => {
    // Replace `http://localhost:5000` with the correct URL to your Flask app
    fetch('http://localhost:5000/api/profile', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Needed if you're using sessions
    })
    .then(response => response.json())
    .then(data => {
      setUser(data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  }, []);

  return (
    <div className="CustomProfile">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Nationality:</strong> {user.nationality}</p>
        <p><strong>Language:</strong> {user.language}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
};

export default CustomProfile;
