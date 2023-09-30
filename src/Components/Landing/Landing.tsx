import React from "react";
import './Landing.css'
import SideBar from "../SideBar/SideBar";
import listenUp1 from "../../images/ss_1.png"

const Landing = () => {

  return (
    <div className="landing">
      <SideBar />
      <div className="main-content">
        <h1>Development Projects</h1>
        <img src={listenUp1} />
      </div>
    </div>
  )
}

export default Landing;