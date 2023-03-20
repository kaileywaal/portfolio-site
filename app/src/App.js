import Hero from "./components/hero/Hero";
import SkillsList from "./components/skills/SkillsList";
import "./normalize.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Projects from "./components/projects/Projects";

let colorTheme = createTheme({
  palette: {
    primary: {
      light: "#f2eae1",
      dark: "#574d1f",
      main: "#b6a030",
      secondary: "#f0dabc",
    },
    secondary: {
      light: "#d3dbde",
      main: "#e2b1ad",
      dark: "#c76333",
    },
  },
});

let theme = createTheme(colorTheme, {
  typography: {
    fontFamily: ["'Poppins'", "Montserrat", "sans-serif"].join(","),
    h1: {
      color: colorTheme.palette.primary.dark,
      fontSize: "4.8rem",
      fontWeight: "800",
    },
    h2: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2rem",
    },
    h3: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2rem",
      fontWeigth: "200",
    },
    h4: {
      color: colorTheme.palette.primary.dark,
      fontSize: "1.6rem",
      fontWeight: "200",
    },
    body1: {
      color: colorTheme.palette.primary.dark,
    },
    caption: {
      color: colorTheme.palette.primary.dark,
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          padding: "8px 1.4rem",
          fontSize: "0.8rem",
          fontFamily: "Montserrat",
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
          color: colorTheme.palette.secondary.light,
          backgroundColor: colorTheme.palette.primary.dark,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <SkillsList />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
