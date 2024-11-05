import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import QRScanner from './QRScanner';
import Register from './Register';
import Home from './Home';
import PasswordPage from './PasswordPage';
import './App.css';
import NotFound from './NotFound';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';
import RegistrationSuccess from './RegistrationSuccess';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleAuthorization = (authorized, user = null) => {
    setIsAuthorized(authorized);
    setIsUnauthorized(!authorized);
    setUserName(user);
  };

  // Handler to update registration status
  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/scan" 
            element={
              isPasswordVerified ? 
                <QRScanner onAuthorized={handleAuthorization} /> : 
                <Navigate to="/password" />
            } 
          />
          <Route path="/register" element={<Register onRegistrationSuccess={handleRegistrationSuccess} />} />
          <Route path="/password" element={<PasswordPage onVerify={() => setIsPasswordVerified(true)} />} />
          <Route path="/authorized" element={isAuthorized ? <AuthorizedMessage userName={userName} /> : <Navigate to="/scan" />} />
          <Route path="/unauthorized" element={isUnauthorized ? <UnauthorizedMessage /> : <Navigate to="/scan" />} />
          <Route
          path="/registration-success/:name"
          element={
            isRegistered ? <RegistrationSuccessMessage /> : <Navigate to="/register" replace />
          }
        />
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
      navigate('/scan');
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
