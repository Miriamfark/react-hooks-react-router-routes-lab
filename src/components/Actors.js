import React from "react";
import ActorCard from "./ActorCard";
import { actors } from "../data";

function Actors() {

  const actorsData = actors.map((actor, index)=>{
    return <ActorCard 
    key={actor.name}
    name={actor.name}
    movies={actor.movies}
    />
  })

  return(
    <>
      <h1>Actors Page</h1>
      {actorsData}
    </>
  )
}

export default Actors;
