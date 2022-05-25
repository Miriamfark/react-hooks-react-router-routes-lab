import React from "react";
import { movies } from "../data";

function Movies() {

  

  const movieData = movies.map((movie)=>{
    return( 
    <>
      <h3>
      Name: {movie.title}
      </h3>
      <h4>
        Time: {movie.time}
      </h4>
      <ul>
        Genres: 
        {movie.genres.map((genre)=>{
    return <li>{genre}</li>
  })}
      </ul>
    </> 
    )
  })

  return(
    <div>
      <h1>Movies Page</h1>
      {movieData}
    </div>
  )
}

export default Movies;
