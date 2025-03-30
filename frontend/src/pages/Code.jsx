
import React from 'react';
import { Link } from 'react-router-dom';

function Code() {
  return (
    <div className="code-page">
      <h2>Upload Code</h2>
      <p>Click below to upload your code for scanning.</p>
      <Link to="/" className="check-button">Go to Upload</Link>
    </div>
  );
}

export default Code;
