import "./styles.css";
import { Navbar, MovieCard, Moviepage } from "./Components";
import { moviesdata } from "./data";
import {useState} from "react";
export default function App() {
  const [show, setshow] = useState(false);
  const [data,setData]=useState({name:"shivam"})
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="movies-cards-div">
          {moviesdata.map((item) => {
            return (
              <MovieCard
                item={item}
                setData={setData}
                movie={item.id}
                setshow={setshow}
                key={item.id}
                posterimg={item.posterurl}
                title={item.title}
                imdbratings={item.imdbRating}
                releasedate={item.releaseDate}
                duration={item.duration}
                cast={item.actors}
                genres={item.genres}
              />
            );
          })}
        </div>
      </div>
      <Moviepage
        show={show}
        movieData={data}
        setshow={setshow}
      />
    </>
  );
}
