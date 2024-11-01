import React, { useState } from 'react';
import QRScanner from './QRScanner';
import Register from './Register';
import Home from './Home';
import './App.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [userName, setUserName] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleScan = (isAuthorized, userName = '') => {
    setIsAuthorized(isAuthorized);
    setUserName(userName);
    setScreen(isAuthorized ? 'authorized' : 'unauthorized');

    if (isAuthorized) {
      setTimeout(() => {
        setScreen('home');
        setUserName(null);
        setIsAuthorized(false);
      }, 3000);
    }
  };

  return (
    <div className="App">
      {screen === 'home' && <Home onNavigate={setScreen} />}
      {screen === 'scan' && <QRScanner onScan={handleScan} />}
      {screen === 'authorized' && <div className="authorized"><h2>Welcome to CodeNEST, {userName}!</h2></div>}
      {screen === 'unauthorized' && (
        <div className="unauthorized">
          <h2>Unauthorized</h2>
          <button onClick={() => setScreen('register')}>Register</button>
        </div>
      )}
      {screen === 'register' && <Register onBackToHome={() => setScreen('home')} />}
    </div>
  );
}

export default App;
