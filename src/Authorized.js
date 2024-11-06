// Authorized.js
import React from 'react';
import './styles/Authorized.css';
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";

function Authorized({ userName, onNavigate }) {
  return (
    <div className="authorized-container">
      <div className="content-authorized">
        <h2 className="welcome-message-authorized">Welcome to</h2>
        <div className="logo-section-authorized">
          <img
            src={CodeNESTIcon}
            alt="CodeNEST Logo"
            className="club-icon-logo-authorized"
          />
          <img
            src={CodeNESTTitle}
            alt="CodeNEST Logo"
            className="club-name-logo-authorized"
          />
          <img
            src={CodeNESTSlogan}
            alt="CodeNEST Slogan"
            className="club-slogan-logo-authorized"
          />
        </div>
        <h2 className="user-name-authorized">{userName}</h2>
        <p className="description-authorized">You're now authorized to explore our features.</p>
        <button className="action-button-authorized" onClick={() => onNavigate('/scan')}>Scan Again</button>
      </div>
    </div>
  );
}

export default Authorized;
