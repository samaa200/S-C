import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import home from "./home6.jpg"
import { FaMobileAlt, FaLaptopCode, FaBrain, FaPaintBrush, FaCloud, FaCogs } from "react-icons/fa";

const Cards = () => {

  const cardsData = [
    {
      title: "App Development",
      description: "Build custom mobile and web apps that elevate user experience and drive business growth.",
      icon: <FaMobileAlt   size={50} />,
    },
    {
      title: "Web Development",
      description: "Create secure, scalable websites that enhance your brand and provide seamless user experiences.",
      icon: <FaLaptopCode   size={50} />,
    },
    {
      title: "AI/ML",
      description: "Unlock new business opportunities by integrating AI and machine learning into your operations.",
      icon: <FaBrain   size={50} />,
    },
    {
      title: "UI/UX",
      description: "Design intuitive interfaces and delightful user experiences that boost engagement and usability.",
      icon: <FaPaintBrush   size={50} />,
    },
    {
      title: "Cloud Development",
      description: "Leverage cloud technologies for flexible, scalable, and secure infrastructure solutions.",
      icon: <FaCloud   size={50} />,
    },
    {
      title: "IT Management",
      description: "Optimize IT infrastructure, ensuring smooth operations, security, and performance at scale.",
      icon: <FaCogs   size={50} />,
    },
  ];
  

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const cardsPerView = 3;

  const handleNext = () => {
    if (currentStartIndex + cardsPerView < cardsData.length) {
      setCurrentStartIndex(currentStartIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 1);
    }
  };

  const visibleCards = cardsData.slice(currentStartIndex, currentStartIndex + cardsPerView);

  return (
    <Box
      style={{
        
        width: "90%",
        marginLeft: "5%",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          padding: "4%",
          textAlign: "center",
          fontFamily: "roboto, sans-serif",
          color: "black",
          fontWeight: "500",
          width:'70%',
          marginLeft:'15%'
        }}
      >
        Discover the Comprehensive Solutions We Offer to Drive Your Success
      </h1>

      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center">
          {visibleCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={currentStartIndex + index}>
              <AnimatedCard icon={card.icon} title={card.title} description={card.description} />
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>

      <Box textAlign="center" marginTop="20px">
        {currentStartIndex > 0 && (
          <IconButton onClick={handleBack} style={{ color: "#98c1d9", marginRight: "10px" }}>
            <ArrowBackIcon />
          </IconButton>
        )}
        {currentStartIndex + cardsPerView < cardsData.length && (
          <IconButton onClick={handleNext} style={{ color: "#98c1d9" }}>
            <ArrowForwardIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

// Separate AnimatedCard component
const AnimatedCard = ({ icon, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
    ref={ref}
initial="hidden"
animate={inView ? "visible" : "hidden"}
variants={{
  hidden: { opacity: 0, scale: 0.8, x: -50 }, // Start closer for a smoother slide-in
  visible: {
    opacity: 1,
    scale: 1,
    x: 0, // Center position
    transition: {
      duration: 0.6, // Longer duration for smoother appearance
      ease: [0.25, 0.8, 0.25, 1], // Smooth ease-in-out transition
    },
  },
  exit: { opacity: 0, scale: 0.8, x: 50, transition: { duration: 0.6, ease: "easeInOut" } }, // Smooth slide-out to the right
}}
    >
    <Card
  style={{
    padding: "5%",
    margin: "6px",
    transition: "transform 0.3s, background-color 0.3s, color 0.3s",
    background:"white",
    color: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "20px",
    height: "70vh",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.06)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
  }}
>
  <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div
     style={{  marginBottom: "5%",
      background: "black",
      borderRadius: "50%",
      padding: "20px",
    
      textAlign:'center',
      display: "inline-block",color:'white' }}>
      {icon}
    </div>
    <Typography
      variant="h5"
      component="div"
      style={{
        fontFamily: "roboto, serif",
        fontWeight: "500",
        color: "black",
        fontSize: "25px",
        textAlign: "center",
        marginTop: "5%",
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      style={{
        fontSize: "17px",
        marginTop: "14%",
        fontFamily: "roboto, sans-serif",
        color: "black",
        textAlign: "center",
      }}
    >
      {description}
    </Typography>
    <br />
    <Link
      href="#"
      underline="none"
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        color: "orange",
        fontWeight: "normal",
        fontFamily: "roboto, sans-serif",

      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
    >
      Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
    </Link>
  </CardContent>
</Card>

    </motion.div>
  );
};

export default Cards;



