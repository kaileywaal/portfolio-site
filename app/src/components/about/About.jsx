import { Typography, Container, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QuoteIcon from "../../assets/QuoteIcon";
import DownloadResumeButton from "../DownloadResumeButton";

export default function About() {
  const theme = useTheme();

  return (
    <Container sx={{ pt: 6 }}>
      <Grid container sx={{ px: 2 }}>
        <Grid
          item
          spacing={2}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              pl: { xs: 4, sm: 6 },
              pb: 2,
              borderLeft: `4px solid ${theme.palette.primary.main}`,
            }}
          >
            <Box sx={{ pb: { xs: 1, sm: 2 } }}>
              <QuoteIcon size={50} color={theme.palette.primary.main} />
            </Box>
            <Typography variant="h6" sx={{ pb: 2 }}>
              "So what did you go to college for?"
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
              "I got a degree in Intercultural Studies"
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
              "Oh cool, so what do you do now?"
            </Typography>
            <Typography variant="h6" sx={{ pb: 2 }}>
              "... I'm a Frontend Engineer."
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{ mt: { xs: 4, md: 0 } }}
        >
          <Typography variant="h3" sx={{ pb: 2 }}>
            A bit about me
          </Typography>
          <Typography sx={{ pb: 2 }}>
            Admittedly, my journey into software engineering was anything but
            conventional.
          </Typography>
          <Typography sx={{ pb: 2 }}>
            When someone first suggested I might like it, I scoffed at the idea.
            "Software engineers are just weird dudes who sit alone in their
            basement and never go outside to see the sunshine. I like people!"
          </Typography>
          <Typography sx={{ pb: 2 }}>
            ...but then in February of 2020 I wrote and styled my first "Hello
            World" on freeCodeCamp and I though "huh, that's actually kinda
            fun".
          </Typography>
          <Typography sx={{ pb: 2 }}>
            ...and a few weeks later I wrote my first JavaScript function and
            thought "huh, that's actually REALLY fun."
          </Typography>
          <Typography sx={{ pb: 2 }}>
            Fastforwrd to today and everyday I get to write code for a living.
            And every time the computer translates my code into pixels on the
            screen, I still get excited. Because it is still really, REALLY fun.
          </Typography>
          <DownloadResumeButton />
        </Grid>
      </Grid>
    </Container>
  );
}
