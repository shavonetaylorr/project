 // src/FileUpload.js

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState('');

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setFeedback(response.data.feedback); // assuming the AI model returns feedback
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf',
    onDrop,
  });

  return (
    <div className="file-upload-container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop a PDF file here, or click to select one</p>
      </div>
      <button onClick={handleFileUpload}>Upload and Analyze</button>
      {feedback && <div className="feedback">{feedback}</div>}
    </div>
  );
};

export default FileUpload;
