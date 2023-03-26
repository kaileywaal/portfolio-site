import React from "react";
import Project from "./Project";
import { Grid, Box, Typography, Container } from "@mui/material";
import { projectsList } from "../../data/projects";

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 3, md: 6 }, mb: 3 }}>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        {projectsList.map((project, index) => {
          return (
            <Box key={index} sx={{ maxWidth: "1200px", mb: 4 }}>
              <Project
                title={project.title}
                languages={project.languages}
                links={project.links}
                description={project.description}
                image={project.image}
              />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
