import React, { useState } from 'react';

function Home({ url, setUrl, scanType, setScanType, handleScan, loading }) {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔍 CodeGuardian – Compliance Checker</h1>

      <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          style={{ padding: '0.5rem', width: '300px' }}
        />

        <select value={scanType} onChange={(e) => setScanType(e.target.value)} style={{ padding: '0.5rem' }}>
          <option value="both">Pa11y + Wapiti</option>
          <option value="pa11y">WCAG (Pa11y)</option>
          <option value="wapiti">OWASP (Wapiti)</option>
        </select>

        <button onClick={handleScan} style={{ padding: '0.5rem 1rem' }}>
          {loading ? '🔄 Scanning...' : 'Run Scan'}
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>
          <strong>📎 Upload Code File:</strong>{' '}
          <input type="file" onChange={handleFileChange} />
        </label>
        {uploadedFile && (
          <p style={{ marginTop: '0.5rem' }}>📄 Selected: {uploadedFile.name}</p>
        )}
      </div>
    </div>
  );
}

export default Home;
