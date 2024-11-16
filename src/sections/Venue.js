import React, { useState, useEffect } from "react";
import Photo1Img from "../assets/Venue/Photo1.jpg";
import Photo2Img from "../assets/Venue/Photo2.jpg";
import Photo3Img from "../assets/Venue/Photo3.jpg";
import Photo4Img from "../assets/Venue/Photo4.jpg";
import "../styles/Venue.css";

const venueImages = [
  Photo1Img,
  Photo2Img,
  Photo3Img,
  Photo4Img,
  "https://www.nshm.com/computinganalytics/durgapur/images/about.png",
];
const Venue = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === venueImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="venue-section">
      <h2>Event Venue</h2>
      <div className="venue-image-container">
        <img
          src={venueImages[currentImageIndex]}
          alt={`Venue ${currentImageIndex + 1}`}
          className="venue-image-fade"
        />
      </div>
      <div className="venue-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.412917598702!2d87.3771204!3d23.5176466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7715f5d396cad%3A0xb158a587000d891c!2sNSHM%20Knowledge%20Campus%2C%20Durgapur!5e0!3m2!1sen!2sin!4v1731574188243!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Venue;
