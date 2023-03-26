import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  TextField,
  Typography,
  useTheme,
  Grid,
  Button,
  Container,
  Alert,
  Tooltip,
} from "@mui/material";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import DownloadResumeButton from "../DownloadResumeButton";

export default function Contact() {
  const SERVICE_ID = "portfolio_contact_form";
  const TEMPLATE_ID = "default_template";
  const PUBLIC_KEY = "b_QbScOg-rMZAiIb3";

  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [displaySubmissionMessage, setDisplaySubmissionMessage] =
    useState(false);
  const [verifyForm, setVerifyForm] = useState(false);

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

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          setResponse(result.text);
          clearForm();
        },
        (error) => {
          setResponse(error.text);
        }
      )
      .then(setDisplaySubmissionMessage(true));
  };

  const clearForm = () => {
    setEmail("");
    setMessage("");
    setName("");
  };

  const checkVerify = () => {
    const messageIsValid = message !== "";
    const nameIsValid = name !== "";
    const emailIsValid = checkIsValidEmail();

    setVerifyForm(messageIsValid && nameIsValid && emailIsValid);
  };

  const checkIsValidEmail = () => {
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
    const emailIsValid = email !== "" && emailRegex.test(email);
    return emailIsValid;
  };

  useEffect(() => {
    checkVerify();
  }, [message, email, name]);

  const SubmitMessage = () => {
    return response === "OK" ? (
      <Alert severity="success" sx={{ mb: 1 }}>
        <Typography>
          Woo! I can't wait to read your message — I'll get back to you ASAP.
        </Typography>
      </Alert>
    ) : (
      <Alert severity="error" sx={{ mb: 1 }}>
        <Typography>
          {`Uh oh. Something went wrong — sorry about that! You can send me an email `}
          <Link href="mailto: kaileynwaal@gmail.com">here</Link>
          {` instead`}
        </Typography>
      </Alert>
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
          <DownloadResumeButton />
        </Grid>
        <Grid component="form" item xs={12} md={8}>
          {displaySubmissionMessage && response && <SubmitMessage />}
          <TextField
            sx={{ my: 1 }}
            required
            label="Name"
            type="text"
            fullWidth
            onChange={handleChangeName}
            value={name}
          />
          <TextField
            sx={{ my: 1 }}
            required
            label="Email"
            type={"email"}
            value={email}
            fullWidth
            onChange={handleChangeEmail}
          />
          <TextField
            sx={{ my: 1 }}
            required
            label="Message"
            type="text"
            value={message}
            multiline
            rows={5}
            fullWidth
            onChange={handleChangeMessage}
          />
          <Tooltip
            sx={{ pt: 2 }}
            placement="top"
            title={
              !checkIsValidEmail() && email !== ""
                ? "Please enter a valid email address."
                : !verifyForm && "Please fill out the required fields."
            }
          >
            <span>
              <Button
                variant="contained"
                disabled={!verifyForm}
                sx={{ maxWidth: "200px", mt: 2 }}
                onClick={handleSendMessage}
              >
                <SendIcon sx={{ pr: 1 }} />
                Send Message
              </Button>
            </span>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
}
