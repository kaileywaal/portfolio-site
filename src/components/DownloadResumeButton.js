import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

export default function DownloadResumeButton() {
  return (
    <Button
      sx={{ my: 2 }}
      component="a"
      variant="outlined"
      href="https://drive.google.com/file/d/1nkY43O0smEgHwg9kqfhi5U_z2KQi5iDD/view?usp=sharing"
      target="_blank"
    >
      <DescriptionIcon sx={{ pr: 1 }} />
      Download Resume
    </Button>
  );
}
