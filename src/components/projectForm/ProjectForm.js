import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 
import { styled } from "@mui/material/styles";


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

const ProjectForm = () =>{
    return(
        <>
         <Box
          style={{
            fontFamily: 'roboto, sans-serif',
            marginTop:'10%',
            marginLeft:'15%',
            textAlign:'left' // Add padding to the container
          }}>
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontFamily: "roboto, sans-serif",
    
            fontWeight:'bold'
          }}
        >
          Let's Discuss Your Project
        </Typography>
        <p
        style={{
            fontFamily: 'roboto, sans-serif',
           fontWeight: "350",
          }}>
        Ready to get started or need help? Let’s talk.
        </p>
    </Box>
    <Box
      style={{
        width: "80%",
        margin: "auto",      
        color:'#484848',
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
    maxWidth: "45%",
  }}
>
  <TextField
    label="Full Name"
    variant="outlined"
    fullWidth
    margin="normal"
    required
    sx={{
      fontFamily: 'roboto, sans-serif',
      "& .MuiInputBase-root": {
        color: " white",
        
         // Change the text color to  #484848
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#484848", // Set the border color to  #484848
        },
        "&:hover fieldset": {
          borderColor: " #484848", // Keep border  #484848 when focused
        },
        "&.Mui-focused fieldset": {
          borderColor: " #484848", // Border remains  #484848 when focused
        },
      },
      "& .MuiInputLabel-root": {
        color: "#484848", // Set label color to  #484848
      },
    }}
  />
  <TextField
    label="Email"
    variant="outlined"
    fullWidth
    margin="normal"
    required
    type="email"
    sx={{
      fontFamily: 'roboto, sans-serif',
      "& .MuiInputBase-root": {
        color: " #484848", 
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: " #484848",
        },
        "&:hover fieldset": {
          borderColor: " #484848",
        },
        "&.Mui-focused fieldset": {
          borderColor: " #484848",
        },
      },
      "& .MuiInputLabel-root": {
        color: " #484848",
      },
    }}
  />
  <TextField
    label="Phone Number"
    variant="outlined"
    fullWidth
    margin="normal"
    required
    type="tel"
    sx={{
      fontFamily: 'roboto, sans-serif',
      "& .MuiInputBase-root": {
        color: " #484848", 
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: " #484848", 
        },
        "&:hover fieldset": {
          borderColor: " #484848", 
        },
        "&.Mui-focused fieldset": {
          borderColor: " #484848", 
        },
      },
      "& .MuiInputLabel-root": {
        color: " #484848", 
      },
    }}
  />
  <TextField
    label="Describe Your Project"
    variant="outlined"
    fullWidth
    margin="normal"
    required
    multiline
    rows={10}
    sx={{
      fontFamily: 'roboto, sans-serif',
      "& .MuiInputBase-root": {
        color: " #484848", 
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: " #484848", 
        },
        "&:hover fieldset": {
          borderColor: " #484848", 
        },
        "&.Mui-focused fieldset": {
          borderColor: " #484848", 
        },
      },
      "& .MuiInputLabel-root": {
        color: " #484848", 
      },
    }}
  />


<ContactButton
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
                width: "100%",
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
    maxWidth: "45%",
  }}
>
<h1
        style={{
          fontWeight: "550",
          fontSize:'45px',
          fontFamily: 'roboto, sans-serif',
        }}>
          What Happens Next?
        </h1>
    
      {/* Adding numbered points with icons */}
      <Typography
        variant="h5"
        style={{
          marginTop: "40px",
          fontFamily: "roboto, sans-serif",
          fontWeight: "bold",
        }}
      >
        Process Overview
      </Typography>

      {/* Step 1 */}
      <Box style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <CheckCircleIcon style={{ color: " #484848", marginRight: "10px" }} />
        <Typography
          variant="body1"
          style={{ fontFamily: "roboto, sans-serif" }}
        >
          An expert contacts you shortly after having analyzed your business
          requirements.
        </Typography>
      </Box>

      {/* Step 2 */}
      <Box style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <CheckCircleIcon style={{ color: " #484848", marginRight: "10px" }} />
        <Typography
          variant="body1"
          style={{ fontFamily: "roboto, sans-serif" }}
        >
          If required, we sign an NDA to ensure the highest privacy level.
        </Typography>
      </Box>

      {/* Step 3 */}
      <Box style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <CheckCircleIcon style={{ color: " #484848", marginRight: "10px" }} />
        <Typography
          variant="body1"
          style={{ fontFamily: "roboto, sans-serif" }}
        >
          A Pre-Sales Manager submits a comprehensive project proposal, including
          estimates, timelines, lists of CVs, etc.
        </Typography>
      </Box>

      {/* Step 4 */}
      <Box style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <CheckCircleIcon style={{ color: " #484848", marginRight: "10px" }} />
        <Typography
          variant="body1"
          style={{ fontFamily: "roboto, sans-serif" }}
        >
          The team assembled for your IT project can start delivering within ten
          business days.
        </Typography>
      </Box>
    </Box>
    </Box></>
    )
}
export default ProjectForm;