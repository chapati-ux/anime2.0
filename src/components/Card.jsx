import React, { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../context/Context";
import { useLocation } from "react-router-dom";
const Card = ({ title, img, onClick }) => {

  const {setTemp} = useContext(myContext);
  const location = useLocation();

  useEffect(() => {
    return () => {
      setTemp(null);
    };
  }, [location.pathname]);

  return (
    <div
      onClick={onClick}
      className="h-[18rem] w-[12rem] bg-red-800 overflow-hidden flex-shrink-0 p-5 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      <img
        className="w-full h-[85%] object-cover"
        src={img}
        alt={title}
      />
      <h3 className="text-center mt-5 text-1xl font-bold text-white">
        {title}
      </h3>
    </div>
  );
};

export default Card;