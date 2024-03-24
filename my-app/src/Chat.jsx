import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const Chat = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io('http://localhost:YOUR_SERVER_PORT');

    socketRef.current.on('connect', () => {
      setMessages((prevMessages) => [...prevMessages, {username: 'System', text: "You're connected"}]);
    });

    socketRef.current.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      socketRef.current.emit('message', { username, text: input });
      setInput('');
    }
  };

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <p key={index}>{msg.username}: {msg.text}</p>
      ))}
      <input
        placeholder="Message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={sendMessage}
      />
    </div>
  );
};

export default Chat;
