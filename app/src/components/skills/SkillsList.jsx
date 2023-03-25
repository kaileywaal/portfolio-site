import React from "react";
import Skill from "./Skill";
import { Box, Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import ReactIcon from "../../assets/skillIcons/ReactIcon";
import HtmlIcon from "../../assets/skillIcons/HtmlIcon";
import JavaScriptIcon from "../../assets/skillIcons/JavaScriptIcon";
import CssIcon from "../../assets/skillIcons/CssIcon";
import GitIcon from "../../assets/skillIcons/GitIcon";
import TypeScriptIcon from "../../assets/skillIcons/TypeScriptIcon";
import MaterialUiIcon from "../../assets/skillIcons/MaterialUiIcon";
import VueIcon from "../../assets/skillIcons/VueIcon";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function SkillsList() {
  const theme = useTheme();

  const skills = [
    { icon: <ReactIcon />, label: "React" },
    { icon: <TypeScriptIcon />, label: "TypeScript" },
    { icon: <HtmlIcon />, label: "HTML" },
    { icon: <CssIcon />, label: "CSS" },
    { icon: <JavaScriptIcon />, label: "JavaScript" },
    { icon: <VueIcon />, label: "Vue" },
    { icon: <MaterialUiIcon />, label: "Material UI" },
    { icon: <GitIcon />, label: "Git" },
  ];

  const items = skills.map((skill) => {
    return <Skill icon={skill.icon} label={skill.label} />;
  });

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.light, py: 8 }}>
      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={100}
        animationDuration={2000}
        touchTracking={true}
        disableDotsControls
        disableButtonsControls
        items={items}
        autoplayInterval={0}
        transitionTimingFunction="ease-in-and-out"
        responsive={{
          0: {
            items: 3,
          },
          600: {
            items: 5,
          },
          800: {
            items: 7,
          },
          1024: {
            items: 8,
            itemsFit: "contain",
          },
        }}
      />
    </Box>
  );
}
