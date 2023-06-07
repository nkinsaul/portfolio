import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Development</Link>
      <Link to="/audio">Audio</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar;