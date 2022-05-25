import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsData = directors.map((director)=>{
    return (
      <div>
        <h4>Name: {director.name}</h4>
        <ul> Movies:
        {director.movies.map((movie)=>{
          return <li>{movie}</li>
        })}
        </ul>
      </div>
    )
  })

  return(
    <>
      <h1>Directors Page</h1>
      {directorsData}
    </>
  )
}

export default Directors;
