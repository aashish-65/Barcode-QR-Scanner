import React from "react";
import MentorImg from "../assets/ChiefMentor/BijoyMandal.jpg";
import "../styles/ChiefMentor.css";

const ChiefMentor = () => {
  return (
    <section className="chief-mentor-section">
      <h2>Mentor</h2>
      <a
        href="https://www.linkedin.com/in/dr-bijoy-mandal-b9a4a6124"
        target="_blank"
        rel="noopener noreferrer"
        className="mentor-card"
      >
        <img src={MentorImg} alt="Chief Mentor" className="mentor-photo" />
        <div className="mentor-details">
          <h3>Prof. Dr. Bijoy Kumar Mandal</h3>
          <p className="mentor-designation">
            Professor, Computer Science and Engineering Department
          </p>
          <p className="mentor-message">
            "Guiding the team to achieve excellence and fostering a spirit of
            innovation and collaboration."
          </p>
        </div>
        </a>
    </section>
  );
};

export default ChiefMentor;
