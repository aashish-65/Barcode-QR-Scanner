// LogoMakingEvent.js
import React from "react";
import "./styles/LogoMakingEvent.css";
import banner from "./assets/images/logo-making-banner.jpg"; // Make sure the banner image path is correct

function LogoMakingEvent() {
  return (
    <div className="logo-making-event">
      <section className="event-details">
        <h1>📢 CodeNEST Logo Design Competition</h1>
        <p className="event-intro">
          Unleash your creativity and design the official logo for CodeNEST, the Open Source Development Club of NSHM Knowledge Campus, Durgapur!
        </p>

        {/* Banner image after introduction */}
        <div className="banner-section">
          <img src={banner} alt="CodeNEST Logo Making Competition Banner" className="event-banner" />
        </div>

        <div className="event-info">
          <div className="event-item">
            <h2>🗓 Deadline</h2>
            <p>Submit your design by <strong>November 11, 2024</strong>.</p>
          </div>

          <div className="event-item">
            <h2>🎨 Format</h2>
            <p>Designs can be submitted either digitally or on paper.</p>
            <ul>
              <li><strong>Digital:</strong> <a href="https://docs.google.com/forms/d/e/1FAIpQLSesBUXYzWZzhMSnBpS8Su-0GSQfJBK3b3OENtq4BnwvX7MtSw/viewform?usp=sf_link" target="_blank" rel="noreferrer">Submit online here</a>. (Note: Submit using your college email)</li>
              <li><strong>Paper:</strong> Hand in your design to one of our representatives.</li>
            </ul>
          </div>

          <div className="event-item">
            <h2>📞 Contact for Paper Submissions</h2>
            <ul className="contact-list">
              <li>Soumaditya Pal - <a href="tel:+91-8649823733">8649823733</a></li>
              <li>Mowazzem Uddin Ahmed - <a href="tel:+91-9433115146">9433115146</a></li>
              <li>Aashish Prasad - <a href="tel:+91-8967336319">8967336319</a></li>
            </ul>
          </div>
        </div>

        <p className="event-footer">
          Get creative and let’s see your ideas for CodeNEST! <strong>It’s your club, design it your way!</strong>
        </p>
      </section>
    </div>
  );
}

export default LogoMakingEvent;
