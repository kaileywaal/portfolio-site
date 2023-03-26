import React, { useState } from "react";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  TextField,
  Typography,
  useTheme,
  Grid,
  Button,
  Container,
} from "@mui/material";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const SERVICE_ID = "portfolio_contact_form";
  const TEMPLATE_ID = "default_template";
  const PUBLIC_KEY = "b_QbScOg-rMZAiIb3";

  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);

  const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const templateParams = {
      from_name: name,
      message: message,
      from_email: email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (result) => {
        setResponse(result.text);
      },
      (error) => {
        setResponse(error.text);
      }
    );
  };

  const SocialLink = ({ link, children }) => {
    return (
      <Link
        href={link}
        target="_blank"
        sx={{
          transition: "0.4s",
          pr: 2,
          "&:hover": { color: theme.palette.primary.dark },
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <Container>
      <Grid container sx={{ p: { xs: 4, md: 8 }, maxWidth: "1200px" }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{ pb: 4 }}>
            Contact Me
          </Typography>
          <Box>
            <SocialLink
              link="https://linkedin.com/in/kailey-waal"
              label="kailey-waal"
            >
              <LinkedInIcon sx={{ width: 30, height: 30 }} />
            </SocialLink>
            <SocialLink link="https://github.com/kaileywaal" label="kaileywaal">
              <GitHubIcon sx={{ width: 30, height: 30 }} />
            </SocialLink>
            <SocialLink
              link="mailto: kaileynwaal@gmail.com"
              label="kaileynwaal@gmail.com"
            >
              <EmailIcon sx={{ width: 30, height: 30 }} />
            </SocialLink>
          </Box>
          <Button
            sx={{ my: 2 }}
            component="a"
            variant="outlined"
            href="../../assets/resume.pdf"
            download
          >
            <DescriptionIcon sx={{ pr: 1 }} />
            Download Resume
          </Button>
        </Grid>
        <Grid component="form" item xs={12} md={8}>
          <TextField
            sx={{ my: 0.5 }}
            required
            label="Name"
            type="text"
            fullWidth
            onChange={handleChangeName}
            value={name}
          />
          <TextField
            sx={{ my: 0.5 }}
            required
            label="Email"
            type="email"
            value={email}
            fullWidth
            onChange={handleChangeEmail}
          />
          <TextField
            sx={{ my: 0.5 }}
            required
            label="Message"
            type="text"
            value={message}
            multiline
            rows={4}
            fullWidth
            onChange={handleChangeMessage}
          />
          <Button
            variant="contained"
            sx={{ maxWidth: "200px", mt: 2 }}
            onClick={handleSendMessage}
          >
            <SendIcon sx={{ pr: 1 }} />
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
