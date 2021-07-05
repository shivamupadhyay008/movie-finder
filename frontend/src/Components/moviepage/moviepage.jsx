import "./moviepage.scss";
import { Modal, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { UpdateMovie } from "../index";
export const Moviepage = ({ movieData, show, setshow }) => {
  const [edit, setEdit] = useState(false);

  return (
    <section>
      <Modal
        show={show}
        size="md"
        style={{ height: "100vh" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
      >
        {edit ? (
          <UpdateMovie setEdit={setEdit} data={movieData} setShow={setshow} />
        ) : (
          <>
            <Card className="bs-card">
              <Card.Img
                className="card-img-bs"
                variant="top"
                src={movieData.posterurl}
              />
              <Card.Body>
                <h2 style={{ fontWeight: "bolder" }}>
                  Movie: {movieData.title}
                </h2>
                <h4>
                  Genres :{" "}
                  {movieData && movieData.genres && movieData.genres.join()}{" "}
                </h4>
                <h4>
                  Cast :{" "}
                  {movieData && movieData.actors && movieData.actors.join()}
                </h4>
                <p>
                  Realise date : {movieData.releaseDate} <br />
                  Movie Duration : {movieData.duration} <br /> IMBD Ratings :{" "}
                  {movieData.imdbRating}
                </p>
                <p>Storyline : {movieData.storyline}</p>
              </Card.Body>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ marginRight: "1rem" }}
                  varient="primary"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    setEdit(false);
                    setshow(false);
                  }}
                >
                  Back
                </Button>
              </div>
            </Card>
          </>
        )}
      </Modal>
      );
    </section>
  );
};
