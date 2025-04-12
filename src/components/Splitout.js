import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import person from "./pic2.jpg";

const Splitout = () => {
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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
      {/* Right Side - Image */}
      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 200 }}
        animate={{
          opacity: rightInView ? 1 : 0,
          x: rightInView ? 0 : 200,
        }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        style={{
          flex: 1,
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "50%",
          marginRight: "2%",
        }}
      >
        <img
          style={{
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
          src={person}
          alt="Software development team collaborating"
        />
      </motion.div>

      {/* Left Side - Content Sections */}
      <Box flex={1} display="flex" flexDirection="column" width="50%" padding="4.5%">
        {/* Our Approach Section */}
        <motion.div
          ref={topLeftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: topLeftInView ? 1 : 0,
            y: topLeftInView ? 0 : 50,
          }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ flex: 1, padding: "20px" }}
        >
          <Typography variant="h4" component="h2" gutterBottom style={{ 
            fontFamily: 'roboto, sans-serif',
            fontWeight: 600,
            color: '#102b85'
          }}>
            Our Development Philosophy
          </Typography>
          <Typography variant="body1" paragraph style={{
            fontFamily: 'roboto, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            At S&C Solutions, we believe software should solve real business challenges. 
            Our agile methodology combines cutting-edge technology with user-centric design 
            to deliver solutions that drive measurable results. We don't just write code - 
            we build strategic assets that grow with your business.
          </Typography>
        </motion.div>

        {/* Technology Stack Section */}
        <motion.div
          ref={middleLeftRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: middleLeftInView ? 1 : 0,
            y: middleLeftInView ? 0 : 50,
          }}
          transition={{ duration: 1, delay: 1 }}
          style={{ flex: 1, padding: "20px" }}
        >
          <Typography variant="h4" component="h2" gutterBottom style={{ 
            fontFamily: 'roboto, sans-serif',
            fontWeight: 600,
            color: '#102b85'
          }}>
            Full-Stack Expertise
          </Typography>
          <Typography variant="body1" paragraph style={{
            fontFamily: 'roboto, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.6
          }}>
            Our team masters the complete technology spectrum - from React and Node.js 
            for web applications to Swift/Kotlin for mobile, Python for AI/ML, and AWS/Azure 
            for cloud infrastructure. We stay ahead of tech trends so you don't have to, 
            ensuring your solutions are built on the most effective, future-proof platforms.
          </Typography>
        </motion.div>

     
      </Box>
    </Box>
  );
};

export default Splitout;