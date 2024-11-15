import React from "react";
import { Link } from "react-router-dom";
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
          <p>Click on the details tab to learn more!</p>

          <Link to="/event/logo-making">
            <button>View Details</button>
          </Link>
        </div>
      </section>
      <p>Stay tuned for more workshops, hackathons, and exciting events!</p>
    </section> 
  );
};

export default Events;
