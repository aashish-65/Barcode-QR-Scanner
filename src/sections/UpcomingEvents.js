import React from "react";
import { Link } from "react-router-dom";
import hackathonPoster from "../assets/images/hackathon.jpg";
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
      {/* Code for Change 2025 Hackathon */}
      <section className="event-section active-events">
        <div className="event-overview">
          <span className="blinking-light"></span>
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
      <p>Join us for workshops, hackathons, and more!</p>
    </section>
  );
};

export default UpcomingEvents;
