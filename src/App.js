import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import QRScanner from './QRScanner';
import Register from './Register';
import Home from './Home';
import './App.css';
import NotFound from './NotFound';
import Authorized from './Authorized';
import Unauthorized from './Unauthorized';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  const [userName, setUserName] = useState(null);

  const handleAuthorization = (authorized, user = null) => {
    setIsAuthorized(authorized);
    setIsUnauthorized(!authorized);
    setUserName(user);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<QRScanner onAuthorized={handleAuthorization} />} />
          <Route path="/register" element={<Register />} />
          {/* Conditionally render AuthorizedMessage or redirect to /scan if not authorized */}
          <Route path="/authorized" element={isAuthorized ? <AuthorizedMessage userName={userName} /> : <Navigate to="/scan" />} />
          {/* Conditionally render UnauthorizedMessage or redirect to /scan if not unauthorized */}
          <Route path="/unauthorized" element={isUnauthorized ? <UnauthorizedMessage /> : <Navigate to="/scan" />} />
          {/* Redirect any undefined route to Home */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Authorized Message Component with auto-redirect after 5 seconds
function AuthorizedMessage({ userName }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/scan');  // Redirect to the scan page after 5 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Authorized userName={userName} onNavigate={navigate} />
  );
}

// Unauthorized Message Component
function UnauthorizedMessage() {
  const navigate = useNavigate();

  return (
    <Unauthorized onNavigate={navigate} />
  );
}

export default App;
