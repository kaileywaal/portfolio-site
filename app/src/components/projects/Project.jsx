import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LaptopIcon from "@mui/icons-material/Laptop";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Project({
  title,
  description,
  links,
  languages,
  image,
}) {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        backgroundColor: theme.palette.primary.light,
        borderRadius: "20px",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: { xs: 6, xl: 2 },
          px: { xs: 4, xl: 3 },
          spacing: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={6}
          sx={{
            height: { xs: "200px", md: "200px", lg: "250px" },
            textAlign: "center",
            pb: { xs: 2, md: 0 },
          }}
        >
          {image}
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} xl={6}>
          <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
            {languages.map((language) => (
              <Chip
                sx={{ mr: 0.75, my: 0.5 }}
                label={language}
                variant="contained"
                size="small"
              />
            ))}
          </Stack>
          <Typography variant="h5" sx={{ py: 1 }}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {links.map((link) => {
              return (
                <Button
                  href={link.link}
                  variant={
                    link.label === "view code" ? "outlined" : "contained"
                  }
                  size="small"
                  target="_blank"
                  sx={{ mt: 2, mr: 1 }}
                >
                  {link.label === "view demo" && (
                    <OndemandVideoIcon sx={{ pr: 1 }} />
                  )}
                  {link.label === "view site" && <LaptopIcon sx={{ pr: 1 }} />}
                  {link.label === "view code" && <GitHubIcon sx={{ pr: 1 }} />}
                  {link.label}
                </Button>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
