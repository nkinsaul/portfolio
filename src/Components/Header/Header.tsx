import React from "react";
import './Header.css'
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">NK</h1>
      <NavBar />
    </header>
  )
}

export default Header;