import React from "react";
import Project from "./Project";
import { Grid } from "@mui/material";
import { projectsList } from "../../data/projects";

export default function Projects() {
  return (
    <Grid container spacing={3} sx={{ px: { xs: 3, md: 6 } }}>
      {projectsList.map((project, index) => {
        return (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={index}>
            <Project
              title={project.title}
              languages={project.languages}
              links={project.links}
              description={project.description}
              image={project.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
