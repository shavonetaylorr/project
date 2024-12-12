// src/App.js

import React from 'react';
import FileUpload from './FileUpload';  // Import the FileUpload component
import './App.css';  // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-center my-8">Fee's SESMag Review Agent</h1>
      <FileUpload />  {/* Render the FileUpload component here */}
    </div>
  );
}

export default App;  // Export the App component for use elsewhere
