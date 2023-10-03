import React from "react";
import './Landing.css'
import SideBar from "../SideBar/SideBar";
import listenUp1 from "../../images/lu_ss_1.svg"
import listenUp2 from "../../images/lu_ss_2.svg"
import listenUp3 from "../../images/lu_ss_3.svg"
import listenUp4 from "../../images/lu_ss_4.svg"
import brewBeat1 from '../../images/bb_ss_1.svg'
import brewBeat2 from '../../images/bb_ss_2.svg'
import tech from '../../images/tech_3-09.svg'
import brewBeatTech from '../../images/bb_tech.svg'

const Landing = () => {

 

  return (
    <div className="landing">
      <SideBar />
      <div className="main-content">
        <div className="proj-cont">
          <h1 id="listen-up">Listen Up!</h1>
          <div className="links">
            <a href="https://listenup-game.herokuapp.com/">Deployed Link</a>
            <a href="https://github.com/Listen-Up-2210/listen-up-ui">GitHub</a>
          </div>
          <p><strong>ListenUp!</strong> is a <strong>web application</strong> in which users are given a random <strong>sound</strong> and have to guess what it is. This game was developed to help improve users listening skills through fun and interesting sounds.  For my part on this project, I focused on <strong>game play</strong> and <strong>animations</strong>.</p>
          <p>This app was a collaboration with 7 other devlopers: Matt Rowan, Angie Wirth, Bob Aiken, Ryan Canton, Samuel Cox, Joe King, and Zac Walters.  It was built using <strong>React</strong>, <strong>Ruby on Rails</strong>,  <strong> GraphQL</strong>, and <strong>Cypress</strong> for E2E testing.</p>
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
          <div className="tech">
            <h2>Technologies</h2>
            <img src={tech}/>
          </div>
        </div>
        <div className="proj-cont">
          <h1>Brew Beats</h1>
          <p><strong>Brew Beats</strong> is a <strong>web application</strong> that allows users to view <strong>music events</strong> in the Seattle area and see <strong>breweries</strong> that are <strong>nearby</strong> the venues. A user can save events to view later. There are also links that allow the user to buy tickets for the event and see more details about the breweries.</p>
          <p>This was a <strong>solo project</strong> built with <strong>React, </strong></p>
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
          <div className="tech">
              <h2>Technologies</h2>
              <img src={brewBeatTech}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;