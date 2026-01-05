import React from "react";
import newLogo from "../assets/new-logo.png";

const LogoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">New Logo Preview</h1>
        <div className="flex justify-center">
          <img 
            src={newLogo} 
            alt="New Logo" 
            className="max-w-md w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
