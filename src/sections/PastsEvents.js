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
      <p>Stay tuned for more workshops, hackathons, and exciting events!</p>
    </section> 
  );
};

export default Events;
