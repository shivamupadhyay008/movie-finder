import { createContext, useContext, useState } from "react";

export const MovieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [movies, setMovies] = useState(null);
  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMoviesContext(){
    return useContext(MovieContext);
}