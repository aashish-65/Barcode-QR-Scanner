import React,{ useState}from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => setIsMenuOpen(false);
  return (
    <nav className="navbar">
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            About Us
          </a>
        </li>
        <li>
          <a href="#visions" onClick={handleLinkClick}>
            Our Vision
          </a>
        </li>
        <li>
          <a href="#events" onClick={handleLinkClick}>
            Events
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Contact Us
          </a>
        </li>
        <li>
          <Link to="/scan" onClick={handleLinkClick}>
            Scan
          </Link>
        </li>
        <li>
          <Link to="/register" onClick={handleLinkClick}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
