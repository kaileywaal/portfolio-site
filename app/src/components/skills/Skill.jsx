import { Card, Typography, Container } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

export default function Skill({ icon, label }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "20%",
        minWidth: "100px",
        height: "160px",
        borderRadius: "20px",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.light,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: "auto",
      }}
    >
      <Container sx={{ p: "15px" }}>{icon}</Container>
      <Typography variant="caption" sx={{ px: "12px" }}>
        {label}
      </Typography>
    </Card>
  );
}
