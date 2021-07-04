import "./styles.scss";
import {
  Navbar,
  Home,
  AllMovies,
  Moviepage,
  MoviesByCategory,
} from "./Components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const [show, setshow] = useState(false);
  const [data, setData] = useState({ name: "shivam" });
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/allmovies"
            element={<AllMovies setData={setData} setshow={setshow} />}
          />
          <Route
            path="/category"
            element={<MoviesByCategory setData={setData} setshow={setshow} />}
          />
        </Routes>
      </div>
      <Moviepage show={show} movieData={data} setshow={setshow} />
    </>
  );
}
