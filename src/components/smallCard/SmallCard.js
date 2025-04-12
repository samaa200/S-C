import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import for intersection observer

const SplitLayout = () => {
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
    <Box display="flex" width="100%" height="100%">
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
          width: "50%",
          marginLeft: "2%",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "50%",
            background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight:'bold'
          }}
        >
          Translating
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "70%",
            color:'black'
          }}
        >
          technology into a positive impact
        </Typography>
        <br />
        <Typography
          variant="body1"
          style={{
            fontFamily: "roboto, sans-serif",
            width: "70%",
          }}
        >
          Our approach allows us to deliver exceptional experiences that drive
          growth and success for all stakeholders. Let’s rise to new heights with
          the power of digital transformation.
        </Typography>
      </motion.div>

      {/* Right Side */}
      <Box flex={1} display="flex" flexDirection="column" width="50%" padding="4.5%">
        {/* Top Right Div */}
        <motion.div
          ref={topRightRef}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{
            opacity: topRightInView ? 1 : 0,
            y: topRightInView ? 0 : 50, // Move up when in view
          }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ flex: 1, padding: "20px", color: "black" }}
        >
          <Typography variant="h5" component="h2" style={{ fontFamily: "roboto, sans-serif",
            fontWeight:'bold'
          }}>
          About Us
          </Typography>
          <br/>

          <Typography variant="body1" style={{ fontFamily: "roboto, sans-serif"}}>
          At S&C Solutions, we are a passionate team of innovators, developers, and problem-solvers committed to delivering high-quality software solutions. With years of experience in the industry, we specialize in building scalable and reliable systems that empower businesses to thrive in the digital age.
          </Typography>
        </motion.div>

        {/* Middle Right Div */}
        <motion.div
          ref={middleRightRef}
          initial={{ opacity: 0, y: 50 }} // Same as above, sliding up
          animate={{
            opacity: middleRightInView ? 1 : 0,
            y: middleRightInView ? 0 : 50, // Slide to top when in view
          }}
          transition={{ duration: 1, delay: 1 }}
          style={{ flex: 1, padding: "20px", color: "black" }}
        >
          <Typography variant="h5" component="h2">
          Our Expertise
          </Typography>
          <br/>

          <Typography variant="body1">
          Our expertise lies in creating cutting-edge software products for a variety of industries. From custom web and mobile applications to advanced machine learning models, our development teams leverage the latest technologies and methodologies to deliver scalable, secure, and efficient solutions.
          </Typography>
        </motion.div>

        {/* Bottom Right Div */}
        <motion.div
          ref={bottomRightRef}
          initial={{ opacity: 0, y: 50 }} // Start from below with opacity 0
          animate={{
            opacity: bottomRightInView ? 1 : 0,
            y: bottomRightInView ? 0 : 50, // Slide to top when in view
          }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ flex: 1, padding: "20px" }}
        >
          <Typography variant="h5" component="h2">
          Our Approach
          </Typography>
          <br/>
          <Typography variant="body1">
          At S&C Solutions, we follow a customer-centric approach that emphasizes collaboration and transparency. Our process begins with understanding your unique needs and objectives, followed by designing a solution that aligns with your business goals. We work iteratively, delivering incremental value while maintaining constant communication throughout the project.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default SplitLayout;
