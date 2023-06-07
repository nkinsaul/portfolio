import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Development</Link>
      <Link to="/audio">Audio</Link>
      <p>About</p>
      <p>Contact</p>
    </nav>
  )
}

export default NavBar;