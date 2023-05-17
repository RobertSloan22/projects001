import React, { useRef, useEffect } from "react";
import "./WebcamDisplay.css";

const WebcamDisplay = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("Error accessing webcam:", err);
      });

    return () => {
      if (video.srcObject) {
        video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="webcam-display">
      <video ref={videoRef} autoPlay muted></video>
    </div>
  );
};

export default WebcamDisplay;
