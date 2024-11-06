import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Register.css";
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";
import QRCode from "qrcode";

function Register({ onRegistrationSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    collegeEmail: "",
    collegeId: "",
    year: "",
    department: "",
    contactNumber: "",
    whatsappNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => !field)) {
      setError("Please fill out all fields.");
      return;
    }

    // Validate email ending
    const emailPattern = /@nshm\.edu\.in$/;
    if (!emailPattern.test(formData.collegeEmail)) {
      setError("Email must end with @nshm.edu.in");
      return;
    }

    // Validate college ID for 11 digits
    const collegeIdPattern = /^\d{11}$/;
    if (!collegeIdPattern.test(formData.collegeId)) {
      setError("College ID must be 11 digits.");
      return;
    }

    // Validate phone numbers for 10 digits
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.contactNumber)) {
      setError("Contact Number must be 10 digits.");
      return;
    }

    if (!phonePattern.test(formData.whatsappNumber)) {
      setError("WhatsApp Number must be 10 digits.");
      return;
    }

    try {
      const response = await fetch(
        "https://registrationsystem-1a4m.onrender.com/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Registration successful!");
        setError("");

        // Step 2: Generate the QR code with collegeId
        const qrCodeDataUrl = await QRCode.toDataURL(formData.collegeId);

        // Step 3: Send the email with the QR code
        await sendEmailWithQRCode(formData.name, formData.collegeEmail, qrCodeDataUrl);
        setTimeout(() => {
          onRegistrationSuccess(); // Update status in App.js
          navigate(`/registration-success/${formData.name}`);
        }, 1000);

        setFormData({
          name: "",
          collegeEmail: "",
          collegeId: "",
          year: "",
          department: "",
          contactNumber: "",
          whatsappNumber: "",
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Error registering. Please check your connection.");
    }
  };

  // Function to send email with QR code
  const sendEmailWithQRCode = async (name, collegeEmail, qrCode) => {
    try {
      const emailResponse = await fetch(
        "https://registrationsystem-1a4m.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, collegeEmail, qrCode }),
        }
      );

      if (!emailResponse.ok) {
        throw new Error("Failed to send email.");
      }
    } catch (error) {
      setError("Failed to send QR code via email. Please try again later.");
    }
  };

  // Clear success or error message after 5 seconds
  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  return (
    <div className="register-container">
      {/* <h1 className="club-name-register">CodeNEST</h1> */}
      <div className="logo-section">
        <img
          src={CodeNESTIcon}
          alt="CodeNEST Logo"
          className="club-icon-logo"
        />
        <img
          src={CodeNESTTitle}
          alt="CodeNEST Logo"
          className="club-name-logo"
        />
        <img
          src={CodeNESTSlogan}
          alt="CodeNEST Slogan"
          className="club-slogan-logo"
        />
      </div>
      <h2 className="register-title">Register</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="collegeEmail"
          placeholder="College Email"
          value={formData.collegeEmail}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="collegeId"
          placeholder="College ID"
          value={formData.collegeId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          value={formData.whatsappNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <button className="back-button-register" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Register;
