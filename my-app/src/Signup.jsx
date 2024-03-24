import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import './Signup.css';


const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [language, setLanguage] = useState('');
    const [bio, setBio] = useState('');
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Example: Adjust the URL to where your Flask backend is hosted
        const url = 'http://127.0.0.1:5000/signup'; //change to local host for windows
        const userData = {
            username,
            password,
            email, // Add form fields to capture these as needed
            nationality,
            language,
            bio
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

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="login-page">
            <div className="left-panel">
                <h1 className="title">CultureConnect</h1>
            </div>
            <div className="right-panel">
                <h2 className="subtitle">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input type="text" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="nationality" id="nationality" name="nationality" placeholder="Nationality"onChange={(e) => setNationality(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="language" id="language" name="language" placeholder="Language" onChange={(e) => setLanguage(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <input type="bio" id="bio" name="bio" placeholder="Bio" onChange={(e) => setBio(e.target.value)} />
                    </div>
                    <button type="submit" className="submit-btn">Signup</button>
                    {error && <div className="error-message">{error}</div>} {/* Display error message */}
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
