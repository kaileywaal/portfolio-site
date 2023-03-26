import { Box, Typography, Container } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function Skill({ icon, label }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        minWidth: "80px",
        height: "90px",
        justifyContent: "center",
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto",
      }}
    >
      <Container sx={{ p: "15px" }}>{icon}</Container>
      <Typography variant="caption" sx={{ px: "12px" }}>
        {label}
      </Typography>
    </Box>
  );
}
