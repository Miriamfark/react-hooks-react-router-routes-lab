import React from "react"

function MovieCard({ title, time, genres }) {

return( 
    <>
      <h3>
      Name: {title}
      </h3>
      <h4>
        Time: {time}
      </h4>
      <div>Genres: </div>
      <ul>
        {genres.map((genre, index)=>{
    return <li key={index}>{genre}</li>
  })}
      </ul>
    </> 
    )
  }

export default MovieCard