import React from 'react';

function OWASP() {
  return (
    <div className="owasp-page">
      <h2>OWASP Guidelines</h2>
      <p>
        The Open Web Application Security Project (OWASP) provides guidelines to improve the security of software.
        Some key points include:
      </p>
      <ul>
        <li>Avoid SQL Injection by using parameterized queries.</li>
        <li>Implement proper authentication and session management.</li>
        <li>Protect against Cross-Site Scripting (XSS) by sanitizing inputs.</li>
      </ul>
      <p>Learn more at <a href="https://owasp.org" target="_blank" rel="noopener noreferrer">owasp.org</a>.</p>
    </div>
  );
}

export default OWASP;