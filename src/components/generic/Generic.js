import React from "react";
import { Box, Typography,Button,styled } from "@mui/material"; 
import Cards from "../mainCards/Cards";
import OtherServices from "../otherServices/OtherServices";
import ProjectForm from "../projectForm/ProjectForm";
import serviceData from "../../serives";
import { useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Importing the arrow icon
import mobile from "./mobile.jpg"
import {
  Card,
  CardContent,
  Grid,
  Link,
  Icon,
} from "@mui/material";
import TechStack from "../tech/TechInfo";
import SecondCards from "../secondCard/SecondCards";
import Footer from "../footer/Footer";

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
      backgroundColor: "#071952",
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
    backgroundColor: "#071952",
    width: "100%",
    transform: "scaleX(0)",
    transition: "transform 2s ease",
  },
}));

// Separate style for the Contact Now button
const Consultation = styled(HoverButton)({
  backgroundColor: "#071952",
  padding: '5px',
  color: "white",
  alignItems:'right',
  fontFamily: "roboto, sans-serif",
  "&:hover": {
    backgroundColor: "#009CFF",
    color:'white'
  },
});




const Generic = () => {
  const { serviceId } = useParams(); // Get service ID from URL
  const service = serviceData[serviceId]; // Retrieve service details based on service ID

  if (!service) {
    return <Typography variant="h4">Service not found</Typography>;
  }
  return (
    <>
   
   <Box
  className="backgroundImage"
  sx={{
    background: '#102b85',
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
    justifyContent: "center",
    alignItems: "center",
    padding: { xs: "4%", md: "2%" },
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    marginTop:'5%'
  }}
>
  {/* Text content */}
  <Box
    sx={{
      textAlign: { xs: "center", md: "left" },
      padding: { xs: "4%", md: "2%" },
      width: { xs: "100%", md: "100%" },
      ml: { xs: 0, md: "2%" },
      mt: { xs: "15%", md: 0 },
    }}
  >
    <Box sx={{ height: { xs: 32, md: 48 } }} /> {/* Responsive spacing */}

    <Typography
      variant="h2"
      sx={{
        background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textAlign: { xs: "center", md: "center" },
        fontFamily: "roboto, sans-serif",
        fontWeight: "650",
        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
        lineHeight: 1.2,
        px: { xs: 2, md: 0 },
      }}
    >
      {service.title}
    </Typography>

    <Box sx={{ height: { xs: 24, md: 48 } }} /> {/* Responsive spacing */}

    <Typography
      variant="body1"
      sx={{
        color: "whitesmoke",
        mb: { xs: 3, md: 5 },
        textAlign: { xs: "center", md: "center" },
        fontFamily: "roboto, sans-serif",
        width: { xs: "90%", md: "80%" },
        mx: "auto", // Center horizontally
        fontSize: { xs: "0.9rem", md: "1rem" },
        lineHeight: 1.6,
      }}
    >
      {service.description}
    </Typography>

    <Box sx={{ height: { xs: 24, md: 48 } }} /> {/* Responsive spacing */}

    <Box sx={{ 
      display: "flex", 
      justifyContent: { xs: "center", md: "center" },
      width: "100%",
    }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          fontFamily: "roboto, sans-serif",
          fontWeight: "500",
          py: { xs: 1.5, md: 2 },
          px: { xs: 4, md: 6 },
          width: { xs: "60%", sm: "40%", md: "18%" },
          borderRadius: "20px",
          '&:hover': {
            backgroundColor: "#f5f5f5",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          },
          transition: "all 0.3s ease",
        }}
        onClick={() => {
          alert("Let's discuss your project!");
        }}
      >
        Book Project
      </Button>
    </Box>

    <Box sx={{ height: { xs: 48, md: 96 } }} /> {/* Responsive bottom spacing */}
  </Box>

  {/* Right side: Image would go here */}
</Box>
        <br/>
        <Box
    style={{
      textAlign: "center",
      padding: "10% 2%", // More padding for better spacing
      width: "100%", // Set the width to leave more space for the image
      marginTop: "5%", // Optional for alignment
    }}
  >
    <Typography
      variant="h4"
      style={{
        color: "black",
        fontFamily: "roboto, serif",
        fontWeight: "500",
        width: "100%", // Adjust width of the text container
      }}
    >
      From Ideas to Impact
    </Typography>
    <Typography
      variant="h4"
      style={{
        color: "black",
        fontFamily: "roboto, serif",
        fontWeight: "500",
        width: "100%", // Adjust width of the text container
      }}
    >
      Building Solutions That Matter
    </Typography>
    <Typography
      variant="h3"
      style={{
        
        fontFamily: "Open sans, sans-serif",
        background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "700",
        width: "100%", // Adjust width of the text container
      }}
    >
      Discover What's Next
    </Typography>

    <br />

    <Typography
      variant="body1"
      style={{
        color: "white",
        
        width: "100%", // Adjust text width
        fontFamily: "roboto, sans-serif",
      }}
    >
    At S&C Solutions, we transform visionary ideas into impactful software solutions that drive
    </Typography>
    
    <Typography
      variant="body1"
      style={{
        color: "black",
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       textAlign:'center'
,        fontFamily: "roboto, sans-serif",
width:'50%',
marginLeft:'25%'
        
      }}
    >
       real change. Our commitment to innovation and excellence ensures that every solution we build is designed to address your unique challenges and create lasting value.
    </Typography>
   </Box>        
 
      
      <br/>
      <br/>
      <br/>
      <br/>
      <Box
      style={{
        
        width: "90%",
        marginLeft: "5%",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          padding: "3%",
          textAlign: "left",
          fontFamily: "roboto, sans-serif",
          color: "black",
          fontWeight: "500",
        }}
      >
        Services We Provide
      </h1>

      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
      <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor:'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
         
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                {service.cardtitle1}
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                {service.d1}

              </Typography>
              {/* Read More Link */}
             
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
       <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor: 'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
         
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            
           
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                {service.cardtitle2}
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif", }}
              >
               {service.d2}
              </Typography>
              {/* Read More Link */}
             
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
      <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor: 'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                                {service.cardtitle3}

              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                {service.d3}
              </Typography>
              {/* Read More Link */}
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
      <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor: 'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
         
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                                {service.cardtitle4}

              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                {service.d4}
              </Typography>
              {/* Read More Link */}
             
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
      <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor: 'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
         
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
             {service.cardtitle5}

              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                {service.d5}
              </Typography>
              {/* Read More Link */}
            
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
      <Card
      style={{
        padding: "10%",
        width: "98%",
        height: "90%",
        margin: "10px",
        display: "flex",
        borderRadius:'2%',
        backgroundColor: 'white',
        color:'black',
        flexDirection: "column",
        boxShadow:'0px 0px 1px 0px black',
         
        justifyContent: "space-between",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                   {service.cardtitle6}

              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                {service.d6}
              
              </Typography>
              {/* Read More Link */}
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>

    </Box>
    <hr/>
      <br/>
      <br/>
      <Box
        style={{
          backgroundColor: "white",
          width: "70%",
           marginLeft:'15%',
           top:'50%',
          borderRadius: "10px",
          padding: "8%",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          style={{
            padding: "3%",
            textAlign: "center",
            fontFamily: "roboto, sans-serif",
            color: "black",
            fontWeight: "500",
            fontSize: "24px",
            marginTop:'-5%'
          }}
        >
          Maximize Your Product Quality and Minimize Costs with Beyond Technologies Professional Business Analysts.
        </Typography>
        <Consultation
         onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(72, 113, 247, 1)";
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(72, 113, 247, 1)";
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.color = "white";
          }}
          variant="contained"
          color="rgba(72, 113, 247, 1)"
          style={{
            marginTop: "20px",
            width: "30%",
            backgroundColor: "#071952",
            padding: "12px",
            fontFamily: "roboto, sans-serif",
            fontWeight: "600",
            color:'white',
          }}
        >
          Request Consultation
        </Consultation>
      </Box>
      <br/>
      <SecondCards/>

      <ProjectForm />
      <br/>

      <br/>
      <Footer />
       
    </>
  );
};

export default Generic;
