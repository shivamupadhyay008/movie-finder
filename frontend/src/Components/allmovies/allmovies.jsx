import {MovieCard} from "../index"
export const AllMovies = ({moviesdata,setData,setshow}) => {
  return (
    <div className="movies-cards-div">
      {moviesdata.map((item) => {
        return (
          <MovieCard
            item={item}
            setData={setData}
            setshow={setshow}
            key={item.id}
          />
        );
      })}
    </div>
  );
};
