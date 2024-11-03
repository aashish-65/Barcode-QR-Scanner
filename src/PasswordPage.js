// PasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PasswordPage.css';
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";

function PasswordPage({ onVerify }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    const correctPassword = process.env.SCAN_PASSWORD; // Replace with your desired password
    if (password === correctPassword) {
      onVerify();
      navigate('/scan');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="password-page">
      <div className="logo-section">
        <img
          src={CodeNESTIcon}
          alt="CodeNEST Logo"
          className="club-icon-logo"
        />
        <img
          src={CodeNESTTitle}
          alt="CodeNEST Title"
          className="club-name-logo"
        />
        <img
          src={CodeNESTSlogan}
          alt="CodeNEST Slogan"
          className="club-slogan-logo"
        />
      </div>
      <div className="password-form">
        <h2>Enter Password to Access Scan</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handlePasswordSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default PasswordPage;
