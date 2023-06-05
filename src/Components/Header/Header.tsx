import React from "react";
import './Header.css'
import NavBar from "../NavBar/NavBar";
import logoNK from '../../images/logoNK.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logoNK} />
      {/* <h1 className="logo">NK</h1> */}
      <NavBar />
    </header>
  )
}

export default Header;