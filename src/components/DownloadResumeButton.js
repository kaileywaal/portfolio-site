import React from "react";
import { Button } from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

export default function DownloadResumeButton() {
  return (
    <Button
      sx={{ my: 2 }}
      component="a"
      variant="outlined"
      href="https://drive.google.com/file/d/17vfUyI5fwXoHRE-EAoPcCR5lRPfIt8bO/view?usp=drive_link"
      target="_blank"
    >
      <DescriptionIcon sx={{ pr: 1 }} />
      Download Resume
    </Button>
  );
}
