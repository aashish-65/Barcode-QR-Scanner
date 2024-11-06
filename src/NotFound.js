// NotFound.js
import React from 'react';
import { NavLink } from "react-router-dom";
import './styles/NotFound.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="content-notfound">
        <h1 className="error-code">404</h1>
        <h2 className="error-message-notfound">Oops! Page Not Found</h2>
        <p className="description-notfound">The page you're looking for doesn't exist or has been moved.</p>
        <NavLink to="/">
            <button className="home-button-notfound">Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
