// Importing necessary libraries
import React, { useState } from 'react';
import '../styles/userinput.css';

function UserInput({ onUserSubmit }) {
  // State for managing the user's input
  const [userInput, setUserInput] = useState('');

  // Function to handle when the user submits a message
  const handleSubmit = (event) => {
    event.preventDefault();  // Preventing default form submission behavior
    if (userInput) {  // Checking if userInput is not empty
      onUserSubmit(userInput);  // Calling onUserSubmit prop function
      setUserInput('');  // Resetting userInput state
    }
  };

  return (
    <div className="user-input-container">
      {/* Text Input Area */}
      <input
        type="text"
        placeholder="Type your message..."
        className="text-input"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      {/* Send Button */}
      <button className="send-button" onClick={handleSubmit}>
        Send
      </button>

      {/* Continue Button - Placeholder for now */}
      <button className="continue-button">
        [Continue]
      </button>
    </div>
  );
}

export default UserInput;
