// PasswordPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordPage.css";
import CodeNESTTitle from "./assets/svg/CodeNESTTitle.svg";
import CodeNESTSlogan from "./assets/svg/Slogan.svg";
import CodeNESTIcon from "./assets/svg/icon.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  TextField,
  InputAdornment,
  InputLabel,
  Input
} from "@mui/material";

function PasswordPage({ onVerify }) {
  //   const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordSubmit = () => {
    const correctPassword = "scan@codenest"; //process.env.REACT_APP_PASSWORD // Replace with your desired password
    if (values.password === correctPassword) {
      onVerify();
      navigate("/scan");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="password-page">
      <div className="logo-section">
        <img
          src={CodeNESTIcon}
          alt="CodeNEST Logo"
          className="club-icon-logo"
        />
        <img
          src={CodeNESTTitle}
          alt="CodeNEST Title"
          className="club-name-logo"
        />
        <img
          src={CodeNESTSlogan}
          alt="CodeNEST Slogan"
          className="club-slogan-logo"
        />
      </div>
      <div className="password-form">
        <h2>Enter Password to Access Scan</h2>
        <Input
          id="password"
          type={values.showPassword ? "text" : "password"}
          onChange={handlePasswordChange("password")}
          value={values.password}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                id="show-password"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <button className="submit-button" onClick={handlePasswordSubmit}>Submit</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default PasswordPage;
