// RegistrationSuccess.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles/RegistrationSuccess.css';
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";

function RegistrationSuccess() {
    const navigate = useNavigate();
    const { name } = useParams();
  return (
    <div className="registration-success-container">
      <div className="content-registration-success">
        <h2 className="success-message-registration">Registration Successful</h2>
        <div className="logo-section registration-logo">
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
        <h2 className="user-name">{name}</h2>
        <p className="description">Thank you for registering with CodeNEST! We’re excited to have you onboard.</p>
        <button className="action-button" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
