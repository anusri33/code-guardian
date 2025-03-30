import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import OWASP from './pages/OWASP';
import WCAG from './pages/WCAG';
import Code from './pages/Code';
import Results from './pages/Results';
import axios from 'axios';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [scanType, setScanType] = useState('both');
  const [scanResults, setScanResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const showSidebar = location.pathname === '/results';

  const handleScan = async () => {
    setLoading(true);
    setScanResults(null);

    try {
      let endpoint = '';
      let requestData = { url };

      if (scanType === 'pa11y') {
        endpoint = 'http://localhost:8080/scan/pa11y';
      } else if (scanType === 'wapiti') {
        endpoint = 'http://localhost:8080/scan/wapiti';
      } else {
        endpoint = 'http://localhost:8080/scan/run';
      }

      const res = await axios.post(endpoint, requestData);
      setScanResults(res.data);
      navigate('/results');
    } catch (error) {
      console.error('Scan failed:', error);
      setScanResults({ error: 'Scan failed. Check backend logs or URL.' });
      navigate('/results');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-content">
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  url={url}
                  setUrl={setUrl}
                  scanType={scanType}
                  setScanType={setScanType}
                  handleScan={handleScan}
                  loading={loading}
                />
              }
            />
            <Route path="/owasp" element={<OWASP />} />
            <Route path="/wcag" element={<WCAG />} />
            <Route path="/code" element={<Code />} />
            <Route path="/results" element={<Results scanResults={scanResults} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
