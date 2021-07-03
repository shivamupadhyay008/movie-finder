import "./navbar.css";
export const Navbar = () => {
  return (
    <section className="nav-bar">
      <div className="fx">
        <h2 className="title">MovieFinder</h2>
        <div className="ct-div">
          <span className="nav-btn">See All</span>
          <span className="nav-btn">Category</span>
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
