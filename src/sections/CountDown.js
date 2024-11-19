import React, { useEffect, useState } from "react";
import "../styles/CountDown.css";

const CountDown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-20T10:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="countdown" className="countdown-section">
      <h2>Countdown to Inauguration</h2>
      <div className="countdown-timer">
        <span>{countdown.days} Days</span>
        <span>{countdown.hours} Hours</span>
        <span>{countdown.minutes} Minutes</span>
        <span>{countdown.seconds} Seconds</span>
      </div>
    </section>
  );
};

export default CountDown;
