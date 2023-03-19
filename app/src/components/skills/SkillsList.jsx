import React from "react";
import Skill from "./Skill";
import { Box, Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ReactIcon from "../../assets/icons/ReactIcon";
import HtmlIcon from "../../assets/icons/HtmlIcon";
import JavaScriptIcon from "../../assets/icons/JavaScriptIcon";
import CssIcon from "../../assets/icons/CssIcon";
import GitIcon from "../../assets/icons/GitIcon";
import TypeScriptIcon from "../../assets/icons/TypeScriptIcon";
import MaterialUiIcon from "../../assets/icons/MaterialUiIcon";
import VueIcon from "../../assets/icons/VueIcon";

export default function SkillsList() {
  const theme = useTheme();

  const skills = [
    { icon: <ReactIcon />, label: "React" },
    { icon: <TypeScriptIcon />, label: "TypeScript" },
    { icon: <HtmlIcon />, label: "HTML" },
    { icon: <CssIcon />, label: "CSS" },
    { icon: <JavaScriptIcon />, label: "JavaScript" },
    { icon: <VueIcon />, label: "Vue.js" },
    { icon: <MaterialUiIcon />, label: "Material UI (MUI)" },
    { icon: <GitIcon />, label: "Git Version Control" },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.light, p: 10 }}>
      <Container>
        <Typography variant="h2">Languages, Frameworks, and Tools</Typography>
        <Box
          sx={{
            pt: 4,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {skills.map((skill) => {
            return <Skill icon={skill.icon} label={skill.label} />;
          })}
        </Box>
      </Container>
    </Box>
  );
}
