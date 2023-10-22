import React from "react";
import "./About.css"
import profile from "../../images/profile_pic.jpeg"
import BarChart from "../BarChart/BarChart";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="title">ABOUT</h1>
      <div className="about">
        <img src={profile}/>
        <div className="about-me">
          <p>HELLO!  MY NAME IS NATALIE KINSAUL AND I AM A SEATTLE BASED WEB DEVELOPER.
          </p>
          <p>I BUILD ELEGANT WEBSITES THAT INTUITIVELY SERVE THE NEEDS OF THE USER.</p>
          <p>WITH OVER A DECADE EXPERIENCE IN CREATIVE FIELDS, I BRING A KEEN EYE FOR DESIGN AND ABILITY TO WORK WELL UNDER PRESSURE.</p>
        </div>
      </div>
      <div className="bar-chart">
        <h2>SKILLS</h2>
        <div className="chart">
          <BarChart />
        </div>
      </div>
    </div>
  )
}

export default About;