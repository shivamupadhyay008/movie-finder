import "./update.scss";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Loader } from "../index";
import axios from "axios";
import { useMoviesContext } from "../../context/movieContext";
export const InputComponent = ({ label, text, setText }) => {
  return (
    <div className="in-div">
      <span className="lbl-cls">{label}</span>
      <input
        className="text-cls"
        value={text}
        onChange={(event) => setText(event.target.value)}
        type="text"
      />
    </div>
  );
};

export const UpdateModal = ({ show }) => {
  return (
    <div style={{ zIndex: "6", width: "70%" }}>
      <Modal
        dialogClassName="mw-sm"
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ backgroundColor: "#c8bfd2" }}>
          <Loader text={"Updating"} />
        </div>
      </Modal>
    </div>
  );
};

export const UpdateMovie = ({ data, setShow, setEdit }) => {
  const [ntitle, setTitle] = useState(data.title);
  const [ngenres, setGenres] = useState(data.genres);
  const [ncasts, setCasts] = useState(data.actors);
  const [release, setRelease] = useState(data.releaseDate);
  const [ratings, setRatings] = useState(data.imdbRating);
  const [duration, setDuration] = useState(data.duration);
  const [story, setStory] = useState(data.storyline);
  const [modal, openModal] = useState(false);
  const { movies, setMovies } = useMoviesContext();
  const updateMovie = async (data, updateMovieData) => {
    try {
      let title = updateMovieData.title;
      let imdbRating = updateMovieData.imdbRating;
      let releaseDate = updateMovieData.releaseDate;
      let duration = updateMovieData.duration;
      let storyline = updateMovieData.storyline;
      let genres =
        typeof updateMovieData.genres == "object"
          ? updateMovieData.genres
          : updateMovieData.genres.split(",");
      let actors =
        typeof updateMovieData.actors == "object"
          ? updateMovieData.actors
          : updateMovieData.actors.split(",");
      let updateData = {
        ...data,
        title,
        releaseDate,
        storyline,
        duration,
        imdbRating,
        genres,
        actors,
      };
      const response = await axios.post("/updatemovie", {
        data: updateData,
      });
      let moviedata = movies.filter((item) => item.id !== data.id);
      moviedata.push(response.data.movie);
      setMovies(moviedata);
      setEdit(false);
      openModal(false);
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  };

  function updateAfterTimeout(data, updateMovieData) {
    setTimeout(() => {
      updateMovie(data, updateMovieData);
    }, 3000);
  }
  return (
    <section className="update-cls">
      {modal ? <UpdateModal show={modal} opneModal={openModal} /> : ""}
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Edit Movie Details
      </h2>
      <InputComponent label={"Title"} text={ntitle} setText={setTitle} />
      <InputComponent label={"Genres"} text={ngenres} setText={setGenres} />
      <InputComponent label={"Casts"} text={ncasts} setText={setCasts} />{" "}
      <InputComponent label={"Release"} text={release} setText={setRelease} />{" "}
      <InputComponent
        label={"IMDB Ratings"}
        text={ratings}
        setText={setRatings}
      />
      <InputComponent
        label={"Movie Duration"}
        text={duration}
        setText={setDuration}
      />
      <div className="in-div txt-area">
        <span className="lbl-cls">Story</span>
        <textarea
          name="story"
          id=""
          className="text-cls"
          rows="6"
          value={story}
          onChange={(event) => setStory(event.target.value)}
        ></textarea>
      </div>
      <div className="btn-ctr">
        <Button
          variant="primary"
          onClick={() => {
            openModal(true);
            let update = {
              title: ntitle,
              genres: ngenres,
              actors: ncasts,
              releaseDate: release,
              duration,
              imdbRating: ratings,
              storyline: story,
            };
            updateAfterTimeout(data, update);
          }}
          style={{ marginRight: "1rem" }}
        >
          Update
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            setShow(false);
            setEdit(false);
          }}
        >
          Cancel
        </Button>
      </div>
    </section>
  );
};
