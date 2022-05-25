import React from 'react'

function ActorCard({ name, movies }) {

return(
    <>
    <h4>Name: {name}</h4>
    <div>Movies:</div>
    <ul>
      {movies.map((movie, index)=>{
      return <li key={index}>{movie}</li>
    })}
    </ul>
  </>
)
}

export default ActorCard