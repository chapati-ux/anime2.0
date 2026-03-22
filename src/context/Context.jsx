import React, { use, useEffectEvent } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const myContext = React.createContext();
const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [info, setInfo] = useState([]);
  const [temp, setTemp] = useState([]);
  const [coursuelData, setCoursuelData] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(
            "https://api.jikan.moe/v4/top/anime?type=movie",
          );
          setCoursuelData(response.data.data);
         setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
        }
      })();
    }, 5000);
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const responce = await axios.get(
  //         "https://api.jikan.moe/v4/seasons/now?sfw",
  //       );
  //       setData(responce.data.data);
  //       setError(false);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   })();
  // }, []);
  useEffect(() => {
    (async () => {
      try {
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        const endpoints = [
          {
            title: "Most Popular",
            url: "https://api.jikan.moe/v4/top/anime?filter=bypopularity",
          },
          {
            title: "Top Movies",
            url: "https://api.jikan.moe/v4/top/anime?type=movie",
          },
          {
            title: "Winter 2024",
            url: "https://api.jikan.moe/v4/seasons/2024/winter?sfw",
          },
          {
            title: "Top Anime",
            url: "https://api.jikan.moe/v4/top/anime",
          },
          {
            title: "Recommended",
            url: "https://api.jikan.moe/v4/seasons/2019/spring?sfw",
          },
          {
            title: "Airing Now",
            url: "https://api.jikan.moe/v4/seasons/now?sfw",
          },
        ];

        const results = [];

        for (let i = 0; i < endpoints.length; i++) {
          const response = await axios.get(endpoints[i].url);

          results.push({
            title: endpoints[i].title,
            data: response.data.data,
          });
          await sleep(800);
        }

        setData(results);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (!temp?.mal_id) return;

    (async () => {
      try {
        const responce1 = await axios.get(
          `https://api.jikan.moe/v4/anime/${temp.mal_id}/full`,
        );
        setInfo(responce1.data.data);
        console.log(info)
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    })();
  }, [temp]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (!searchTerm) return;

      (async () => {
        try {
          const response = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`,
          );
//*  `https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw`,
          setSearchResults(response.data.data);
          console.log(response.data.data);
          
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
        }
      })();
    }, 500);

    return () => clearTimeout(delay);
  }, [searchTerm]);
  return (
    <myContext.Provider
      value={{
        data,
        error,
        isOnline,
        coursuelData,
        info,
        setInfo,
        temp,
        setTemp,
        searchTerm,
        setSearchTerm,
        searchResults,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default Context;
