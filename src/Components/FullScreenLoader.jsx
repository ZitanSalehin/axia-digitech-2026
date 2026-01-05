// components/FullScreenLoader.jsx
import React from "react";

const FullScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-gray-700/80">
      <div className="flex flex-col gap-2">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
        <p className="text-center text-white">
          Loading
        </p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
