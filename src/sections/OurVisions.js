import React, { useState } from "react";
import "../styles/OurVisions.css";

const OurVisions = () => {
  const [openVision, setOpenVision] = useState(null);
  const toggleVision = (index) => {
    setOpenVision(openVision === index ? null : index);
  };

  const visions = [
    { id: 1, title: "Monthly Coding Sessions", content: "Regular meetups focused on hands-on practice with various programming languages and techniques, encouraging peer learning and problem-solving." },
    { id: 2, title: "Workshops", content: "Hands-on sessions covering popular tools and technologies like Git, AI/Blockchain, web development, IoT, and more, allowing members to expand their technical knowledge." },
    { id: 3, title: "Hackathons", content: "Organize annual or bi-annual hackathons for innovation, teamwork, and creative problem-solving, offering members the opportunity to build real-world projects." },
    { id: 4, title: "Guest Speaker Events", content: "Invite industry experts and professionals to share their insights on relevant topics in technology and coding, providing members with valuable knowledge and networking opportunities." },
    { id: 5, title: "Online Resources", content: "Build a digital repository of coding resources, tutorials, and project ideas, accessible to all members to enhance learning and project development." },
    { id: 6, title: "Competitive Coding Contests", content: "Organize online coding competitions on platforms like HackerEarth to sharpen members' competitive coding skills and prepare them for coding interviews." },
    { id: 7, title: "Project Exhibitions", content: "Encourage students to build and showcase their projects in community exhibitions, where they can receive feedback and recognition for their work." },
    { id: 8, title: "Group Discussions", content: "Host bi-weekly group discussions (online or offline) on emerging technologies, code quality, and best practices. This will help members stay updated with the latest trends and prepare for technical interviews." },
    { id: 9, title: "Blog/Article Writing", content: "Promote blog and article writing on platforms like Medium and Wired, encouraging members to share their knowledge and experiences while building their professional profiles." },
    { id: 10, title: "Open-Source Contributions", content: "Encourage open-source contributions, a great way for students to earn recognition, build connections, and even generate income while learning from real-world projects." },
  ];

  return (
    <section id="visions" className="visions-section">
      <h2>Our Vision</h2>
      <ul>
        {visions.map((vision) => (
          <li key={vision.id} onClick={() => toggleVision(vision.id)}>
            <span className="vision-title">{vision.title}</span>
            <button className="expand-btn" onClick={(e) => { e.stopPropagation(); toggleVision(vision.id); }}>
              {openVision === vision.id ? "−" : "+"}
            </button>
            <div className={`vision-content ${openVision === vision.id ? "open" : ""}`}>
              <p>{vision.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OurVisions;
