import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-button">Home</Link>
      </div>
      <div className="navbar-right">
        <Link to="/owasp" className="nav-button">OWASP</Link>
        <Link to="/wcag" className="nav-button">WCAG</Link>
        <Link to="/code" className="nav-button">Code</Link>
      </div>
    </header>
  );
}

export default Navbar;