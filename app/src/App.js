import Hero from "./components/hero/Hero";
import SkillsList from "./components/skills/SkillsList";
import "./normalize.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import LinksSidebar from "./components/linksSidebar/LinksSidebar";
import { Box } from "@mui/material";

let colorTheme = createTheme({
  palette: {
    primary: {
      light: "#FAF9FF",
      main: "#199BD3",
      dark: "#201E3A",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#F8476F",
      dark: "#392F5A",
    },
  },
});

let theme = createTheme(colorTheme, {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h1: {
      color: colorTheme.palette.primary.dark,
      fontSize: "4.8rem",
      fontWeight: "800",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h2: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2rem",
      fontWeight: "300",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h3: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2rem",
      fontWeight: "400",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h4: {
      color: colorTheme.palette.primary.main,
      fontSize: "1.6rem",
      fontWeight: "500",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h5: {
      color: colorTheme.palette.primary.main,
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: "1.4rem",
    },
    h6: {
      color: colorTheme.palette.secondary.dark,
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    body1: {
      color: colorTheme.palette.primary.dark,
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    caption: {
      color: colorTheme.palette.primary.dark,
      fontSize: "1rem",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          padding: "8px 1.4rem",
          fontSize: "0.8rem",
          fontFamily: ["Poppins", "sans-serif"].join(","),
          transition: "0.4s",
        },
        contained: {
          color: colorTheme.palette.primary.light,
        },
        outlined: {
          border: "2px solid",
          "&:hover": {
            border: "2px solid",
            backgroundColor: colorTheme.palette.primary.main,
            color: colorTheme.palette.secondary.light,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: colorTheme.palette.primary.dark,
          border: `1px solid ${colorTheme.palette.primary.dark}`,
        },
        contained: {
          backgroundColor: "hsla(346, 93%, 63%, 0.1)",
          color: colorTheme.palette.secondary.main,
          border: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LinksSidebar />
      <Hero />
      <Box sx={{ px: { xs: 0, sm: 4 } }}>
        <About />
        <SkillsList />
        <Projects />
      </Box>
    </ThemeProvider>
  );
}

export default App;
