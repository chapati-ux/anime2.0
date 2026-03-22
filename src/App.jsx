import { useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { myContext } from "./context/Context";
import NavBar from "./components/NavBar";
import Info from "./pages/Info";
import SearchResults from "./components/SearchResults";
import Internet from "./components/Internet";
import Loading from "./components/Loading";
import Error from "./components/Error";
function App() {
  const { data, error, isOnline, coursuelData } = useContext(myContext);
  if (!isOnline) {
    return <Internet />;
  } else if (data.length === 0 && coursuelData.length === 0) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/searchresults" element={<SearchResults />} />
      </Routes>

      {data.length > 0 && <Footer />}
    </>
  );
}

export default App;
