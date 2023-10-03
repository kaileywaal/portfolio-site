import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import EmailIcon from "@mui/icons-material/Email";
import "./hero.css";

export default function Hero() {
  const theme = useTheme();

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
        speed: 2,
        straight: false,
      },
      number: {
        value: 14,
      },
      rotate: {
        animation: {
          enable: true,
          speed: { min: 1, max: 8 },
        },
      },
      reduceDuplicates: true,
      shape: {
        type: "images",
        image: [
          {
            src: require("./shapes/shape4-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape12-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/flower5-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape11-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape10-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape1-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape3-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape9-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
          {
            src: require("./shapes/shape6-svgrepo-com.png"),
            height: 20,
            width: 20,
          },
        ],
      },
      size: {
        value: { min: 10, max: 20 },
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
        sx={{ mt: 2, maxWidth: "190px" }}
        onClick={() => (window.location = "mailto:kaileynwaal@gmail.com")}
      >
        <EmailIcon sx={{ pr: 1 }} />
        Contact Me
      </Button>
    </>
  );

  // const HeadshotImage = () => (
  //   <img
  //     src={require("../../assets/me.png")}
  //     alt="professional headshot of Kailey Waal"
  //     width="100%"
  //     style={{ maxWidth: "450px", zIndex: 1 }}
  //   />
  // );

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
          height: { xs: "80vh", md: "90vh" },
          width: "100%",
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
            maxWidth: "1100px",
          }}
        >
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
          <Grid
            item
            sm={6}
            md={6}
            lg={6}
            xl={6}
            sx={{
              px: "10vw",
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
}
