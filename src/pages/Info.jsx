import React, { useContext } from "react";
import { myContext } from "../context/Context";
import { useEffect } from "react";
const Info = () => {
  const { info, setInfo } = useContext(myContext);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when page loads

    return () => {
      setInfo(null); // runs when leaving Info page
    };
  }, []);

  if (!info) {
    console.log(true);
  } else {
    console.log(false);
  }
  
  if (!info || !info.images) {
    return (
      <div className="flex justify-center items-center text-white h-screen text-xl">
        Loading Anime Info...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Poster */}
        <div>
          <img
            src={info.images.jpg.large_image_url}
            alt={info.title}
            className="w-screen rounded-xl shadow-lg object-contain "
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">
          {info.title_english || info.title}
        </h1>

        {info.trailer?.embed_url && (
          <div className="mb-6">
            <iframe
              src={`${info.trailer.embed_url}?autoplay=1&mute=1`}
              title={`${info.title} Trailer`}
              className="w-full h-64 rounded-2xl shadow-lg"
              allowFullScreen
              allow="autoplay"
            />
          </div>
        )}

        {/* Details */}
        <div className="space-y-4">
          <p>
            <span className="font-bold">Type:</span> {info.type}
          </p>

          <p>
            <span className="font-bold">Episodes:</span> {info.episodes}
          </p>

          <p>
            <span className="font-bold">Status:</span> {info.status}
          </p>

          <p>
            <span className="font-bold">Score:</span> ⭐ {info.score}
          </p>

          <p>
            <span className="font-bold">Rank:</span> #{info.rank}
          </p>

          <p>
            <span className="font-bold">Popularity:</span> #{info.popularity}
          </p>

          <p>
            <span className="font-bold">Year:</span> {info.year}
          </p>

          <p>
            <span className="font-bold">Source:</span> {info.source}
          </p>
        </div>
      </div>

      {/* Synopsis */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Synopsis</h2>
        <p className="text-gray-300 leading-relaxed">{info.synopsis}</p>
      </div>

      {/* Genres */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">Genres</h2>

        <div className="flex flex-wrap gap-3">
          {info.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="bg-red-500 px-3 py-1 rounded-full text-sm"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
