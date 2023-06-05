import React from "react";
import './Header.css'
import NavBar from "../NavBar/NavBar";
import logoNK from '../../images/logoNK.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logoNK} />
      <NavBar />
    </header>
  )
}

export default Header;