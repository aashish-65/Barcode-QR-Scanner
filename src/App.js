import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import QRScanner from "./QRScanner";
import Register from "./Register";
import Home from "./Home";
import PasswordPage from "./PasswordPage";
import NotFound from "./NotFound";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";
import RegistrationSuccess from "./RegistrationSuccess";
import LogoMakingEvent from "./LogoMakingEvent";
import LaunchEventDetails from "./LaunchEventDetails";
import Preloader from "./Preloader";
import "./styles/App.css";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isPreloading, setIsPreloading] = useState(true); // Preloader state

  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 3500); // Preloader duration
    return () => clearTimeout(timer);
  }, []);

  const handleAuthorization = (authorized, user = null) => {
    setIsAuthorized(authorized);
    setIsUnauthorized(!authorized);
    setUserName(user);
  };

  // Handler to update registration status
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  if (isPreloading) {
    return <Preloader />; // Show Preloader if preloading
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/scan"
            element={
              isPasswordVerified ? (
                <QRScanner onAuthorized={handleAuthorization} />
              ) : (
                <Navigate to="/password" />
              )
            }
          />
          <Route
            path="/register"
            element={
              <Register onRegistrationSuccess={handleRegistrationSuccess} />
            }
          />
          <Route
            path="/password"
            element={
              <PasswordPage onVerify={() => setIsPasswordVerified(true)} />
            }
          />
          <Route
            path="/authorized"
            element={
              isAuthorized ? (
                <AuthorizedMessage userName={userName} />
              ) : (
                <Navigate to="/scan" />
              )
            }
          />
          <Route
            path="/unauthorized"
            element={
              isUnauthorized ? <UnauthorizedMessage /> : <Navigate to="/scan" />
            }
          />
          <Route
            path="/registration-success/:name"
            element={
              isRegistered ? (
                <RegistrationSuccessMessage />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />
          <Route path="/event/logo-making" element={<LogoMakingEvent />} />

          <Route path="/event/launch-event-details" element={<LaunchEventDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

function AuthorizedMessage({ userName }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/scan");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <Authorized userName={userName} onNavigate={navigate} />;
}

function UnauthorizedMessage() {
  const navigate = useNavigate();
  return <Unauthorized onNavigate={navigate} />;
}

function RegistrationSuccessMessage() {
  return <RegistrationSuccess />;
}

export default App;
