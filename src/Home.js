import React from "react";
import RegistrationCount from "./sections/RegistrationCount";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import CountDown from "./sections/CountDown";
import OurVisions from "./sections/OurVisions";
import Events from "./sections/Events";
import Footer from "./components/Footer";
import AboutUs from "./sections/AboutUs";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <CountDown />
      <RegistrationCount />
      <AboutUs />
      <OurVisions />
      <Events />
      <Footer />
    </div>
  );
}

export default Home;
