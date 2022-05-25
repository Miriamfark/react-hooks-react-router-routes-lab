import React from "react";
import DirectorCard from "./DirectorCard";
import { directors } from "../data";

function Directors() {

  const directorsData = directors.map((director)=>{
    return <DirectorCard 
    key={director.name}
    name={director.name}
    movies={director.movies}
    />
  })

  return(
    <>
      <h1>Directors Page</h1>
      {directorsData}
    </>
  )
}

export default Directors;
