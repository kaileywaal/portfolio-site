import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  return (
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
          <Typography variant="h4">Hello!</Typography>
          <Typography variant="h1">I'm Kailey</Typography>
          <Typography variant="h2">Frontend Engineer</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          sx={{
            px: "5vw",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <img
            src={require("../../assets/me.png")}
            alt="professional headshot of Kailey Waal"
            width="100%"
            style={{ maxWidth: "450px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
