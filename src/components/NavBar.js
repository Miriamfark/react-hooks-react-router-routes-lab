import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
  <>
    <NavLink
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      exact
    >
      Movies
    </NavLink>
    <NavLink
      to="/directors"
      exact
    >
      Directors
    </NavLink>
    <NavLink
      to="/actors"
      exact
    >
      Actors
    </NavLink>
  </>
  )
}

export default NavBar;
