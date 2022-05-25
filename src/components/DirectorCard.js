import React from 'react'

function DirectorCard({ name, movies }) {
    return(
        <div>
            <h4>Name: {name}</h4>
            <div>Movies:</div>
            <ul> 
             {movies.map((movie, index)=>{
                return <li key={index}>{movie}</li>
            })}
            </ul>
      </div>
    )
}

export default DirectorCard