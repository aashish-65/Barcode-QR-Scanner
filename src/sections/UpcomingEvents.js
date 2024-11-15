import React from "react";
import { Link } from "react-router-dom";
import "../styles/Events.css";
const UpcomingEvents = () => {
  return (
    <section id="events" className="events-section">
      <h2>Upcoming Events</h2>
      <section className="event-section">
        <div className="event-overview">
          <h3>📢 CodeNEST Launch Event</h3>
          <p>
            Join us for the launch event of CodeNEST, the Open Source Development Club at NSHM Knowledge Campus, Durgapur.
          </p>
          <p><strong>Date:</strong> 20/11/2024</p>
          <p><strong>Time:</strong> 10 AM - 5 PM</p>
          <p><strong>Venue:</strong> NSHM Knowledge Campus Durgapur, Old Seminar Hall, Old B-Tech Building, 3rd Floor</p>

          <Link to="/event/launch-event-details">
            <button>View Details</button>
          </Link>
        </div>
      </section>
      <p>Join us for workshops, hackathons, and more!</p>
    </section> 
  );
};

export default UpcomingEvents;
