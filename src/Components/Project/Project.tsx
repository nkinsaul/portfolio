import React from "react";
import './Project.css'

const Project = (name: string, description: string, technologies: string) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{technologies}</p>
    </div>
  )

}


export default Project;