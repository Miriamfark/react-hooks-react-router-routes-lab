import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsData = actors.map((actor)=>{
    return(
      <>
        <h4>Name: {actor.name}</h4>
        <ul>Movies:
          {actor.movies.map((movie)=>{
          return <li>{movie}</li>
        })}
        </ul>
      </>
    )
  })

  return(
    <>
      <h1>Actors Page</h1>
      {actorsData}
    </>
  )
}

export default Actors;
