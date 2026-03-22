import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/Context'
import { Link } from 'react-router-dom'
import Card from './Card'
const SearchResults = () => {
  const { searchResults,setTemp } = useContext(myContext);
  
  return (
    <div className="flex items-center h-[25.5rem] mt-2 gap-4 overflow-x-auto ">
       {searchResults.map((anime) => (
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
  )
}
//  {searchResults.map((section, i) => (
//         <div key={i} className="space-y-6">
//           <h1 className="text-white text-3xl font-bold">{section.title}</h1>

//           <div className="flex h-[19.5rem] mt-2 gap-4 overflow-x-auto">
//             {section.data.map((anime) => (
//               <Link to="/info" key={anime.mal_id} className="flex-shrink-0">
//                 <Card
//                   key={anime.mal_id}
//                   title={anime.title_english || anime.title}
//                   img={anime.images.jpg.image_url}
//                   onClick={() => {
//                     setTemp(anime);
//                     console.log("clciked");
//                     // console.log(temp)
//                   }}
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       ))}
export default SearchResults