import React from "react";
import "./styles/Preloader.css";
import logo from "./assets/svg/icon.svg"; // Adjust the path to your logo file

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="background-effect"></div>
      <div className="logo-container">
        <img src={logo} alt="CodeNEST Logo" className="logo" />
        <div className="text-animation">
          <div className="line">
            <span className="letter">C</span>
            <span className="letter">o</span>
            <span className="letter">d</span>
            <span className="letter">e</span>
            <span className="letter">N</span>
            <span className="letter">E</span>
            <span className="letter">S</span>
            <span className="letter">T</span>
          </div>
          <div className="line tagline tagline-first">
            An OpenSource Development Club
          </div>
          <div className="line tagline tagline-second">of NSHM Durgapur</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
