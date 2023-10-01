import React from "react";
import './Landing.css'
import SideBar from "../SideBar/SideBar";
import listenUp1 from "../../images/lu_ss_1.svg"
import listenUp2 from "../../images/lu_ss_2.svg"
import listenUp3 from "../../images/lu_ss_3.svg"
import listenUp4 from "../../images/lu_ss_4.svg"

const Landing = () => {

  return (
    <div className="landing">
      <SideBar />
      <div className="main-content">
        <h1>Listen Up!</h1>
        <p>ListenUp is an application where users are given a random sound and have to guess what it is. The app offers different categories of sounds such as animals, musical instruments, machines, & miscellaneous. A user then has the option to select a difficulty which determines how many times a sound can be replayed before a guess must be submit. After finishing the game, a score is computed based on the number of correct answers, which is then added to the all-time leaderboard. </p>
        <p>This app was a collaboration with 7 other devlopers: Matt Rowan, Angie Wirth, Bob Aiken, Ryan Canton, Samuel Cox, Joe King, and Zac Walters.</p>
        <div className="image-cont">
          <div className="ss-cont">
            <h2>Choose a Category</h2>
            <img className="screen-shots"src={listenUp1} />
          </div>
          <div className="ss-cont">
            <h2>Game Play</h2>
            <img className="screen-shots"src={listenUp2} />
          </div>
        </div>
        <div className="image-cont">
          <div className="ss-cont">
              <h2>Leaderboard</h2>
              <img className="screen-shots"src={listenUp3} />
            </div>
            <div className="ss-cont">
              <h2>Dark Mode</h2>
              <img className="screen-shots"src={listenUp4} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;