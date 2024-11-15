import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import "../styles/Speakers.css";

const speakers = [
    {
      name: 'Taruvar Mittal',
      designation: 'Software Engineer @Google | IT Undergrad NSUT 23',
      image: 'https://media.licdn.com/dms/image/v2/C5603AQFLqU31Sqg2gQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1657380771147?e=1736985600&v=beta&t=G65RPZP2TU0PquNJmsB5D4-OS4Sd9SWHHobFooighM0',
      socialMedia: { linkedin: 'https://www.linkedin.com/in/taruvar-mittal-1985241a9', github: 'https://github.com/taruvar-mittal' }
    },
  ];

const Speakers = () => {
  return (
    <section className="speakers-section">
        <h2>Meet Our Speakers</h2>
        <h3>On The Lauch Event</h3>
        <div className="speakers-container">
          {speakers.map((speaker, index) => (
            <div className="speaker-card" key={index}>
              <img src={speaker.image} alt={speaker.name} className="speaker-photo" />
              <h3>{speaker.name}</h3>
              <p className="speaker-designation">{speaker.designation}</p>
              <div className="social-icons">
                {speaker.socialMedia.linkedin && (
                  <a href={speaker.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                )}
                {speaker.socialMedia.github && (
                  <a href={speaker.socialMedia.github} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Speakers;
