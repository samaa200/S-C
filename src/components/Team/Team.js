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
  import pic1 from "./pic1.jpg"

  const Team = () => {
    const cardsData = [
      {
        title: "Walli Ullah",
        description: "CEO",
        image: pic1, // Replace with actual image path
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
        }}
      >
        Our Team
      </h1>

      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center">
          {visibleCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={currentStartIndex + index}>
              <AnimatedCard image={card.image} title={card.title} description={card.description} />
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
const AnimatedCard = ({ image, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, scale: 0.8, x: -50 },
        visible: {
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
          },
        },
        exit: { opacity: 0, scale: 0.8, x: 50, transition: { duration: 0.6, ease: "easeInOut" } },
      }}
    >
      <Card
        style={{
          padding: "5%",
          margin: "6px",
          transition: "transform 0.3s, background-color 0.3s, color 0.3s",
          color: "white",
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
          <img
            src={image}
            alt={title}
            style={{
              width: "70%",
              height: "50%",
              borderRadius: "5%",
              marginBottom: "5%",
            }}
          />
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
              marginTop: "10%",
              fontFamily: "roboto, sans-serif",
              color: "black",
              textAlign: "center",
            }}
          >
            {description}
          </Typography>
          <br />
         
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Team;
