import "./card.css";
export const MovieCard = ({
  posterimg,
  title,
  imdbratings,
  releasedate,
  duration,
  cast,
  geners,
}) => {
  return (
    <section className="card-sec">
      <div className="card-div">
        <img className="card-img" src={posterimg} alt="" />
        <div className="desc-div">
          <h1 className="card-title">{title}</h1>
          <p>IMDB ratings : {imdbratings}</p>
          <div>
            <p>Cast : {cast.join()} </p>
            <p>Geners : {geners.join()}</p>
          </div>
          <p>Duration :{duration}</p>
          <p className="release-p">
            Realise Date{releasedate}
          </p>
        </div>
      </div>
    </section>
  );
};
