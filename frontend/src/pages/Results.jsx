import React from 'react';

function Results({ scanResults }) {
  if (!scanResults) {
    return <p style={{ padding: '2rem' }}>No results yet. Please run a scan.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Scan Results</h2>

      {scanResults.pa11y && (
        <>
          <h3>♿ WCAG – Pa11y Output:</h3>
          <pre style={{ background: '#f0f0f0', padding: '1rem' }}>{scanResults.pa11y}</pre>
        </>
      )}

      {scanResults.wapiti && (
        <>
          <h3>🛡️ OWASP – Wapiti Output:</h3>
          <pre style={{ background: '#f0f0f0', padding: '1rem' }}>{scanResults.wapiti}</pre>
        </>
      )}

      {scanResults.error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <strong>Error:</strong> {scanResults.error}
        </div>
      )}
    </div>
  );
}

export default Results;
