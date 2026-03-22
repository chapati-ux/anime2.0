import React, { useContext,useState,useEffect } from "react";
import { myContext } from "../context/Context";
import { Link, useNavigate ,useLocation } from "react-router-dom";
const NavBar = () => {
  const { searchTerm, setSearchTerm } = useContext(myContext);
  const [tdata, setTdata] = useState([]);
  const navigate = useNavigate();

 const handleSearch = (e) => {
  e.preventDefault();

  if (!tdata.trim()) return;

  setSearchTerm(tdata);
  navigate("/searchresults");
  
};
const location = useLocation();

useEffect(() => {
  if (location.pathname === "/") {
    setTdata("");
  }
}, [location.pathname]);

//* useEffect(() => {

//     return () => {
//       setTdata(null)
//     };
//   }, []);

  return (
    <div className="fixed z-10 h-[3rem] w-screen bg-black flex items-center justify-between px-6 shadow-lg">
      <Link to="/" className="text-white text-2xl font-bold">
        AnimeHub
      </Link>

      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="search"
          placeholder="Search for anime..."
          className="bg-white text-black placeholder:text-gray-500 px-2 py-1 rounded focus:outline-none"
          value={tdata}
          onChange={(e) => setTdata(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black font-semibold py-1 px-4 rounded-md hover:bg-gray-200"
          
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default NavBar;