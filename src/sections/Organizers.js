import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ronyImg from "../assets/organizers/Rony2.jpg"
import SoumadityaImg from "../assets/organizers/Soumaditya.jpg";
import AashishImg from "../assets/organizers/AashishPrasad.png";
import "../styles/Organizers.css";

// Sample data for organizers
const organizers = [
  {
    name: "Soumaditya Pal",
    role: "Lead",
    image:
    SoumadityaImg,
    socialMedia: {
      linkedin: " https://www.linkedin.com/in/soumaditya-pal-109029309/",
      github: "https://github.com/palsoumaditya",
    },
  },
  {
    name: "Mowazzem Uddin Ahmed",
    role: "Co-Lead",
    image:
      ronyImg,
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/mowazzem-uddin-ahmed-96689b276",
      github: "https://github.com/Rony-2004",
    },
  },
  {
    name: "Aashish Prasad",
    role: "Treasurer, Web Lead",
    image:
      AashishImg,
    socialMedia: {
      linkedin: " https://www.linkedin.com/in/aashishprasad65",
      github: "https://github.com/aashish-65",
    },
  },

  // Add more organizers as needed
];

const Organizers = () => {
  return (
    <section className="organizers-section">
      <h2>Meet Our Organizers</h2>
      <div className="organizers-container">
        {organizers.map((organizer, index) => (
          <div className="organizer-card" key={index}>
            <img
              src={organizer.image}
              alt={organizer.name}
              className="organizer-photo"
            />
            <h3>{organizer.name}</h3>
            <p className="organizer-role">{organizer.role}</p>
            <div className="social-icons">
              {organizer.socialMedia.linkedin && (
                <a
                  href={organizer.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              )}
              {organizer.socialMedia.github && (
                <a
                  href={organizer.socialMedia.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
              {organizer.socialMedia.instagram && (
                <a
                  href={organizer.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {/* Add more social icons as needed */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizers;
