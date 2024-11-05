import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import './QRScanner.css';

function QRScanner({ onAuthorized }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deviceId, setDeviceId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Enumerate video input devices
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      
      // Try to find a device without 'wide' in the label, usually the regular camera
      const regularCamera = videoDevices.find(device => !device.label.toLowerCase().includes('wide'));
      setDeviceId(regularCamera ? regularCamera.deviceId : videoDevices[0].deviceId);
    });
  }, []);

  const handleScan = async (error, result) => {
    if (result) {
      const id = result.text;
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://registrationsystem-1a4m.onrender.com/api/users/${id}`);
        const data = await response.json();

        if (response.ok) {
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
      {deviceId && (
        <BarcodeScannerComponent
          onUpdate={handleScan}
          delay={500}
          constraints={{ video: { deviceId: { exact: deviceId } } }}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <button className="back-button-scanner" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
}

export default QRScanner;
