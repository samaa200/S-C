import React from "react";
import { Box, Typography, Card, CardContent, Grid, Link } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserFriends, FaCode, FaTasks } from "react-icons/fa"; // Import react-icons
import { useInView } from "react-intersection-observer";

const SecondCards = () => {
  const cardsData = [
    {
      title: "Dedicated Team",
      description: "Accelerate your business growth by leveraging our dedicated team of highly skilled technical and management professionals. We provide end-to-end support tailored to your unique project needs, ensuring efficiency, reliability, and seamless collaboration for achieving your goals.",
      icon: <FaUserFriends size={40} />,
    },
    {
      title: "Offshore Development Center",
      description: "Empower your business with our offshore development center, offering access to top-tier technical talent and advanced resources. Our flexible and scalable approach ensures reduced operational costs, faster time-to-market, and a reliable infrastructure to support your ongoing projects and long-term goals.",
      icon: <FaCode size={40} />,
    },
    {
      title: "Fixed Price Projects",
      description: "Streamline your project execution with our fixed-price model, which guarantees quality delivery within predefined timelines and budgets. Our meticulous planning, transparent communication, and adherence to best practices ensure that your project is completed efficiently, exceeding expectations while staying cost-effective.",
      icon: <FaTasks size={40} />,
    },
    
  ];

  return (
    <Box
      style={{
        width: "90%",
        margin: "auto",
        borderRadius: "20px",
        padding: "20px",
        
      }}
    >
      <h2
        style={{
          padding: "4%",
          textAlign: "left",
          fontFamily: "roboto, sans-serif",
          color: "black",
          fontWeight: "700",
        }}
      >
       How Can We Engage
      </h2>

      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center">
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard title={card.title} description={card.description} icon={card.icon} />
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>
    </Box>
  );
};

// Separate AnimatedCard component
const AnimatedCard = ({ title, description, icon }) => {
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
    width: "100%", // Ensure the card takes full width
    height: "100%", // Ensure card takes full height
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
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
      alignItems: "center", // Center content horizontally
      justifyContent: "center", // Center content vertically
      textAlign: "center", // Align text in the center
      padding: "0", // Remove extra padding
    }}
  >
    <div
      style={{
        marginBottom: "5%",
        background: "radial-gradient(circle at 10% 20%, rgb(55, 209, 255) 0%, rgb(14, 31, 111) 100.2%)",
        borderRadius: "50%",
        padding: "20px",
        display: "flex", // Use flex for centering
        justifyContent: "center", // Center icon horizontally
        alignItems: "center", // Center icon vertically
        color: "white",
        width: "80px", // Adjust icon container size
        height: "80px", // Adjust icon container size
      }}
    >
      {icon}
    </div>
    <Typography
      variant="h5"
      component="div"
      style={{
        fontFamily: "roboto, sans-serif",
        fontWeight: "500",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
    <br/>
    <Typography
      variant="body2"
      style={{
        fontSize: "17px",
        marginTop: "10px",
        fontFamily: "roboto, sans-serif",
        color: "grey",
        textAlign:'left'
      }}
    >
      {description}
    </Typography>
  </CardContent>
</Card>

      <br/>
      <br/>

    </motion.div>
  );
};

export default SecondCards;
