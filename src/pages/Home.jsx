import React from "react";
import { myContext } from "../context/Context";
import { useContext } from "react";
import Error from "../components/Error";
import Internet from "../components/Internet";
import Loading from "../components/Loading";
import Card from "../components/Card";
import Corsuel from "../components/Corsuel";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, error, isOnline, coursuelData, info, setInfo, temp, setTemp } =
    useContext(myContext);
  // if (!isOnline) {
  //   return <Internet />;
  // } else if (data.length === 0 && coursuelData.length === 0) {
  //   return <Loading />;
  // } else if (error) {
  //   return <Error />;
  // }
  return (
    // <div className="">
    //   {data.map((section, i) => (
    //     <div key={i}>
    //       <h1 className="text-red-500">{section.title}</h1>

    //       <div className="flex w-auto  gap-4  ">
    //         {section.data.map((anime) => (

    //           <Card
    //             key={anime.mal_id}
    //             title={anime.title}
    //             img={anime.images.jpg.image_url}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="px-6 py-8 space-y-12 no-scrollbar">
      <Corsuel />
      {data.map((section, i) => (
        <div key={i} className="space-y-6 no-scrollbar">
          <h1 className="text-white text-3xl font-bold">{section.title}</h1>

          <div className="flex h-[19.5rem] mt-2 gap-4 overflow-x-auto">
            {section.data.map((anime) => (
              <Link to="/info" key={anime.mal_id} className="flex-shrink-0">
                <Card
                  key={anime.mal_id}
                  title={anime.title_english || anime.title}
                  img={anime.images.jpg.image_url}
                  onClick={() => {
                    setTemp(anime);
                    console.log("clciked");
                    // console.log(temp)
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
