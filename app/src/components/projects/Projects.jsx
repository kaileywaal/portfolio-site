import React from "react";
import Project from "./Project";
import { projectsList } from "../../data/projects";

export default function Projects() {
  return (
    <>
      {projectsList.map((project) => {
        return (
          <Project
            title={project.title}
            languages={project.languages}
            links={project.links}
            description={project.description}
            image={project.image}
          />
        );
      })}
    </>
  );
}
