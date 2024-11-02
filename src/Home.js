import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";
import "./Home.css";

function Home({ onNavigate }) {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    const targetDate = new Date("2024-11-20T00:00:00"); // Set target date and time
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown((prev) => ({ ...prev, days, hours, minutes, seconds }));
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home-container">
      <header className="header">
        {/* <h1>Welcome to</h1> */}
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
        {/* <p>An Open Source Development Club of NSHM Durgapur</p> */}
      </header>

      <nav className="navbar">
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <Link to="/scan">Scan</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <section id="countdown" className="countdown-section">
        <h2>Countdown to Inauguration</h2>
        <div className="countdown-timer">
          <span>{countdown.days} Days</span>
          <span>{countdown.hours} Hours</span>
          <span>{countdown.minutes} Minutes</span>
          <span>{countdown.seconds} Seconds</span>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          CodeNEST is dedicated to fostering a collaborative environment for
          students to learn and contribute to open-source projects.
        </p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Our Projects</h2>
        <p>
          Explore our various projects aimed at enhancing learning through
          practical experience.
        </p>
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <p>Join us for workshops, hackathons, and more!</p>
      </section>

      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: contact@codenest.org</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
}

export default Home;
