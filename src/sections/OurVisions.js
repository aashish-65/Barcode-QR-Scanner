import React, { useState } from "react";
import "../styles/OurVisions.css";

const OurVisions = () => {
  const [openVision, setOpenVision] = useState(null);
  const toggleVision = (index) => {
    setOpenVision(openVision === index ? null : index);
  };
  return (
    <section id="visions" className="visions-section">
      <h2>Our Vision</h2>
      <ul>
        <li>
          <span className="vision-title">Monthly Coding Sessions</span>
          <button className="expand-btn" onClick={() => toggleVision(1)}>
            +
          </button>
          {openVision === 1 && (
            <div className={`vision-content ${openVision === 1 ? "open" : ""}`}>
              <p>
                Regular meetups focused on hands-on practice with various
                programming languages and techniques, encouraging peer learning
                and problem-solving.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Workshops</span>
          <button className="expand-btn" onClick={() => toggleVision(2)}>
            +
          </button>
          {openVision === 2 && (
            <div className={`vision-content ${openVision === 2 ? "open" : ""}`}>
              <p>
                Hands-on sessions covering popular tools and technologies like
                Git, AI/Blockchain, web development, IoT, and more, allowing
                members to expand their technical knowledge.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Hackathons</span>
          <button className="expand-btn" onClick={() => toggleVision(3)}>
            +
          </button>
          {openVision === 3 && (
            <div className={`vision-content ${openVision === 3 ? "open" : ""}`}>
              <p>
                Organize annual or bi-annual hackathons for innovation,
                teamwork, and creative problem-solving, offering members the
                opportunity to build real-world projects.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Guest Speaker Events</span>
          <button className="expand-btn" onClick={() => toggleVision(4)}>
            +
          </button>
          {openVision === 4 && (
            <div className={`vision-content ${openVision === 4 ? "open" : ""}`}>
              <p>
                Invite industry experts and professionals to share their
                insights on relevant topics in technology and coding, providing
                members with valuable knowledge and networking opportunities.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Online Resources</span>
          <button className="expand-btn" onClick={() => toggleVision(5)}>
            +
          </button>
          {openVision === 5 && (
            <div className={`vision-content ${openVision === 5 ? "open" : ""}`}>
              <p>
                Build a digital repository of coding resources, tutorials, and
                project ideas, accessible to all members to enhance learning and
                project development.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Competitive Coding Contests</span>
          <button className="expand-btn" onClick={() => toggleVision(6)}>
            +
          </button>
          {openVision === 6 && (
            <div className={`vision-content ${openVision === 6 ? "open" : ""}`}>
              <p>
                Organize online coding competitions on platforms like
                HackerEarth to sharpen members' competitive coding skills and
                prepare them for coding interviews.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Project Exhibitions</span>
          <button className="expand-btn" onClick={() => toggleVision(7)}>
            +
          </button>
          {openVision === 7 && (
            <div className={`vision-content ${openVision === 7 ? "open" : ""}`}>
              <p>
                Encourage students to build and showcase their projects in
                community exhibitions, where they can receive feedback and
                recognition for their work.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Group Discussions</span>
          <button className="expand-btn" onClick={() => toggleVision(8)}>
            +
          </button>
          {openVision === 8 && (
            <div className={`vision-content ${openVision === 8 ? "open" : ""}`}>
              <p>
                Host bi-weekly group discussions (online or offline) on emerging
                technologies, code quality, and best practices. This will help
                members stay updated with the latest trends and prepare for
                technical interviews.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Blog/Article Writing</span>
          <button className="expand-btn" onClick={() => toggleVision(9)}>
            +
          </button>
          {openVision === 9 && (
            <div className={`vision-content ${openVision === 9 ? "open" : ""}`}>
              <p>
                Promote blog and article writing on platforms like Medium and
                Wired, encouraging members to share their knowledge and
                experiences while building their professional profiles.
              </p>
            </div>
          )}
        </li>
        <li>
          <span className="vision-title">Open-Source Contributions</span>
          <button className="expand-btn" onClick={() => toggleVision(10)}>
            +
          </button>
          {openVision === 10 && (
            <div
              className={`vision-content ${openVision === 10 ? "open" : ""}`}
            >
              <p>
                Encourage open-source contributions, a great way for students to
                earn recognition, build connections, and even generate income
                while learning from real-world projects.
              </p>
            </div>
          )}
        </li>
      </ul>
    </section>
  );
};

export default OurVisions;
