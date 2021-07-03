import "./category.css";
import { MovieCard } from "../index";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
export const MoviesByCategory = ({ moviesdata, setData, setshow }) => {
  const [category, setCategory] = useState("Action");
  console.log(category);
  const filterMovies = moviesdata.filter((item) => {
    let answer = item.genres.some(
      (genreItem) => genreItem.toLowerCase() === category.toLowerCase()
    );
    if(answer) return item
  });
  console.log(filterMovies)
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
      <div className="movies-cards-div">
        {filterMovies.map((item) => {
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
    </section>
  );
};
