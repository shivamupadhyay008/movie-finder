import "./styles.scss";
import { Navbar, Home, Moviepage, Loader } from "./Components";
import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const AllMovies = lazy(() => import("./Components/allmovies/allmovies"));
const MoviesByCategory = lazy(() => import("./Components/moviesCategory/moviesCategory"));
export default function App() {
  const [show, setshow] = useState(false);
  const [data, setData] = useState({ name: "shivam" });
  console.log(process.env.id)
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Suspense fallback={<Loader />}>
            <Route
              path="/allmovies"
              element={<AllMovies setData={setData} setshow={setshow} />}
            />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <Route
              path="/category"
              element={<MoviesByCategory setData={setData} setshow={setshow} />}
            />
          </Suspense>
        </Routes>
      </div>
      <Moviepage show={show} movieData={data} setshow={setshow} />
    </>
  );
}
