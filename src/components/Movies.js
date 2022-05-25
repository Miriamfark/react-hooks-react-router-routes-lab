import React from "react";
import MovieCard from "./MovieCard"
import { movies } from "../data";

function Movies() {

  const movieData = movies.map((movie)=>{
    return <MovieCard 
    key={movie.title} 
    title={movie.title} 
    time={movie.time}
    genres={movie.genres}
    />
  })

  return(
    <div>
      <h1>Movies Page</h1>
     {movieData}
    </div>
  )
}

export default Movies;
