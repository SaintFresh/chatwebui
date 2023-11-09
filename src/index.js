// Importing React library
import React from 'react';

// Importing ReactDOM library for rendering
import ReactDOM from 'react-dom';

// Importing the main App component
import App from './app.js';

// Importing the main styling file (optional at this stage)
import './app.css';

// Rendering the App component into the root element of the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Note: React.StrictMode is a tool for highlighting potential problems in an application.
// It does not render any visible UI, and activates additional checks and warnings for descendants.
