import React, { useEffect, useState } from "react";
import axios from "axios";
import CountUp from "react-countup";
import "../styles/RegistrationCount.css";
import { useNavigate } from "react-router-dom";

const RegistrationCount = () => {
  const [registrationCount, setRegistrationCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegistrationCount = async () => {
      try {
        const response = await axios.get(
          "https://registrationsystem-1a4m.onrender.com/api/registrations/count"
        );
        setRegistrationCount(response.data.count);
      } catch (error) {
        console.error("Error fetching registration count:", error);
      }
    };

    fetchRegistrationCount();
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleJoinClick = () => {
    window.open("https://join.slack.com/t/codenestopens-znm8263/shared_invite/zt-2uamf05me-xIFSDdaAgq5QVLcMpj2VIQ", "_blank");
  };

  return (
    <section className="registration-count">
      <h2>Total Students Registered</h2>
      <CountUp
        start={0}
        end={registrationCount}
        duration={2.5}
        separator=","
        delay={0}
      >
        {({ countUpRef }) => (
          <h1 className="count-number" ref={countUpRef}>
            0
          </h1>
        )}
      </CountUp>
      <p className="registration-count-text">What are you waiting for!</p>

      <p className="registration-count-text">
        Click the button below to register.
      </p>

      <button className="register-button" onClick={handleRegisterClick}>
        Register Now
      </button>
      <button className="join-button" onClick={handleJoinClick}>
        Join Our Official Group
      </button>
    </section>
  );
};

export default RegistrationCount;
