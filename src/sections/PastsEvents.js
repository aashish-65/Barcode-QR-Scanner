import React from "react";
import { Link } from "react-router-dom";
import SeminarPoster from "../assets/images/SeminarPoster.jpg";
import hackathonPoster from "../assets/images/hackathon.jpg";
import "../styles/Events.css";
const Events = () => {
  return (
    <section id="events" className="events-section">
      <h2>Past Events</h2>
      <section className="logo-making event-section">
        <div className="event-overview">
          <h3>📢 CodeNEST Logo Competition Overview</h3>
          <p>
            Join us in designing the official logo for CodeNEST, the Open Source
            Development Club at NSHM Knowledge Campus, Durgapur.
          </p>
          <p>
            <strong>Deadline:</strong> November 13, 2024
          </p>

          <Link to="/event/logo-making">
            <button>View Details</button>
          </Link>
        </div>
      </section>

      <section className="event-section">
        <div className="event-overview">
          <h3>📢 CodeNEST Launch Event</h3>
          <p>
            Join us for the launch event of CodeNEST, the Open Source Development Club at NSHM Knowledge Campus, Durgapur.
          </p>
          <p><strong>Date:</strong> 20/11/2024</p>
          <p><strong>Time:</strong> 10 AM - 5 PM</p>
          <p><strong>Venue:</strong> NSHM Knowledge Campus Durgapur, Seminar Hall, Admin Building</p>

          <Link to="/event/launch-event-details">
            <button>View Details</button>
          </Link>
        </div>
      </section>
      <section className="event-section">
        <div className="event-overview">
          <h3>
            📢 Building and Securing Full Stack Apps with Firebase & React
          </h3>
          <img src={SeminarPoster} alt="poster" style={{width:"60%"}}/>
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
        {/* <div className="event-ended-box">
          <p className="event-ended">
            <strong>EVENT ENDED</strong>
          </p>
          </div> */}

          {/* <Link to="/event/logo-making">
            <button>View Details</button>
          </Link> */}
        </div>
      </section>

        {/* Code for Change 2025 Hackathon */}
      <section className="event-section">
        <div className="event-overview">
          {/* <span className="blinking-light"></span> */}
          <h3>🚀 Code for Change 2025 Hackathon</h3>
          <p>
            Code for Change 2025 is a thrilling hackathon organized by NSHM
            Knowledge Campus, Durgapur and the Open Source Student Development
            Club. This competition challenges participants to create innovative
            solutions to real-world problems using technology. 🌐💡
          </p>
          <p>
            <strong>Hack the Problem, Code the Solution!</strong>
          </p>
          <img src={hackathonPoster} alt="poster" style={{ width: "80%" }} />
          <p>
            <strong>Rounds:</strong>
          </p>

          <p style={{ textAlign: "left" }}>
            🔹<strong>Round 1:</strong> Participants submit their projects
            online for evaluation.
          </p>
          <p style={{ textAlign: "left" }}>
            🔹<strong>Round 2:</strong> The top 10 teams will be invited for an
            exclusive presentation to our judges on{" "}
            <strong>March 21, 2025</strong>. From there, the top 3 teams will be
            selected as winners!
          </p>
          <p>
            Get ready to showcase your innovation, problem-solving skills, and
            creativity. Let’s build the future, one line of code at a time!
            💡💻🔥
          </p>
          <Link
            to="https://ossdc-hackathon-2025.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Details</button>
          </Link>
        </div>
      </section>
      <p>Stay tuned for more workshops, hackathons, and exciting events!</p>
    </section> 
  );
};

export default Events;
