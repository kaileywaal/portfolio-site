import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "@mui/material";

export default function Hero() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const IntroText = () => (
    <>
      <Typography variant="h4">Hello!</Typography>
      <Typography variant="h1">I'm Kailey</Typography>
      <Typography variant="h2">Frontend Engineer</Typography>
      <Button
        variant="contained"
        sx={{ maxWidth: isSmallScreen ? "80%" : "50%", mt: 2 }}
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
      style={{ maxWidth: "450px" }}
    />
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: isVerySmallScreen ? "40vh" : isSmallScreen ? "60vh" : "80vh",
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
              xs={6}
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
              xs={6}
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
          </>
        </Grid>
      </Box>
    </>
  );
}
