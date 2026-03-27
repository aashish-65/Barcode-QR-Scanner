import React from "react";
import PixelBlast from "./components/PixelBlast";
import RegistrationCount from "./sections/RegistrationCount";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import CountDown from "./sections/CountDown";
import OurVisions from "./sections/OurVisions";
import PastEvents from "./sections/PastsEvents";
import Footer from "./components/Footer";
import AboutUs from "./sections/AboutUs";
import "./styles/Home.css";
// import Speakers from "./sections/Speakers";
import Organizers from "./sections/Organizers";
import Teams from "./sections/Teams";
import Venue from "./sections/Venue";
import UpcomingEvents from "./sections/UpcomingEvents";
import Sponsors from "./sections/Sponsors";
import ChiefMentor from "./sections/Mentor";
import FacultyCoordinator from "./sections/FacultyCoordinator";
import Graph from "./sections/Graph";

function Home() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  return (
    <div className="home-container">
      <PixelBlast
        variant="circle"
        pixelSize={isMobile ? 4 : 7}
        color="#7c3aed"
        patternScale={isMobile ? 3 : 4}
        patternDensity={isMobile ? 0.7 : 0.9}
        enableRipples={true}
        rippleSpeed={0.3}
        rippleThickness={0.12}
        rippleIntensityScale={1.2}
        speed={0.4}
        edgeFade={0.15}
        transparent={true}
      />
      <Header />
      <Navbar />
      {/* Upcoming Hackathon Banner */}
      <section className="hackathon-banner">
        <a href="/hackathon/" target="_blank" rel="noopener noreferrer">
          <h2 className="hackathon-banner-heading">🚀 Upcoming Hackathon</h2>
          <div className="hackathon-banner-img-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/codeforchange2.0.jpeg`}
              alt="Code for Change 2.0 Hackathon"
              className="hackathon-banner-img"
            />
          </div>
        </a>
      </section>
      {/* <CountDown /> */}
      <RegistrationCount />
      <Graph />
      <AboutUs />
      <OurVisions />
      <UpcomingEvents />
      <PastEvents />
      {/* <Speakers /> */}
      <ChiefMentor />
      <FacultyCoordinator />
      <Organizers />
      <Teams />
      <Venue />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
