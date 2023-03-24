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
          py: 6,
          px: 4,
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          lg={5}
          xl={6}
          sx={{
            height: "150px",
            width: "50%",
            textAlign: "center",
          }}
        >
          {image}
        </Grid>

        <Grid item xs={12} sm={7} md={7} lg={7} xl={6}>
          <Stack direction="row" sx={{ display: "flex", flexWrap: "wrap" }}>
            {languages.map((language) => (
              <Chip
                sx={{ mr: 1, my: { xs: 0.75, md: 1 } }}
                label={language}
                variant="contained"
                size="small"
              />
            ))}
          </Stack>
          <Typography variant="h5" sx={{ pb: 0.3 }}>
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
    </Paper>
  );
}
