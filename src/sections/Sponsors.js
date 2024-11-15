import React from 'react'
import GitHubImg from "../assets/Sponsors&CommunityPartner/GitHub.jpg";
import GDGImg from "../assets/Sponsors&CommunityPartner/GDG.jpg";
import CodingNinga from "../assets/Sponsors&CommunityPartner/CodingNinga.jpg";
import '../styles/Sponsors.css';

const collaborators = [
  { name: 'GitHub Education', logo: GitHubImg, website: 'https://github.com/education' },
  { name: 'Coding Ninjas', logo: CodingNinga, website: 'https://www.codingninjas.com/' },
  // Add more collaborators as needed
];

const communityPartners = [
  { name: 'Google Developer Group Durgapur', logo: GDGImg, website: 'https://gdg.community.dev/gdg-durgapur/' },
  // Add more community partners as needed
];

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <h2>SPONSORS</h2>

      <div className="collaboration-section">
        <h3>In Collaboration With</h3>
        <div className="sponsors-container">
          {collaborators.map((collaborator, index) => (
            <a
              href={collaborator.website}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card"
            >
              <img src={collaborator.logo} alt={`${collaborator.name} logo`} className="sponsor-logo" />
              <p className="sponsor-name">{collaborator.name}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="community-partners-section">
        <h3>Community Partner</h3>
        <div className="sponsors-container">
          {communityPartners.map((partner, index) => (
            <a
              href={partner.website}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card"
            >
              <img src={partner.logo} alt={`${partner.name} logo`} className="sponsor-logo" />
              <p className="sponsor-name">{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
