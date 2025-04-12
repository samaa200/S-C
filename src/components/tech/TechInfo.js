import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import serviceData from "../../serives";

const TechStack = ({ serviceData = {} }) => {
  const { serviceId } = useParams(); // Get service ID from URL params

  // Retrieve specific service data using serviceId, with a fallback if serviceData is undefined
  const service = serviceData[serviceId] || null;

  // Initialize cardsData with either the specific service details or an empty array
  const cardsData = service
    ? [
        { title: service.cardtitle1, description: service.d1 },
        { title: service.cardtitle2, description: service.d2 },
        { title: service.cardtitle3, description: service.d3 },
        { title: service.cardtitle4, description: service.d4 },
        { title: service.cardtitle5, description: service.d5 },
        { title: service.cardtitle6, description: service.d6 },
      ]
    : [];

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

  // If service data is not available, show a message
  if (!service) {
    return <Typography color="white">Service not found.</Typography>;
  }

  return (
    <Box
      style={{
        backgroundColor: "rgb(32, 38, 53)",
        width: "90%",
        marginLeft: "3.5%",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          padding: "3%",
          textAlign: "center",
          fontFamily: "roboto, sans-serif",
          color: "white",
          fontWeight: "500",
        }}
      >
        Our Solutions
      </h1>

      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center">
          {visibleCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={currentStartIndex + index}>
              <AnimatedCard title={card.title} description={card.description} />
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
const AnimatedCard = ({ title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

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
          padding: "5%",
          margin: "10px",
          transition: "transform 0.3s, background-color 0.3s, color 0.3s",
          backgroundColor: "rgb(50, 54, 66)",
          color: "white",
          borderRadius: "20px",
          height: "60vh",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#3d5a80";
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgb(50, 54, 66)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.color = "";
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            style={{ fontFamily: "roboto, sans-serif", fontWeight: "600", color: "white" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            style={{ marginTop: "10px", fontFamily: "roboto, sans-serif", color: "rgb(196, 196, 197)" }}
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
              color: "#98c1d9",
              fontWeight: "normal",
              fontFamily: "roboto, sans-serif",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#e0fbfc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#98c1d9")}
          >
            Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TechStack;
