import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Login';



// Assuming your public/index.html file has a div with id='root'
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);