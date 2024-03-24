import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Login';
//import SignUpPage from './Signup';
//import CustomProfile from './Profile';
import Homepage from './homepage';



// Assuming your public/index.html file has a div with id='root'
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>);