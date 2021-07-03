import "./styles.css";
import { Navbar, AllMovies, Moviepage, MoviesByCategory } from "./Components";
import { moviesdata } from "./data";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const [show, setshow] = useState(false);
  const [data, setData] = useState({ name: "shivam" });
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AllMovies
                moviesdata={moviesdata}
                setData={setData}
                setshow={setshow}
              />
            }
          />
          <Route
            path="/category"
            element={
              <MoviesByCategory
                moviesdata={moviesdata}
                setData={setData}
                setshow={setshow}
              />
            }
          />
        </Routes>
      </div>
      <Moviepage show={show} movieData={data} setshow={setshow} />
    </>
  );
}
