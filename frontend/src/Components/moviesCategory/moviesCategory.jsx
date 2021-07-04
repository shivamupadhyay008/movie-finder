import "./category.scss";
import { MovieCard, Loader } from "../index";
import { Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";
import {useMoviesContext} from "../../context/movieContext"
import axios from "axios";
export const MoviesByCategory = ({  setData, setshow }) => {
  const [category, setCategory] = useState("Action");
  const {movies, setMovies} = useMoviesContext();
  const [showLoader, setLoader] = useState(true);
  const getMovies = async (category) => {
    try {
      setLoader(true);
      const response = await axios.get(`/moviescategory/${category}`);
      setMovies(response.data.movies);
      setLoader(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getMovies(category);
    }, 3000);
  }, [category]);
  return (
    <section>
      <div className="drop-dwn">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {category}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {[
              "Action",
              "Crime",
              "Drama",
              "Animation",
              "Adventure",
              "Comedy",
              "Romance",
              "Thriller",
            ].map((item) => {
              return (
                <Dropdown.Item onClick={() => setCategory(item)}>
                  {item}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      {!showLoader && movies ? (
        <div className="movies-cards-div">
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
      )}
    </section>
  );
};
