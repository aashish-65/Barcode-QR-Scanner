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
  const [openVision, setOpenVision] = useState(null);

  useEffect(() => {
    const targetDate = new Date("2024-11-20T00:00:00"); // Set target date and time
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => setIsMenuOpen(false);

  const toggleVision = (index) => {
    setOpenVision(openVision === index ? null : index); // Toggle the vision details
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
          CodeNEST a Open Source Development Club of NSHM Knowledge Campus,
          Durgapur by Department of Computer Science and Engineering.
        </p>
        <p>
          CodeNEST is dedicated to fostering a collaborative environment for
          students to learn and contribute to open-source projects.
        </p>
      </section>

      <section id="visions" className="visions-section">
        <h2>Our Vision</h2>
        <ul>
          <li>
            <span className="vision-title">Monthly Coding Sessions</span>
            <button className="expand-btn" onClick={() => toggleVision(1)}>
              +
            </button>
            {openVision === 1 && (
              <div
                className={`vision-content ${openVision === 1 ? "open" : ""}`}
              >
                <p>
                  Regular meetups focused on hands-on practice with various
                  programming languages and techniques, encouraging peer
                  learning and problem-solving.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Workshops</span>
            <button className="expand-btn" onClick={() => toggleVision(2)}>
              +
            </button>
            {openVision === 2 && (
              <div
                className={`vision-content ${openVision === 2 ? "open" : ""}`}
              >
                <p>
                  Hands-on sessions covering popular tools and technologies like
                  Git, AI/Blockchain, web development, IoT, and more, allowing
                  members to expand their technical knowledge.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Hackathons</span>
            <button className="expand-btn" onClick={() => toggleVision(3)}>
              +
            </button>
            {openVision === 3 && (
              <div
                className={`vision-content ${openVision === 3 ? "open" : ""}`}
              >
                <p>
                  Organize annual or bi-annual hackathons for innovation,
                  teamwork, and creative problem-solving, offering members the
                  opportunity to build real-world projects.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Guest Speaker Events</span>
            <button className="expand-btn" onClick={() => toggleVision(4)}>
              +
            </button>
            {openVision === 4 && (
              <div
                className={`vision-content ${openVision === 4 ? "open" : ""}`}
              >
                <p>
                  Invite industry experts and professionals to share their
                  insights on relevant topics in technology and coding,
                  providing members with valuable knowledge and networking
                  opportunities.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Online Resources</span>
            <button className="expand-btn" onClick={() => toggleVision(5)}>
              +
            </button>
            {openVision === 5 && (
              <div
                className={`vision-content ${openVision === 5 ? "open" : ""}`}
              >
                <p>
                  Build a digital repository of coding resources, tutorials, and
                  project ideas, accessible to all members to enhance learning
                  and project development.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Competitive Coding Contests</span>
            <button className="expand-btn" onClick={() => toggleVision(6)}>
              +
            </button>
            {openVision === 6 && (
              <div
                className={`vision-content ${openVision === 6 ? "open" : ""}`}
              >
                <p>
                  Organize online coding competitions on platforms like
                  HackerEarth to sharpen members' competitive coding skills and
                  prepare them for coding interviews.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Project Exhibitions</span>
            <button className="expand-btn" onClick={() => toggleVision(7)}>
              +
            </button>
            {openVision === 7 && (
              <div
                className={`vision-content ${openVision === 7 ? "open" : ""}`}
              >
                <p>
                  Encourage students to build and showcase their projects in
                  community exhibitions, where they can receive feedback and
                  recognition for their work.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Group Discussions</span>
            <button className="expand-btn" onClick={() => toggleVision(8)}>
              +
            </button>
            {openVision === 8 && (
              <div
                className={`vision-content ${openVision === 8 ? "open" : ""}`}
              >
                <p>
                  Host bi-weekly group discussions (online or offline) on
                  emerging technologies, code quality, and best practices. This
                  will help members stay updated with the latest trends and
                  prepare for technical interviews.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Blog/Article Writing</span>
            <button className="expand-btn" onClick={() => toggleVision(9)}>
              +
            </button>
            {openVision === 9 && (
              <div
                className={`vision-content ${openVision === 9 ? "open" : ""}`}
              >
                <p>
                  Promote blog and article writing on platforms like Medium and
                  Wired, encouraging members to share their knowledge and
                  experiences while building their professional profiles.
                </p>
              </div>
            )}
          </li>
          <li>
            <span className="vision-title">Open-Source Contributions</span>
            <button className="expand-btn" onClick={() => toggleVision(10)}>
              +
            </button>
            {openVision === 10 && (
              <div
                className={`vision-content ${openVision === 10 ? "open" : ""}`}
              >
                <p>
                  Encourage open-source contributions, a great way for students
                  to earn recognition, build connections, and even generate
                  income while learning from real-world projects.
                </p>
              </div>
            )}
          </li>
        </ul>
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <section className="logo-making event-section">
          <div className="event-overview">
            <h3>📢 CodeNEST Logo Competition Overview</h3>
            <p>
              Join us in designing the official logo for CodeNEST, the Open
              Source Development Club at NSHM Knowledge Campus, Durgapur.
            </p>
            <p>
              <strong>Deadline:</strong> November 11, 2024
            </p>
            <p>Click on the details tab to learn more!</p>

            <Link to="/event/logo-making">
              <button>View Details</button>
            </Link>
          </div>
        </section>
        <p>Join us for workshops, hackathons, and more!</p>
      </section>

      <footer id="contact" className="footer">
        <h3>Contact Us</h3>
        <p>Team CodeNEST</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
}

export default Home;
