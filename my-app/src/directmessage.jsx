import {io} from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import './directmessage.css'; // Import the CSS file

const socket = io('http://localhost:5000'); // Change to your server address

const DMs = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // Listening for messages from the server
    socket.on('message', message => {
      setMessages(messages => [...messages, message]);
    });
    // Cleanup on component unmount
    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); // Prevent page reload
    if (text.trim()) {
      socket.emit('message', { text });
      setText(''); // Clear input after sending
    }
  };


  return (
    <div className="dm-container">
      <div className="background-rectangle">
        <div className='Rectangle3'></div>
        <div className='Rectangle4'></div>
        <div className='Rectangle5'></div>
      </div>
      <div className="header"></div>
      <div className="header-text">CultureConnect</div>
    
      <div className="circle"></div>
      <div className="circle2"></div>

      <img className="icon-comment" src="src/ic_fluent_comment_24_regular.png" alt="Comment" />
      <img className="icon-organization" src="src/ic_fluent_organization_24_regular.png" alt="Organization" />
      <img className="icon-custom" src="src/image1.png" alt="Custom" />
      <img className="icon-person" src="src/ic_fluent_person_24_regular.png" alt="Person" />
      <img className="icon-community" src="src/ic_fluent_people_24_regular.png" alt="People Community" />
      
      <div className="main-content">
        <div className="footer"></div>
              {/* Messages display */}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>
            {message.user}: {message.text} {/* Modify based on your message structure */}
          </div>
        ))}
      </div>

      {/* Message input and send button */}
      <div className="message-input">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            className="footer-text"
            placeholder="Type Here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
        <div className="main-background"></div>
      </div>
      
      <div className="sidebar">
        <div className="sidebar-background"></div>
      </div>
    </div>
  );
}

export default DMs;