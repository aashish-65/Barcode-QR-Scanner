import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import './styles/QRScanner.css';

function QRScanner({ onAuthorized }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleScan = async (error, result) => {
    if (result) {
      // const id = result.text;
      const encryptToken = result.text;
      setLoading(true);
      setError(null);

      try {
        // const response = await fetch(`https://registrationsystem-1a4m.onrender.com/api/users/${id}`);
        // const data = await response.json();

        // if (response.ok) {
        //   onAuthorized(true, data.user.name);
        //   navigate('/authorized', { state: { userName: data.user.name } });
        // } else {
        //   onAuthorized(false);
        //   navigate('/unauthorized');
        // }

        const response = await fetch(`https://registrationsystem-1a4m.onrender.com/api/users/verify/${encryptToken}`);
        const data = await response.json();

        if (data.message === 'User checked in successfully') {
          onAuthorized(true, data.user.name);
          navigate('/authorized', { state: { userName: data.user.name } });
        } else {
          onAuthorized(false);
          navigate('/unauthorized');
        }
      } catch (err) {
        setError('Error scanning QR code. Please check your connection.');
      } finally {
        setLoading(false);
      }
    } else if (error) {
      setError('Scan error. Please try again.');
    }
  };

  return (
    <div className="qr-scanner-container">
      {loading && <p className="loading-message-scanner">Loading...</p>}
      {error && <p className="error-message-scanner">{error}</p>}
        <BarcodeScannerComponent
          onUpdate={handleScan}
          facingMode='environment'
          delay={500}
          style={{ width: '100%', height: 'auto' }}
        />
      <button className="back-button-scanner" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default QRScanner;