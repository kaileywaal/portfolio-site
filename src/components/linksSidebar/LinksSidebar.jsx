import React from "react";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function LinksSidebar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: { xs: "absolute", md: "fixed" },
        top: { xs: 0, sm: "50%" },
        transform: { xs: "none", sm: "translateY(-50%)" },
        right: 0,
        color: theme.palette.primary.main,
        zIndex: 3,
        p: 1.5,
        py: { xs: 0, sm: 1.5 },
        px: { xs: 1.5, sm: 0 },
        display: "flex",
        flexDirection: { xs: "row", sm: "column" },
      }}
    >
      <Link href="https://linkedin.com/in/kailey-waal" target="_blank">
        <LinkedInIcon
          sx={{
            color: theme.palette.primary.main,
            px: 2,
            py: 1.5,
            transition: "0.4s",
            "&:hover": { color: theme.palette.primary.dark },
          }}
        />
      </Link>
      <Link href="https://github.com/kaileywaal" target="_blank">
        <GitHubIcon
          sx={{
            color: theme.palette.primary.main,
            px: 2,
            py: 1.5,
            transition: "0.4s",
            "&:hover": { color: theme.palette.primary.dark },
          }}
        />
      </Link>
      <Link href="mailto: kaileynwaal@gmail.com" target="_blank">
        <EmailIcon
          sx={{
            color: theme.palette.primary.main,
            px: 2,
            py: 1.5,
            transition: "0.4s",
            "&:hover": { color: theme.palette.primary.dark },
          }}
        />
      </Link>
    </Box>
  );
}
