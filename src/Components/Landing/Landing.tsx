import React from "react";
import './Landing.css'
import SideBar from "../SideBar/SideBar";
import listenUp1 from "../../images/lu_ss_1.svg"
import listenUp2 from "../../images/lu_ss_2.svg"
import listenUp3 from "../../images/lu_ss_3.svg"
import listenUp4 from "../../images/lu_ss_4.svg"
import brewBeat1 from '../../images/bb_ss_1.svg'
import brewBeat2 from '../../images/bb_ss_2.svg'

const Landing = () => {

  return (
    <div className="landing">
      <SideBar />
      <div className="main-content">
        <div className="proj-cont">
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
        <div className="proj-cont">
          <h1>Brew Beats</h1>
          <p>Brew Beats is a web application that allows users to view music events in the Seattle area and see breweries that are nearby the venues. A user can save events to view later. There are also outside links that allow the user to buy tickets for the event and also see more details about breweries near the venue.</p>
          <div className="image-cont">
            <div className="screen-shots">
              <h2>Landing Page</h2>
              <img className="screen-shots" src={brewBeat1}/>
            </div>
            <div className="screen-shots">
              <h2>Browse Breweries</h2>
              <img className="screen-shots" src={brewBeat2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;