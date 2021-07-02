import "./moviepage.css";
import { Modal, Card ,Button} from "react-bootstrap";
import { useState } from "react";
export const Moviepage = ({ posterurl ,title,genres,cast,duration,realisedate,storyline,rating}) => {
 const [show,setshow]=useState(true)
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
          <Card.Img className="card-img-bs" variant="top" src={posterurl} />
          <Card.Body>
            <h2 style={{ fontWeight: "bolder" }}>Movie: {title}</h2>
            <h4>Genres : {genres.join()} </h4>
            <h4>Cast : {cast.join()}</h4>
            <p>
              Realise date : {realisedate} <br />
              Movie Duration : {duration} <br /> IMBD Ratings : {rating}
            </p>
            <p>Storyline : {storyline}</p>
          </Card.Body>
        </Card>
        <Button onClick={()=>setshow(false)} >Back</Button>
      </Modal>
      );
    </section>
  );
};
