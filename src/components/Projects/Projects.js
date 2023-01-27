import React, { useState, useEffect } from 'react';
import projectsData from '../../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((project, index) => (
            <div className="row d-flex justify-content-center" key={index}>
              <div className="col-md-6 col-8">
                <div className="project-wrapper__text load-hidden">
                  <h3 className="project-wrapper__text-title">{project.title}</h3>
                  <div className="project-wrapper__text-description">
                    <p className="mb-4">{project.description}</p>
                  </div>
                  {project.linkTitle &&
                    <a
                      rel="noreferrer"
                      target="_blank"
                      aria-label="Read more about the application"
                      title={`Link to ${project.linkTitle}`}
                      className="cta-btn cta-btn--orange-fill"
                      href={project.link}
                    >
                      {project.linkTitle}
                    </a>
                  }
                </div>
              </div>
              <div className="col-md-2 col-12">
                <div className="project-wrapper__image">
                  <i className={`fas fa-${project.icon}`}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;