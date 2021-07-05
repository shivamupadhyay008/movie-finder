import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
export const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <br />
      <h1>Welcome to Movie finder !</h1>
      <br />
      <h2>You can see movie details and can change details of movies </h2>
      <br />
      <br />
      <br />
      <br />
      <Link to="/allmovies">
        <Button variant="primary">See All Movies</Button>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/category">
        <Button variant="outline-primary">See Movie By Category</Button>
      </Link>
    </div>
  );
};
