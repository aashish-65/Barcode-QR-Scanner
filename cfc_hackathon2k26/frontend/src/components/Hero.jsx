import React, { useEffect, useState } from "react";
import "../styles/hero.css";
import bgImage from "../assets/st-hero-bg.png";
import { Button } from "@mui/material";
import logo from "../assets/st-text-hero.png";

const Hero = () => {

  const calculateTimeLeft = () => {
    const difference = +new Date("2026-04-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section id="home">
      <div
        className="hero-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="overlay" />

        <div className="hero-content">
          <img src={logo} alt="Hack The Upside Down" className="hero-logo" />

          <p className="tagline fade-in-up delay-1">
            Enter the Upside Down of Innovation
          </p>

          <p className="time fade-in-up delay-2">
            April 10 - 11, 2026 • NSHM KNOWLEDGE CAMPUS, DURGAPUR
          </p>

          <div className="countdown fade-in-up delay-3">
            <div>
              <h2>{timeLeft.days}</h2>
              <span>DAYS</span>
            </div>
            <div>
              <h2>{timeLeft.hours}</h2>
              <span>HOURS</span>
            </div>
            <div>
              <h2>{timeLeft.minutes}</h2>
              <span>MINUTES</span>
            </div>
            <div>
              <h2>{timeLeft.seconds}</h2>
              <span>SECONDS</span>
            </div>
          </div>

          <div className="hero-buttons fade-in-up delay-3">
            <Button
              variant="outlined"
              className="view-schedule"
              href="#timeline"
            >
              View Schedule
            </Button>
            <Button
              variant="outlined"
              className="discord-btn"
              href="https://discord.gg/VPprt8haws"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  style={{ width: 20, height: 20 }}
                >
                  <path
                    fill="currentColor"
                    d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  />
                </svg>
              }
            >
              Join Discord
            </Button>
          </div>

          <br />
          <h1 className="inverted-text">ɥɐɔʞ ʇɥǝ npsᴉpǝ poʍu</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;