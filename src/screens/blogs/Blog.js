import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardContent, Grid, Link } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

const ContactButton = styled(HoverButton)({
  backgroundColor: "#102b85",
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
    title: "Why Data Standards Matter for Modern Enterprises",
    description: "In today's interconnected digital landscape, data standards ensure seamless integration across platforms. Learn how implementing robust data governance can transform your analytics capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readMoreLink: "/blogs/data-standards"
  },
  {
    title: "Emerging AI Trends in 2023: What Businesses Need to Know",
    description: "From generative AI to ethical machine learning, we explore the most impactful AI developments this year and how they're reshaping industries from healthcare to finance.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    readMoreLink: "/blogs/ai-trends"
  },
  {
    title: "Cloud Security Best Practices for Hybrid Environments",
    description: "As organizations adopt hybrid cloud solutions, security challenges multiply. Discover our expert recommendations for maintaining security across distributed infrastructures.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readMoreLink: "/blogs/cloud-security"
  },
  {
    title: "DevOps Transformation: Accelerating Your Delivery Pipeline",
    description: "Breaking down silos between development and operations isn't just about tools - it's a cultural shift. See how leading companies achieve faster deployment cycles.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    readMoreLink: "/blogs/devops-transformation"
  },
  {
    title: "The Psychology Behind Effective UX Design",
    description: "Great UX goes beyond aesthetics. We delve into cognitive psychology principles that can dramatically improve user engagement and conversion rates.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    readMoreLink: "/blogs/ux-psychology"
  },
  {
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    description: "From supply chain transparency to digital identity verification, explore how blockchain technology is solving real business problems across industries.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    readMoreLink: "/blogs/blockchain-applications"
  }
];

const Blog = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        className="backgroundImage"
        style={{
          background: "linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2%",
          height: "100vh",
        }}
      >
        <Box style={{ textAlign: "left", padding: "2%", width: "100%", marginLeft: "2%" }}>
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
        </Box>
      </Box>
      
      {/* Marketing Automation Section */}
      <Box style={{ textAlign: "center", padding: "10% 2%", width: "100%" }}>
        <Typography variant="h4" style={{ color: "black", fontFamily: "roboto, serif", fontWeight: "500" }}>
          Optimize Your Customer
        </Typography>
        <Typography variant="h4" style={{ color: "black", fontFamily: "roboto, serif", fontWeight: "500" }}>
          Experiences Through Data-centric
        </Typography>
        <Typography
          variant="h3"
          style={{
            fontFamily: "Open sans, sans-serif",
            background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700",
          }}
        >
          Marketing Automation
        </Typography>
      </Box>

      {/* Blog Cards Section */}
      <AnimatePresence mode="wait">
        <Grid container spacing={4} justifyContent="center" style={{ padding: "0 5%" }}>
          {cardsData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimatedCard 
                title={card.title} 
                description={card.description} 
                image={card.image}
                readMoreLink={card.readMoreLink}
              />
            </Grid>
          ))}
        </Grid>
      </AnimatePresence>

      {/* CTA Section */}
      <Box
        style={{
          backgroundColor: "white",
          width: "70%",
          margin: "5% 15%",
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
            marginTop: '-5%'
          }}
        >
          Maximize Your Product Quality and Minimize Costs with Professional Business Analysts.
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
          }}
        >
          Submit
        </ContactButton>
      </Box>

      <Footer />
    </Box>
  );
};

// Animated Card Component
const AnimatedCard = ({ title, description, image, readMoreLink }) => {
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
          padding: "5%",
          margin: "20px",
          width: "90%",
          height: "100%",
          background: "transparent",
          boxShadow: "none",
          border: "none",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <CardContent style={{ display: "flex", flexDirection: "column", padding: "0" }}>
          <img 
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <br/>
          <Typography
            variant="h4"
            style={{
              marginTop: "2%",
              fontFamily: "roboto, sans-serif",
              color: "black",
              textAlign: 'left'
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginTop: "2%",
              fontFamily: "roboto, sans-serif",
              color: "#666",
              textAlign: 'left'
            }}
          >
            {description}
          </Typography>
          <Link
            href={readMoreLink}
            underline="none"
            style={{
              alignItems: "left",
              marginTop: "5%",
              textAlign: 'left',
              fontSize: '20px',
              color: "orange",
              fontWeight: "normal",
              fontFamily: "roboto, sans-serif",
            }}
          >
            Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Blog;