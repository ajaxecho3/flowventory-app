"use client";

import React from "react";
import { useQRCode } from "next-qrcode";

export default function QRCode({ text }: { text: string }) {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      text={text}
      options={{
        errorCorrectionLevel: "L",
        margin: 2,
        scale: 14,
        width: 398,
        color: {
          dark: "#0a0a0a",
          light: "#ffffff",
        },
      }}
    />
  );
}
