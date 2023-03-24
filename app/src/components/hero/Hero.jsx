import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./hero.css";

export default function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 120,
    particles: {
      color: {
        value: [
          theme.palette.secondary.main,
          theme.palette.primary.main,
          theme.palette.secondary.dark,
        ],
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 14,
      },
      shape: {
        type: "images",
        image: [
          {
            src: require("./shapes/shape4-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          { src: require("./shapes/shape-2.svg"), height: 20, width: 20 },
        ],
      },
      size: {
        value: 10,
      },
    },
    detectRetina: true,
  };

  const IntroText = () => (
    <>
      <Typography variant="h4" sx={{ zIndex: 1 }}>
        Hello!
      </Typography>
      <Typography variant="h1" sx={{ zIndex: 1 }}>
        I'm Kailey
      </Typography>
      <Typography variant="h2" sx={{ zIndex: 1 }}>
        Frontend Engineer
      </Typography>
      <Button
        variant="contained"
        sx={{ maxWidth: "200px", mt: 2 }}
        onClick={() => (window.location = "mailto:kaileynwaal@gmail.com")}
      >
        Contact Me
      </Button>
    </>
  );

  const HeadshotImage = () => (
    <img
      src={require("../../assets/me.png")}
      alt="professional headshot of Kailey Waal"
      width="100%"
      style={{ maxWidth: "450px", zIndex: 1 }}
    />
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "80vh",
          width: "100vw",
          backgroundColor: theme.palette.primary.light,
          m: 0,
          p: 0,
          maxWidth: "100vw",
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "center",
            maxWidth: "1000px",
          }}
        >
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pl: "5vw",
              }}
            >
              <IntroText />
            </Grid>
            {!isVerySmallScreen ? (
              <Grid
                item
                sm={6}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  px: "10vw",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                <HeadshotImage />
              </Grid>
            ) : (
              ""
            )}
          </>
        </Grid>
      </Box>
    </>
  );
}
