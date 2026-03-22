import React from "react";
import { PulsingGridLoader } from "react-loaderkit";
import { BouncingBalls } from 'react-loaderkit';

const Loading = () => {
  return (
    <div className="fixed z-40 overflow-hidden bg-black h-screen w-screen flex flex-col items-center justify-center pb-32">
      
      <PulsingGridLoader 
        size={150} 
        color="#ffffff" 
        speed={0.8} 
      />
 <br />
      <h1 className="text-white text-4xl mt-6">
        Loading...
      </h1>

    </div>
  );
};

export default Loading;