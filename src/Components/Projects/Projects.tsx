import React from "react";
import projects from "../../projects/projects.json"
import './Projects.css'

const Projects = () => {

  const myProjects = (projects: {name: string, description: string, technologies: string, link?: string, repo: string, image: string}[]) => {
    return projects.map((project, index) => {
      return (
        <div key={index} className="project index">
          <div className="project-inner">
            <div className="project-front">
              <img src={project.image} alt={project.name}/>
            </div>
            <div className="project-back">
              <h2>{project.name.toUpperCase()}</h2>
              <p>{project.description.toUpperCase()}</p>
              <p>{project.technologies.toUpperCase()}</p>
              <div className="links">
                {project.link && <a href={project.link}>DEMO</a>}
                <a href={project.repo}>REPO</a>
              </div>
            </div>
          </div>
        </div>
      )}
    )
  }

  return (
    <div className="projects-main">
      <h1 className="title">PROJECTS</h1>
      <div className="projects-container">
        {myProjects(projects.projects)}
      </div>
    </div>
  )
}

export default Projects