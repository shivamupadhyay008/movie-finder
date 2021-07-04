import "./card.scss";
export const MovieCard = ({
  item,
  setData,
  setshow,
}) => {
  return (
    <section
      className="card-sec"
      onClick={() => {
        setshow(true);
        setData(item);
      }}
    >
      <div className="card-div">
        <img className="card-img" src={item.posterurl} alt="" />
        <div className="desc-div">
          <h1 className="card-title">{item.title}</h1>
          <p>IMDB ratings : {item.imdbRating}</p>
          <div>
            <p>Cast : {item.actors.join()} </p>
            <p>Genres : {item.genres.join()}</p>
          </div>
          <p>Duration :{item.duration}</p>
          <p className="release-p">Realise Date : {item.releaseDate}</p>
        </div>
      </div>
    </section>
  );
};
