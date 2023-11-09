// Importing necessary libraries
import React from 'react';
import '../styles/chatwindow.css';

function ChatWindow({ messages }) {
  return (
    <div className="chat-window-container">
      {/* Displaying each message */}
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.author}`}>
          <span className="message-text">{message.text}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;
