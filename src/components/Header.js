import React from "react";
import CodeNESTTitle from "../assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "../assets/svg/Slogan.svg";
import CodeNESTIcon from "../assets/svg/icon.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img
          src={CodeNESTIcon}
          alt="CodeNEST Logo"
          className="club-icon-logo"
        />
        <img
          src={CodeNESTTitle}
          alt="CodeNEST Logo"
          className="club-name-logo"
        />
        <img
          src={CodeNESTSlogan}
          alt="CodeNEST Slogan"
          className="club-slogan-logo"
        />
      </div>
    </header>
  );
};

export default Header;
