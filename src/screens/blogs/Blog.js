import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Importing the arrow icon
import { Card, CardContent, Grid, Link, Icon } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import picture from "./picture.jpg"
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
    backgroundColor:"#102b85",
    padding: "8px",
    color: "white",
    alignItems: "right",
    fontFamily: "roboto, sans-serif",
    "&:hover": {
      backgroundColor: "#009CFF",
      color: "white",
    },
  });

const cardsData = [
    {
      title: "Why data standards matter & why they’re important",
      description: "Accelerate your business growth by leveraging our dedicated team of highly skilled technical and management professionals. We provide end-to-end support tailored to your unique project needs, ensuring efficiency, reliability, and seamless collaboration for achieving your goals.",
      image:picture
    },
    {
      title: "Why data standards matter & why they’re important",
      description: "Empower your business with our offshore development center, offering access to top-tier technical talent and advanced resources. Our flexible and scalable approach ensures reduced operational costs, faster time-to-market, and a reliable infrastructure to support your ongoing projects and long-term goals.",
      image:picture
    },
    {
      title: "Why data standards matter & why they’re important",
      description: "Streamline your project execution with our fixed-price model, which guarantees quality delivery within predefined timelines and budgets. Our meticulous planning, transparent communication, and adherence to best practices ensure that your project is completed efficiently, exceeding expectations while staying cost-effective.",
      image:picture
    },
    {
        title: "Why data standards matter & why they’re important",
        description: "Streamline your project execution with our fixed-price model, which guarantees quality delivery within predefined timelines and budgets. Our meticulous planning, transparent communication, and adherence to best practices ensure that your project is completed efficiently, exceeding expectations while staying cost-effective.",
        image:picture
      },
      {
        title: "Why data standards matter & why they’re important",
        description: "Streamline your project execution with our fixed-price model, which guarantees quality delivery within predefined timelines and budgets. Our meticulous planning, transparent communication, and adherence to best practices ensure that your project is completed efficiently, exceeding expectations while staying cost-effective.",
        image:picture
      },
      {
        title: "Why data standards matter & why they’re important",
        description: "Streamline your project execution with our fixed-price model, which guarantees quality delivery within predefined timelines and budgets. Our meticulous planning, transparent communication, and adherence to best practices ensure that your project is completed efficiently, exceeding expectations while staying cost-effective.",
        image:picture
      },
     
]

const Blog = ({ title, description, image }) => {

  return (
    <Box>
      <Box
        className="backgroundImage"
        style={{
          background:
            "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)",
          display: "flex", // Enable flexbox to align text and image side by side
          justifyContent: "space-between", // Ensure space between the text and image
          alignItems: "center", // Vertically center-align the content
          padding: "2%", // Add padding to the container
          height: "100vh", // Set the height of the container to fill the viewport
        }}
      >
        <Box
          style={{
            textAlign: "left",
            padding: "2%",
            width: "100%",
            marginLeft: "2%",
          }}
        >
          <br />
          <br />

          <br />
          <br />
          <Typography
            variant="h1"
            style={{
              color: "whitesmoke",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "roboto, sans-serif",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            Tech experts' latest: Innovations in digital enterprise
          </Typography>
          <br />
          <br />
        </Box>

        {/* Right side: Image */}
      </Box>
      <br/>
      <br/>
      <Box
          style={{
            textAlign: "center",
            padding: "10% 2%", // More padding for better spacing
            width: "100%", // Set the width to leave more space for the image
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
            Optimize Your Customer
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
            Experiences Through Data-centric
          </Typography>
          <Typography
            variant="h3"
            style={{
              fontFamily: "Open sans, sans-serif",
              background:
                "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "700",
              width: "100%", // Adjust width of the text container
            }}
          >
            Marketing Automation
          </Typography>
          </Box>
          <br/>
          <br/>

          <br/>

      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard title={card.title} description={card.description} image={card.image} />
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>
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
        
<ContactButton
              variant="contained"
              color="primary"
              style={{
                marginTop: "20px",
                width: "40%",
                backgroundColor: "#102b85",
                padding: "10px",
                fontFamily: "roboto, sans-serif",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#102b85",
                  color: "white",
                },
              }}
            >
              Submit
            </ContactButton>
      </Box>
      <br/>
      <br/>

      <br/>

      <Footer />
    </Box>
    
  );
};

// Separate AnimatedCard component
const AnimatedCard = ({ title, description, image }) => {
    const { ref, inView } = useInView({ triggerOnce: false });
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="exit"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          exit: { opacity: 0, scale: 0.9, transition: { duration: 0.5 } },
        }}
      >
        <Card
    style={{
      padding: "5%", // Remove padding
      margin: "20px", // Remove margin
      width: "90%", // Ensure the card takes full width
      height: "100%", // Ensure card takes full height
    
     // Center content vertically
      background: "transparent", // Make the background transparent
      boxShadow: "none", // Remove box shadow
      border: "none", // Remove borders
      transition: "transform 0.3s ease-in-out", // Smooth transition for hover effect
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.02)"; // Slight zoom effect on hover
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)"; // Return to original size
    }}
  >
    <CardContent
      style={{
        display: "flex",
        flexDirection: "column",
       // Align text in the center
        padding: "0", // Remove extra padding
      }}
    >
      
      <img 
      style={{
        width:'100%',
        height:'80vh',
        
      }}
      src={image}
      />
      <br/>
      <Typography
        variant="h4"
        style={{
          marginTop: "2%",
          fontFamily: "roboto, sans-serif",
          color: "black",
          textAlign:'left'
        }}
      >
        {title}
      </Typography>
      <Link
      href="/blogs/blog-1"
      underline="none"
      style={{
        alignItems: "left",
        marginTop: "5%",
        textAlign:'left',
        fontSize:'20px',
        color: "orange",
        fontWeight: "normal",
        fontFamily: "roboto, sans-serif",

      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "orange")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
    >
      Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
    </Link>
    </CardContent>
  </Card>
  
        <br/>
        <br/>
  
      </motion.div>
    );
  };
export default Blog;
