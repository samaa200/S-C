import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import for intersection observer
import person from "./pic2.jpg"

const Splitout = () => {
  // Right side (formerly Left side)
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false, // Make sure the animation triggers every time it comes into view
    threshold: 0.1, // When 10% of the element is visible
  });

  // Left side sections (formerly Right side)
  const { ref: topLeftRef, inView: topLeftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: middleLeftRef, inView: middleLeftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: bottomLeftRef, inView: bottomLeftInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box display="flex" width="100%" height="100vh">
      {/* Right Side (formerly Left side) */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 200 }}
        animate={{
          opacity: rightInView ? 1 : 0,
          x: rightInView ? 0 : 200,
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
          width: "50%",
          marginRight: "2%",
        }}
      >
       
        <br/>
        <img
        style={{
            width:'100%',
            borderRadius:'10px'
           
        }}
        src={person}
        />
      </motion.div>

      {/* Left Side (formerly Right side) */}
      <Box flex={1} display="flex" flexDirection="column" width="50%" padding="4.5%">
        {/* Top Left Div */}
        <motion.div
          ref={topLeftRef}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{
            opacity: topLeftInView ? 1 : 0,
            y: topLeftInView ? 0 : 50, // Move up when in view
          }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ flex: 1, padding: "20px", color: "black" }}
        >
          <Typography variant="h5" component="h2">
            Left Top Div
          </Typography>
          <Typography variant="body1">
            This is the first div on the left. You can add lots of text here.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum. This section is separated by a colored
            border.
          </Typography>
        </motion.div>

        {/* Middle Left Div */}
        <motion.div
          ref={middleLeftRef}
          initial={{ opacity: 0, y: 50 }} // Same as above, sliding up
          animate={{
            opacity: middleLeftInView ? 1 : 0,
            y: middleLeftInView ? 0 : 50, // Slide to top when in view
          }}
          transition={{ duration: 1, delay: 1 }}
          style={{ flex: 1, padding: "20px", color: "black" }}
        >
          <Typography variant="h5" component="h2">
            Left Middle Div
          </Typography>
          <Typography variant="body1">
            This is the second div on the left. More content can go here as well.
            Phasellus tincidunt, quam vel fringilla laoreet, metus ligula ultrices
            ex, eget aliquet nisi felis id libero.
          </Typography>
        </motion.div>

        {/* Bottom Left Div */}
        <motion.div
          ref={bottomLeftRef}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{
            opacity: bottomLeftInView ? 1 : 0,
            y: bottomLeftInView ? 0 : 50, // Slide to top when in view
          }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ flex: 1, padding: "20px" }}
        >
          <Typography variant="h5" component="h2">
            Left Bottom Div
          </Typography>
          <Typography variant="body1">
            This is the third div on the left. It can contain as much text as
            needed. Praesent nec felis id ligula bibendum aliquam. Vestibulum sed
            convallis purus.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Splitout;
