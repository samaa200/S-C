import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material"; // Import MUI components
import FacebookIcon from '@mui/icons-material/Facebook'; // Import Facebook icon
import TwitterIcon from '@mui/icons-material/Twitter'; // Import Twitter icon
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedIn icon
import InstagramIcon from '@mui/icons-material/Instagram'; // Import Instagram icon
import "./navbar.css"
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#102b85", // Darker background color for contrast
        color: "white",
        padding: "40px 20px", // Add more padding for a spacious feel
        display: "flex",
        flexDirection: "column", // Stack content vertically
        alignItems: "center",
        height:'100vh'
      }}
    >
      <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
        Your Company Name
      </Typography>
      <Divider sx={{ backgroundColor: 'white', width: '80%', margin: '10px 0' }} /> {/* Divider line */}
      
      <Typography variant="body2" style={{ fontFamily: 'Poppins, sans-serif', marginBottom: '20px', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>

      <Box>
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Hover effect
            margin: "0 10px", // Spacing between icons
            borderRadius: '50%',
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Hover effect
            margin: "0 10px",
            borderRadius: '50%',
          }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Hover effect
            margin: "0 10px",
            borderRadius: '50%',
          }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            "&:hover": { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Hover effect
            margin: "0 10px",
            borderRadius: '50%',
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
