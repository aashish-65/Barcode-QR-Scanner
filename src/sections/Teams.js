import React from 'react';
import AmishaImg from "../assets/team-members/AmishaGupta.jpg";
import AnkitKumarImg from "../assets/team-members/AnkitKumarSingh.jpg";
import VivekGhoshImg from "../assets/team-members/VivekGhosh.png";
import SumitLahaImg from "../assets/team-members/SumitLaha.jpg";
import ArindamRayImg from "../assets/team-members/ArindamRay.jpg";
import ShuvodipHazraImg from "../assets/team-members/ShuvodipHazra.jpg";
import AtiqueAhmed from "../assets/team-members/AtiqueAhmed.jpg";
import NachiketaImg from "../assets/team-members/Nachiketa.jpg";
import '../styles/Teams.css';

const teamMembers = [
  {
    name: 'Nachiketa Pahari',
    designation: 'Web Lead & Design Lead',
    image: NachiketaImg,
    linkedin: 'https://www.linkedin.com/in/nachiketa-pahari-6b1028257',
  },
  {
    name: 'Amisha Gupta',
    designation: 'Web Community Moderator',
    image: AmishaImg,
    linkedin: 'https://www.linkedin.com/in/amisha-gupta-12a028257',
  },
  {
    name: 'Sumit Kr. Laha',
    designation: 'Android Development Lead',
    image: SumitLahaImg,
    linkedin: 'https://www.linkedin.com/in/sumit-laha-19879621a',
  },
  {
    name: 'Vivek Gosh',
    designation: 'Android Community Moderator',
    image: VivekGhoshImg,
    linkedin: 'https://www.linkedin.com/in/ghoshvivek004',
  },
  {
    name: 'Ankit Kumar Singh',
    designation: 'AI-Blockchain Lead',
    image: AnkitKumarImg,
    linkedin: 'https://www.linkedin.com/in/ankitkrsingh-aks',
  },
  {
    name: 'Arindam Ray',
    designation: 'AI-Blockchain Community Moderator',
    image: ArindamRayImg,
    linkedin: 'https://www.linkedin.com/in/arindam-ray-821785263',
  },
  {
    name: 'Atique Ahmed',
    designation: 'Content Lead, IoT Lead',
    image: AtiqueAhmed,
    linkedin: 'https://www.linkedin.com/in/atique-ahmed-7590b8284',
  },
  {
    name: 'Shuvodip Hazra',
    designation: 'Photography Lead',
    image: ShuvodipHazraImg,
    linkedin: 'https://www.linkedin.com/in/shuvodip-hazra-570a72320',
  },
  // Add more team members as needed
];

const Teams = () => {
  return (
    <section className="teams-section">
      <h2>Meet Our Team</h2>
      <div className="team-scroll-container">
        <div className="team-cards">
          {teamMembers.concat(teamMembers).map((member, index) => (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card"
              key={index}
            >
              <img src={member.image} alt={member.name} className="team-photo" />
              <h3>{member.name}</h3>
              <p className="team-designation">{member.designation}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
