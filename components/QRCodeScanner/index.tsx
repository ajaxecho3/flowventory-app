"use client";

import React from "react";
import WebcamCapture from "./WebcamCapture";
import jsQR from "jsqr";

type Props = {
  onScan: (data: string) => void;
};

const QRCodeScanner = ({ onScan }: Props) => {
  const handleScan = (imageSrc: string) => {
    if (imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });
        if (code) {
          onScan(code.data);
          console.log("code: ", code);
        }
      };
    }
  };
  return <WebcamCapture onScan={handleScan} />;
};

export default QRCodeScanner;
