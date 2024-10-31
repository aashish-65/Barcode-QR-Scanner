import React, { useState, useEffect } from 'react';
import './Home.css';

function Home({ onNavigate }) {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-11-20T00:00:00'); // Set target date and time
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Copy countdown state to trigger re-render
        setCountdown(prev => ({ ...prev, days, hours, minutes, seconds }));
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to <span className="club-name-home">CodeNEST</span></h1>
        <p>An Open Source Development Club of NSHM Durgapur</p>
      </header>

      <nav className="navbar">
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><button onClick={() => onNavigate('scan')}>Scan</button></li>
          <li><button onClick={() => onNavigate('register')}>Register</button></li>
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
        <p>CodeNEST is dedicated to fostering a collaborative environment for students to learn and contribute to open-source projects.</p>
      </section>

      <section id="projects" className="projects-section">
        <h2>Our Projects</h2>
        <p>Explore our various projects aimed at enhancing learning through practical experience.</p>
        {/* Add project cards or list here */}
      </section>

      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <p>Join us for workshops, hackathons, and more!</p>
        {/* Add event cards or list here */}
      </section>

      <footer className="footer">
        <h3>Contact Us</h3>
        <p>Email: contact@codenest.org</p>
        <p>Follow us on social media!</p>
        {/* Add social media links here */}
      </footer>
    </div>
  );
}

export default Home;
