import { Typography, Container, Tooltip, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MaterialUiIcon from "../../../assets/skillIcons/MaterialUiIcon";
import ReactIcon from "../../../assets/skillIcons/ReactIcon";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.light }}>
      <Container
        sx={{
          display: "flex",
          py: 3,
          maxWidth: "1200px",
        }}
      >
        <Typography>
          © Kailey Waal 2023. Built with
          <Tooltip title="React">
            <Box sx={{ display: "inline-flex", px: 0.5, alignContent: "end" }}>
              <ReactIcon size="16px" />
            </Box>
          </Tooltip>
          and
          <Tooltip title="Material UI">
            <Box
              sx={{ display: "inline-flex", px: 0.5, justifyContent: "end" }}
            >
              <MaterialUiIcon size="16px" />
            </Box>
          </Tooltip>
          .
        </Typography>
      </Container>
    </Box>
  );
}
