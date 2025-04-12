import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Box,
  Typography,
  Button,
} from "@mui/material"; 
import Team from "../../components/Team/Team";
import Footer from "../../components/footer/Footer";
import about from "./about.png"
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import for intersection observer
import FAQ from "../../components/faqs/Faqs";


const About = () => {

   // Left side
   const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: false, // Make sure the animation triggers every time it comes into view
    threshold: 0.1, // When 10% of the element is visible
  });

  // Right side sections
  const { ref: topRightRef, inView: topRightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: middleRightRef, inView: middleRightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: bottomRightRef, inView: bottomRightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      
      <Box
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5%",
          height:'100vh',
          background:'#102b85'
        }}
      >
        <Box
          style={{
            width: "35%",
            paddingLeft: "2%",
            textAlign: "left",
          }}
        >
         <img 
         src={about}
         style={{width:'100%'}}
          />
        </Box>
        {/* Left side: About Us Text content */}
        <Box
          style={{
            textAlign: "left",
            padding: "2%",
            width: "50%",
            marginTop:'6%',
           
          }}
        >
          <Typography
          variant="h3"
            style={{
            fontFamily: "roboto, sans-serif",

              color:
                "white",
               // Standard property for cross-browser
              display: "inline-block", // Sometimes necessary to show gradient properly
            }}
          >
            WHO WE ARE
          </Typography>
          <br />
          <br />

          <Typography
            variant="body1"
            style={{
              color: "whitesmoke",
              marginBottom: "20px",
              fontFamily: "roboto, sans-serif",
            }}
          >
            i2c’s mission is to empower our clients to create differentiated payment and banking experiences for consumers and businesses around the world. We build the payment technology and services that financial institutions, fintechs and brands, Banking as a Service (BaaS) providers and aggregators, and government agencies need to deliver high-impact, personalized payments and commerce solutions that build loyalty and engage today’s consumers in new ways, creating more profitable relationships.
          </Typography>
          <br/>
          <Button
      variant="contained"
      style={{
       
        backgroundColor: "white",
                   
        color: "black",
        fontFamily: "roboto, sans-serif",
        fontWeight: "500",
        padding: "2% 10%",
        width: "auto", // Adjust width for responsiveness
        borderRadius: "15px",
      }}
      onClick={() => {
        alert("Let's discuss your project!");
      }}
    >
      Book Project
    </Button>
        </Box>

        {/* Right side: Company Info and Operations */}
        
      </Box>
      <Team />
      <Box display="flex" width="100%" height="70vh"
      
      >
      {/* Left Side */}
      <motion.div
         ref={leftRef}
         initial={{ opacity: 0, x: -200 }}
         animate={{
           opacity: leftInView ? 1 : 0,
           x: leftInView ? 0 : -200,
         }}
         transition={{
           duration: 0.8, // Increase the duration for smoother motion
           ease: [0.25, 0.46, 0.45, 0.94], // Custom ease-in-out for smoothness
           delay: 0.1, // Small delay to enhance the transition feel
         }}
        style={{
          flex: 1,
          color: "black",
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
       
          width: "45%",
          marginLeft: "5%",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "45%",
            background: "linear-gradient(225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Our
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "70%",
            background: "linear-gradient(225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Core Values
        </Typography>
        <br />
        <Typography
          variant="body1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "70%",
          }}
        >
          We dedicatedly master the power of technology in bespoke ways for our customers, guided by three core values:
        </Typography>
      </motion.div>
{/* Right Side - Our Values */}
<Box flex={1} display="flex" flexDirection="column" width="45%" padding="4.5%">
  {/* Innovation Section */}
  <motion.div
    ref={topRightRef}
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: topRightInView ? 1 : 0,
      y: topRightInView ? 0 : 50,
    }}
    transition={{ duration: 1, delay: 0.5 }}
    style={{ flex: 1, padding: "20px" }}
  >
    <Typography variant="h4" component="h2" gutterBottom style={{
      fontFamily: 'roboto, sans-serif',
      fontWeight: 600,
      color: '#102b85'
    }}>
      Innovation
    </Typography>
    <Typography variant="body1" style={{
      fontFamily: 'roboto, sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.6
    }}>
      We push boundaries to deliver cutting-edge solutions. Our team thrives on solving 
      complex problems with creative technology, ensuring your business stays ahead 
      in the digital landscape.
    </Typography>
  </motion.div>

  {/* Integrity Section */}
  <motion.div
    ref={middleRightRef}
    initial={{ opacity: 0, y: 50 }}
    animate={{
      opacity: middleRightInView ? 1 : 0,
      y: middleRightInView ? 0 : 50,
    }}
    transition={{ duration: 1, delay: 1 }}
    style={{ flex: 1, padding: "20px" }}
  >
    <Typography variant="h4" component="h2" gutterBottom style={{
      fontFamily: 'roboto, sans-serif',
      fontWeight: 600,
      color: '#102b85'
    }}>
      Integrity
    </Typography>
    <Typography variant="body1" style={{
      fontFamily: 'roboto, sans-serif',
      fontSize: '1.1rem',
      lineHeight: 1.6
    }}>
      We build trust through transparency and ethical practices. Every line of code, 
      every business decision, and every client interaction reflects our commitment 
      to doing what's right - not just what's profitable.
    </Typography>
  </motion.div>

  {/* Excellence Section */}
  
</Box>
    </Box>

    <FAQ/>
      <br/>
      <br/>
     <Footer />
    </>
  );
}

export default About;
