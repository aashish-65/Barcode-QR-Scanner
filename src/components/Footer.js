import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>Team CodeNEST</p>
        <a href="mailto:connectcodenest@gmail.com" className="footer-email">
          connectcodenest@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
