import React from "react";
// import { Link } from "react-router-dom";
import engineersDayPoster from "../assets/images/EngineersDayPoster.jpeg";
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

      {/* Engineers' Day Celebration */}
      <section className="event-section active-events">
        <div className="event-overview">
          <span className="blinking-light"></span>
          <h3>🎉 Engineers’ Day Celebration</h3>
          <img
            src={engineersDayPoster}
            alt="Engineers’ Day Celebration Poster"
            style={{ width: "70%", borderRadius: "12px", margin: "1rem 0" }}
          />
          <p>Dear Budding Engineers,</p>
          <p>
            On the occasion of <strong>Engineers’ Day</strong>, commemorating
            the birth anniversary of{" "}
            <strong>Bharat Ratna Sir M. Visvesvaraya</strong>, the Department of
            Computer Science & Engineering, NIET, in collaboration with{" "}
            <strong>CodeNEST</strong> – our Coding Club, is delighted to
            announce a day-long celebration filled with technical, innovative,
            and interactive events.
          </p>
          <p>
            <strong>Venue:</strong> E208
          </p>
          <p>
            <strong>Date:</strong> 15.09.2025
          </p>
        </div>
      </section>
      <p>Join us for workshops, hackathons, and more!</p>
    </section>
  );
};

export default UpcomingEvents;
