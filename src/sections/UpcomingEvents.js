import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Events.css";
const UpcomingEvents = () => {
  return (
    <section id="events" className="events-section">
      <h2>Upcoming Events</h2>
      {/* <section className="event-section">
        <div className="event-overview">
          <h3>No Events</h3>
        </div>
      </section> */}
      <section className="logo-making event-section">
        <div className="event-overview">
          <h3>
            📢 Building and Securing Full Stack Apps with Firebase & React
          </h3>
          <img src="SeminarPoster.jpg" alt="poster" style={{width:"60%"}}/>
          <p>
            🎤 <strong>Speaker:</strong> Debajit Mallick 
          </p>
          <p>👨‍💻 Software Engineer @
            P360 | Organizer @ GDG Siliguri</p>

          <p>
            <strong>Debajit Mallick</strong>, a passionate Software Engineer
            with <strong>3+ years</strong> of experience, will guide you through
            building secure full-stack applications with Firebase & React! With
            his rich experience, including winning{" "}
            <strong>
              Smart India Hackathon 2020, mentoring SIH 2022 winners
            </strong>
            , and speaking at prestigious events like{" "}
            <strong>FrontendDays Siliguri</strong> &{" "}
            <strong>Azure DevDay</strong>, this session is bound to be 🔥!
          </p>
          <p>
            <strong>Date:</strong> February 28, 2025
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM
          </p>
          <p>
            <strong>Location:</strong> NSHM Knowledge Campus, Durgapur
          </p>

          {/* <Link to="/event/logo-making">
            <button>View Details</button>
          </Link> */}
        </div>
      </section>
      <p>Join us for workshops, hackathons, and more!</p>
    </section>
  );
};

export default UpcomingEvents;
