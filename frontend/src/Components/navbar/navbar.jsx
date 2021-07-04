import "./navbar.scss";
import {Link} from "react-router-dom";
export const Navbar = () => {
  return (
    <section className="nav-bar">
      <div className="fx">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          <h2 className="title">MovieFinder</h2>
        </Link>
        <div className="ct-div">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/allmovies"
          >
            <span className="nav-btn">See All</span>
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/category"
          >
            <span className="nav-btn">Category</span>
          </Link>
          <img
            className="av-img"
            src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
            alt="something wrong"
          />
        </div>
      </div>
    </section>
  );
};
