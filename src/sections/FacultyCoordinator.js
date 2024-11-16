import React from "react";
import MadhurimaImg from "../assets/FacultyCoordiantor/MadhurimaHalder.png";
import AurghyadipImg from "../assets/FacultyCoordiantor/AurghyadipKundu.jpg";

import "../styles/FacultyCoordinator.css";

const facultyMembers = [
  {
    name: "Prof. Aurghyadip Kundu",
    designation: "Assistant Professor, Computer Science and Engineering Department",
    message: "Guiding students towards excellence in technology and innovation.",
    photo: AurghyadipImg,
    linkedin: "https://www.linkedin.com/in/aurghyadip-kundu",
  },
  {
    name: "Prof. Madhurima Halder",
    designation: "Assistant Professor, Computer Science and Engineering Department",
    message: "Empowering learners to shape the future of computing.",
    photo: MadhurimaImg,
    linkedin: "https://www.linkedin.com/in/madhurima-halder-9344a0188",
  },
];

const FacultyCoordinator = () => {
  return (
    <section className="faculty-section">
      <h2>Faculty Coordinators</h2>
      <div className="faculty-container">
        {facultyMembers.map((faculty, index) => (
          <a
            href={faculty.linkedin}
            key={index}
            className="faculty-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={faculty.photo}
              alt={`${faculty.name}`}
              className="faculty-photo"
            />
            <div className="faculty-details">
              <h3>{faculty.name}</h3>
              <p className="faculty-designation">{faculty.designation}</p>
              <p className="faculty-message">"{faculty.message}"</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FacultyCoordinator;
