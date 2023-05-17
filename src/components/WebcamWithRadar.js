import React from 'react';
import WebcamDisplay from './WebcamDisplay';
import RadarDisplay from './RadarDisplay';
import './WebcamWithRadar.css';

const WebcamWithRadar = () => {
  return (
    <div className="webcam-with-radar">
      <WebcamDisplay />
      <RadarDisplay />
    </div>
  );
};

export default WebcamWithRadar;
