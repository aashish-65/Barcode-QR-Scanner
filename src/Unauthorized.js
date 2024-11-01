// Unauthorized.js
import React from 'react';
import './Unauthorized.css';

function Unauthorized({ onNavigate }) {
  return (
    <div className="unauthorized-container">
      <div className="content-unauthorized">
        <h2 className="unauthorized-message">Unauthorized Access</h2>
        <p className="description-unauthorized">Please register to gain access to CodeNEST.</p>
        <button className="register-button-unauthorized" onClick={() => onNavigate('/register')}>Register</button>
        <button className="back-button-unauthorized" onClick={() => onNavigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

export default Unauthorized;
