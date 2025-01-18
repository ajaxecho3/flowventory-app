"use client";

import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ onScan }: { onScan: (data: string) => void }) => {
  const webcamRef = React.useRef<Webcam>(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment",
  };

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onScan(imageSrc);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
        onClickCapture={() => capture()}
      />
    </div>
  );
};

export default WebcamCapture;
