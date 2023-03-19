import Hero from "./components/hero/Hero";
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
      accentMain: "#b6a030",
      accentMedium: "#e2b1ad",
      accentLight: "#d3dbde",
      accentDark: "#c76333",
      main: "#574d1f",
      secondary: "#f0dabc",
    },
  },
});

let theme = createTheme(colorTheme, {
  typography: {
    fontFamily: ["'Poppins'", "Montserrat", "sans-serif"].join(","),
    h1: {
      color: colorTheme.palette.primary.main,
      fontSize: "4.8rem",
      fontWeight: "800",
    },
    h2: {
      color: colorTheme.palette.primary.main,
      fontSize: "2.2rem",
    },
    h4: {
      color: colorTheme.palette.primary.main,
      fontWeight: "300",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero></Hero>;
    </ThemeProvider>
  );
}

export default App;
