// Importing necessary libraries and components
import React, { useState } from 'react';
import './app.css';
import Sidebar from './Components/sidebar';
import ChatWindow from './Components/chatwindow';
import UserInput from './Components/userinput';

function App() {
  // State for managing the list of messages
  const [messages, setMessages] = useState([]);

  // State for managing the sidebar configuration settings
  const [sidebarConfig, setSidebarConfig] = useState({
    selectedModel: '',
    sliderValues: {
      Temperature: 1,
      'Top P': 1,
      'Frequency Penalty': 1,
      'Presence Penalty': 1,
    },
    maxLength: 250,
    stopSequences: '',
    systemRole: '',
  });

  // State for managing the sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Function to handle when the user submits a new message
  const handleUserSubmit = (message) => {
    setMessages([...messages, { author: 'User', text: message }]);
  };

  // Function to handle when the sidebar configuration settings change
  const handleSidebarConfigChange = (updatedConfig) => {
    setSidebarConfig(prevConfig => ({ ...prevConfig, ...updatedConfig }));
  };

  // Function to handle when the sidebar visibility is toggled
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-container">
      {/* Sidebar Menu */}
      {isSidebarVisible && (
        <Sidebar
          config={sidebarConfig}
          onConfigChange={handleSidebarConfigChange}
          onToggleSidebar={handleSidebarToggle}
        />
      )}
      {/* Chat Area */}
      <div className="chat-area">
        {/* Chat Display Window, passing down the messages state as a prop */}
        <ChatWindow messages={messages} />
        {/* User Input Area, passing down the handleUserSubmit function as a prop */}
        <UserInput onUserSubmit={handleUserSubmit} />
      </div>
    </div>
  );
}

export default App;
