import React, { useState, useEffect, useContext } from "react";
import { myContext } from "../context/Context";
import { Link } from "react-router-dom";

const Corsuel = () => {
  const { coursuelData, setTemp } = useContext(myContext);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!coursuelData?.length) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % coursuelData.length);
        setFade(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [coursuelData]);

  return (
    <div className="h-auto w-screen">
      <div className="text-center h-[100%] relative">
        
        <Link
          to="/info"
          onClick={() => {
            setTemp(coursuelData[index]);
            console.log("clicked");
          }}
        >
          <img
            src={coursuelData[index]?.images?.jpg?.large_image_url}
            className={`h-[80vh] w-[100%] object-contain object-center mb-4 shadow-2xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

      </div>
    </div>
  );
};

export default Corsuel;