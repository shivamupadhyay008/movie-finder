import "./moviepage.css";
import { Modal, Card, Button } from "react-bootstrap";
export const Moviepage = ({ movieData, show, setshow }) => {
  console.log(movieData);
  return (
    <section>
      <Modal
        show={show}
        size="lg"
        style={{ height: "100vh" }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        closeButton
      >
        <Card className="bs-card">
          <Card.Img
            className="card-img-bs"
            variant="top"
            src={movieData.posterurl}
          />
          <Card.Body>
            <h2 style={{ fontWeight: "bolder" }}>Movie: {movieData.title}</h2>
            <h4>Genres : {movieData.genres} </h4>
            <h4>Cast : {movieData.actors}</h4>
            <p>
              Realise date : {movieData.releaseDate} <br />
              Movie Duration : {movieData.duration} <br /> IMBD Ratings :{" "}
              {movieData.imdbRating}
            </p>
            <p>Storyline : {movieData.storyline}</p>
          </Card.Body>
        </Card>
        <Button onClick={() => setshow(false)}>Back</Button>
      </Modal>
      );
    </section>
  );
};
