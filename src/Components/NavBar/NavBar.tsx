import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/projects">PROJECTS</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/contact">CONTACT</Link>
    </nav>
  )
}

export default NavBar;