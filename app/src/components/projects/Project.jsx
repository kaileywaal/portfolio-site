import {
  Container,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/system";
import "../../assets/ffec-screen-recording.gif";

export default function Project({
  title,
  description,
  links,
  languages,
  image,
}) {
  const theme = useTheme();

  return (
    <Box
      sx={{ backgroundColor: theme.palette.secondary.light, height: "600px" }}
    >
      <Container>
        <Grid
          container
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
        >
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            sx={{
              height: "400px",
              width: "50%",
              textAlign: "center",
            }}
          >
            {image}
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8} sx={{ pr: 2 }}>
            <Typography variant="h2" sx={{ pb: 0.3 }}>
              {title}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            <Stack direction="row" spacing={1} sx={{ pt: 3 }}>
              {languages.map((language) => (
                <Chip label={language} variant="contained" size="small" />
              ))}
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {links.map((link) => {
                console.log(link);
                return (
                  <Button
                    href={link.link}
                    variant="contained"
                    target="_blank"
                    sx={{ mt: 2, mr: 1 }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
