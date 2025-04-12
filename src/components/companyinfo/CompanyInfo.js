import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the hook

const CompanyInfo = () => {
  const stats = [
    { value: "15+", label: "Years of driving growth" },
    { value: "1000+", label: "Forward-thinking experts" },
    { value: "500+", label: "Digital Projects Delivered" },
    { value: "25+", label: "Industries we served" },
  ];

  return (
    <Box
      style={{
        
       background: "linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)",
        width: "95%",
      borderRadius:'20px',
        marginLeft:'2.5%',
        padding: "5%",
        marginTop: "1%",
      }}
    >
      {/* Title */}
      <SectionWithAnimation>
        <motion.h1
          style={{
            padding: "3%",
            textAlign: "left",
            fontFamily: "roboto, sans-serif",
            color: "black",
            fontWeight: "700",
            width: "40%",
          }}
          variants={{
            hidden: { opacity: 0, x: -100 }, // Slide in from left
            visible: { opacity: 1, x: 0 },    // Slide to the center
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
          Leading your Digital Journey to Success
        </motion.h1>
      </SectionWithAnimation>
      <SectionWithAnimation>
        <motion.h4
          style={{
            padding: "3%",
            marginTop:'-5%',
            textAlign: "left",
            fontFamily: "roboto, sans-serif",
            color: '#484848',
            fontWeight: "400",
            width: "50%",
          }}
          variants={{
            hidden: { opacity: 0, x: -100 }, // Slide in from left
            visible: { opacity: 1, x: 0 },    // Slide to the center
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 2 }}
        >
                Every customer journey is unique. At every touchpoint, businesses may instantly tailor a client's experience. D·engage's marketing software tools are integrated to propel your team's ability to engage customers across communication channels relevant to their journey, delivering personalization second-to-none.
        </motion.h4>
      </SectionWithAnimation>


      {/* Button */}
      <SectionWithAnimation>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            variant="contained"
            style={{
              background: "white",

              color: "black",
              fontFamily: "roboto, sans-serif",
              fontWeight: "500",
              padding: "1.5%",
              width:'25%',
              borderRadius: "40px",
              marginLeft: "3%",
            }}
            onClick={() => {
              alert("Let's discuss your project!");
            }}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </SectionWithAnimation>

      {/* Stats Grid */}
      <SectionWithAnimation>
        <Grid container spacing={3} style={{ marginTop: "7%", marginLeft: "1.5%" }} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={3} key={index} style={{ textAlign: "left" }}>
              {/* Statistic Value */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, x: -50 }, // Slide from left
                  visible: { opacity: 1, scale: 1, x: 0 },    // Center position
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2, delay: index * 1 }}
              >
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "roboto, sans-serif",
                    fontWeight: "500",
                    color: '#484848',

                  }}
                >
                  {stat.value}
                </Typography>
              </motion.div>

              {/* Statistic Label */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "roboto, sans-serif",
                    color: "black",
                    marginTop: "1%",
                  }}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </SectionWithAnimation>
    </Box>
  );
};

// Reusable component to detect when it comes into view and trigger animation
const SectionWithAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false so it keeps triggering when it re-enters the view
    threshold: 0.1, // Adjust this to trigger the animation when 10% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -50 }, // Slide in from left
        visible: { opacity: 1, x: 0 },   // Slide to the center
      }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default CompanyInfo;
