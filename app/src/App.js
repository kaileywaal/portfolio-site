import Hero from "./components/hero/Hero";
import SkillsList from "./components/skills/SkillsList";
import "./normalize.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

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
      fontSize: "5.4rem",
      fontWeight: "800",
    },
    h2: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2.4rem",
    },
    h3: {
      color: colorTheme.palette.primary.dark,
      fontSize: "2rem",
      fontWeigth: "200",
    },
    h4: {
      color: colorTheme.palette.primary.dark,
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
          marginTop: "1rem",
          color: colorTheme.palette.primary.light,
          padding: "6px 12px",
          fontSize: "1rem",
          fontFamily: "Montserrat",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero></Hero>
      <SkillsList />
    </ThemeProvider>
  );
}

export default App;
