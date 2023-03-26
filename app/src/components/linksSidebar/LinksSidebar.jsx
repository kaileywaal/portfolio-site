import React from "react";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography, useTheme } from "@mui/material";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export default function LinksSidebar() {
  const theme = useTheme();

  const MenuLink = ({ link, label, children }) => {
    return (
      <Link
        href={link}
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": { backgroundColor: "red" },
        }}
      >
        <Box
          sx={{
            color: theme.palette.primary.light,
            pl: 2,
            pr: 0.5,
            py: 1.5,
          }}
        >
          {children}
        </Box>
        <Typography
          sx={{
            color: theme.palette.primary.light,
            textTransform: "uppercase",
            fontSize: "14px",
          }}
        >
          {label}
        </Typography>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        position: "fixed",
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
      {/* <MenuLink link="#" label="Home">
        <HomeIcon fontSize="small" />
      </MenuLink>
      <MenuLink link="#" label="About">
        <PersonIcon fontSize="small" />
      </MenuLink>
      <MenuLink link="#" label="Projects">
        <CodeIcon fontSize="small" />
      </MenuLink>
      <MenuLink link="#" label="Contact">
        <ContactPageIcon fontSize="small" />
      </MenuLink> */}

      <Link href="https://linkedin.com/in/kailey-waal" target="_blank">
        <LinkedInIcon
          sx={{
            color: theme.palette.primary.main,
            px: 2,
            py: 1.5,
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
            "&:hover": { color: theme.palette.primary.dark },
          }}
        />
      </Link>
    </Box>
  );
}
