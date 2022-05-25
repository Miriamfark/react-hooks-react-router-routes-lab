import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return(
  <div className="navbar"> 
  <ul>
    <li>
    <NavLink
      to="/"
      exact
      activeStyle={{
        color: "blue",
      }}
    >
      Home
    </NavLink>
    </li>
    <li>
    <NavLink
      to="/movies"
      exact
      activeStyle={{
        color: "blue",
      }}
    >
      Movies
    </NavLink>
    </li>
    <li>
    <NavLink
      to="/directors"
      exact
      activeStyle={{
        color: "blue",
      }}
    >
      Directors
    </NavLink>
    </li>
    <li>
    <NavLink
      to="/actors"
      exact
      activeStyle={{
        color: "blue",
      }}
    >
      Actors
    </NavLink>
    </li>
    </ul>
  </div>
  )
}

export default NavBar;
