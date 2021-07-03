import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard ,Loader} from "../index";
export const AllMovies = ({  setData, setshow }) => {
  const [movies, setmovies] = useState(null);
  const [size,setSize]=useState(10);
  const getMovies = async(size)=>{
  try {
    const response = await axios.get(`/getmoviesinfo/${size}`);
    setmovies(response.data.movies)
    setSize((size)=>size+5)
    console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
  };
  useEffect(() => {
   setTimeout(() => {
    getMovies(10);
   }, 3000);

  }, []);

  return movies ? (
    <div className="movies-cards-div" onScroll={()=>{getMovies(size)
    console.log("hhh")}}>
      {movies.map((item) => {
        return (
          <MovieCard
            item={item}
            setData={setData}
            setshow={setshow}
            key={item.id}
          />
        );
      })}
    </div>
  ) : (
    <Loader />
  );
};
