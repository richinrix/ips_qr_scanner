import React from "react";
import QrScanner from "../components/QrScanner";
const scan = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <QrScanner />
    </div>
  );
};

export default scan;
