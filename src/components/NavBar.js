import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyle = {
    marginRight: "20px", // Add margin between the links
  };

  return (
    <div>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" style={linkStyle}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={linkStyle}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={linkStyle}>
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
