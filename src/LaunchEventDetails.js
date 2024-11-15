import React from "react";
import GitHubImg from "./assets/Sponsors&CommunityPartner/GitHub.jpg";
import GDGImg from "./assets/Sponsors&CommunityPartner/GDG.jpg";
import CodingNinga from "./assets/Sponsors&CommunityPartner/CodingNinga.jpg";
import Poster from "./assets/images/CodeNEST_Poster.jpg";
import "./styles/LaunchEventDetails.css";

const LaunchEventDetails = () => {
  return (
    <div className="launch-event-details">
      <h2>CodeNEST Launch Event</h2>
      <img src={Poster} alt="Launch Event Poster" className="event-poster" />

      <h3>Date and Time</h3>
      <p>20th November 2024, 10:00 AM - 5:00 PM</p>

      <h3>Venue</h3>
      <p>NSHM Knowledge Campus Durgapur, Old Seminar Hall, Old B-Tech Building, 3rd Floor</p>

      <h3>Event Highlights</h3>
      <div className="event-highlight">
        <ul>
          <li>Seminar by Google Software Engineer</li>
          <li>Chance to win free swags</li>
          <li>Panel discussion</li>
          <li>Quiz</li>
          <li>And many more...</li>
        </ul>
      </div>

      <h3>Collaboration Partners</h3>
      <div className="collaboration-partners">
        <img src = {GitHubImg} alt="Education Partner" />
        <img src={CodingNinga} alt="Coding Partner" />
      </div>

      <h3>Community Partner</h3>
      <div className="community-partner">
        <img src={GDGImg} alt="Google Developer Groups Partner" />
      </div>

      <p className="email-contact">Contact us at: connectcodenest@gmail.com</p>
    </div>
  );
};

export default LaunchEventDetails;
