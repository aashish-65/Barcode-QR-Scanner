import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import './QRScanner.css';

function QRScanner({ onScan }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async (error, result) => {
    if (result) {
      const id = result.text;
      setLoading(true);
      setError(null); // Clear any previous errors

      try {
        const response = await fetch(`https://registrationsystem-1a4m.onrender.com/api/users/${id}`);
        const data = await response.json();

        if (response.ok) {
          onScan(true, data.user.name);
        } else {
          onScan(false);
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
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <BarcodeScannerComponent
        onUpdate={handleScan}
        facingMode="environment"
        delay={500}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default QRScanner;
