import React from "react";
import Navbar from "../../components/navbar/Navbar";

import { Box, TextField, Typography, Button, styled } from "@mui/material";
import Cards from "../../components/mainCards/Cards";
import Footer from "../../components/footer/Footer";

const HoverButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontFamily: "roboto, sans-serif",
  position: "relative",
  transition: "color 0.4s ease, transform 0.4s ease",
  "&:hover": {
    color: "black",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: "100%",
      backgroundColor: "white",
      transform: "scaleX(1)",
      transition: "transform 1s ease",
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: "2px",
    backgroundColor: "white",
    width: "100%",
    transform: "scaleX(0)",
    transition: "transform 2s ease",
  },
}));

// Separate style for the Contact Now button
const ContactButton = styled(HoverButton)({
  background:
    "linear-gradient(109.6deg, rgb(0, 49, 165) 11.2% , rgb(193, 98, 253)91.1%)",
  padding: "8px",
  color: "white",
  alignItems: "right",
  fontFamily: "roboto, sans-serif",
  "&:hover": {
    backgroundColor: "#009CFF",
    color: "white",
  },
});
const ContactUs = () => {
  return (
    <>
      <Box>
        <Box
          style={{
            fontFamily: "roboto, sans-serif",
            marginTop: "10%",
            marginLeft: "15%",
            textAlign: "left",
          }}
        >
          <Typography
          variant="h3"
            style={{
            fontFamily: "roboto, sans-serif",

             
              backgroundClip: "text", // Standard property for cross-browser
              display: "inline-block", // Sometimes necessary to show gradient properly
            }}
          >
            Connect With Us
          </Typography>
          <p
            style={{
              fontFamily: "roboto, sans-serif",
              fontWeight: "350",
            }}
          >
            Ready to get started or need help? Let’s talk.
          </p>
        </Box>
        <Box
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5%",
            borderRadius: "10px",
            height: "auto",
          }}
        >
          {/* Left side: Input Fields */}
          <Box
            style={{
              width: "55%",
              borderRight: "1px solid",
              borderColor: "orange",
            }}
          >
            <TextField
              label="Full Name"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              required
              type="email"
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              required
              type="tel"
            />
            <TextField
              label="Your Query"
              variant="outlined"
              style={{ width: "80%" }}
              margin="normal"
              required
              multiline
              rows={4}
            />

            <ContactButton
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
                width: "80%",
                backgroundColor: "rgb(72, 113, 247)",
                padding: "10px",
                fontFamily: "roboto, sans-serif",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#009CFF",
                  color: "white",
                },
              }}
            >
              Submit
            </ContactButton>
          </Box>

          {/* Right side: Contact Information */}
          <Box
            style={{
              width: "30%",
            }}
          >
            <Typography
              variant="h5"
              style={{ fontFamily: "roboto, sans-serif", fontWeight: "bold" }}
            >
              Contact Information
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "20px", fontFamily: "roboto, sans-serif" }}
            >
              <strong>Address:</strong> Bahria Town Lahore
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
            >
              <strong>Email:</strong> scsolutions@gmail.com
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
            >
              <strong>Phone:</strong> +92-3111407968
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
            >
              <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
            </Typography>
          </Box>
        </Box>
      </Box>

      <br />
      <Footer />
    </>
  );
};
export default ContactUs;
