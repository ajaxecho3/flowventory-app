"use client";

import QRCodeScanner from "@/components/QRCodeScanner";
import React from "react";

function Scanner() {
  const [scannedData, setScannedData] = React.useState<string | null>(null);
  const handleScan = (data: string) => {
    if (data) {
      setScannedData(data);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto h-screen">
      <QRCodeScanner onScan={handleScan} />
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
}

export default Scanner;
