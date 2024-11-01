// Authorized.js
import React from 'react';
import './Authorized.css';

function Authorized({ userName, onNavigate }) {
  return (
    <div className="authorized-container">
      <div className="content-authorized">
        <h2 className="welcome-message-authorized">Welcome to <span className="codenest-name-authorized">CodeNEST</span>!</h2>
        <h2 className="user-name-authorized">{userName}</h2>
        <p className="description-authorized">You're now authorized to explore our features.</p>
        <button className="action-button-authorized" onClick={() => onNavigate('/scan')}>Scan Again</button>
      </div>
    </div>
  );
}

export default Authorized;
