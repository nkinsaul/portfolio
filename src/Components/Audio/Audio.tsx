import React from "react";
import projects from "../../projects/projects.json"

const Audio = () => {

  const myProjects = (projects: {name: string, description: string, technologies: string}[]) => {
    return projects.map((project, index) =>  (
        <div key={index}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p>{project.technologies}</p>
        </div>
      )
    )
  }

  return (
    <div>
      <h1>Projects</h1>
      <div>
        {myProjects(projects.projects)}
      </div>
        
    </div>
  )
}

export default Audio