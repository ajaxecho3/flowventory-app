"use client";

import React from "react";
import Webcam from "react-webcam";

const WebcamCapture = ({ onScan }: { onScan: (data: string) => void }) => {
  const webcamRef = React.useRef<Webcam>(null);

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.49,
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
        className="h-full w-full m-4  rounded-lg"
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
