import React from "react";
import Navbar from "../../components/navbar/Navbar";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  styled,
  Grid,
} from "@mui/material"; // Import Button for the call to action
import "./Home.css"; // Import the CSS file for additional styling
import logo from "./blue.png"; // Import your image
import Cards from "../../components/mainCards/Cards";
import Footer from "../../components/footer/Footer";
import pic1 from "./pic1.jpg"; // Import your image
import gif1 from "./gif1.mp4";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic5 from "./pic5.jpg";
import homee from "./homee.png";
import homee2 from "./homee2.png";
import SmallCard from "../../components/smallCard/SmallCard";
import ProjectForm from "../../components/projectForm/ProjectForm";
import Team from "../../components/Team/Team";
import video from "./gif1.mp4";
import picture from "./picture.jpg";
import Video from "../../components/video/Video";
import { BorderColor, BorderLeft, BorderRight } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SplitLayout from "../../components/smallCard/SmallCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StorageIcon from "@mui/icons-material/Storage";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompanyInfo from "../../components/companyinfo/CompanyInfo";
import SecondCards from "../../components/secondCard/SecondCards";
import {
  FaCog,
  FaCloud,
  FaLock,
  FaRobot,
  FaLink,
  FaChartBar,
} from "react-icons/fa";
import FAQ from "../../components/faqs/Faqs";
import Splitout from "../../components/Splitout";

const HoverButton = styled(Button)(({ theme }) => ({
  color: "black",
  fontFamily: "Open sans, sans-serif",
  fontWeight: "500",
  position: "relative",
  transition: "color 0.4s ease, transform 0.4s ease",
  padding: "1.5% 8%",
  borderRadius: "15px",
  "&:hover": {
    color: "black",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      height: "2px",
      width: "80%",
backgroundColor:'teal',
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
    background:"linear-gradient(108.1deg, rgb(167, 220, 225) 11.2%, rgb(217, 239, 242) 88.9%)", // Color for the animation
    width: "80%",
    transform: "scaleX(0)",
    transition: "transform 2s ease",
  },
}));

// Separate style for the Contact Now button
const ContactButton = styled(HoverButton)({
  background:
  "#102b85",
  padding: "8px",
  color: "white",
  alignItems: "right",
  fontFamily: "roboto, sans-serif",
  "&:hover": {
    backgroundColor: "#009CFF",
    color: "white",
  },
});
const cardData = [
  {
    icon: <FaCog size={30} />, // Smart Automation Icon
    title: "Smart Automation",
    description:
      "Streamline your workflows and reduce manual effort with intelligent automation tools. Our solutions are designed to enhance efficiency, minimize errors, and accelerate your business processes, freeing up valuable resources for innovation and growth.",
  },
  {
    icon: <FaCloud size={30} />, // Cloud Solutions Icon
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud with our secure, scalable, and flexible solutions. Whether it's storage, collaboration, or deploying complex applications, our cloud services empower your business with accessibility and reliability from anywhere in the world.",
  },
  {
    icon: <FaLock size={30} />, // Data Security Icon
    title: "Data Security",
    description:
      "Safeguard your critical data with advanced security measures and encryption technologies. Our solutions prioritize data protection, ensuring compliance with regulations and giving you peace of mind in today's evolving cyber threat landscape.",
  },
  {
    icon: <FaRobot size={30} />, // AI & Machine Learning Icon
    title: "AI & Machine Learning",
    description:
      "Unlock new opportunities with AI-driven insights and machine learning capabilities. Our software leverages cutting-edge algorithms to help you analyze data, predict trends, and make smarter, data-backed decisions.",
  },
  {
    icon: <FaLink size={30} />, // Seamless Integration Icon
    title: "Seamless Integration",
    description:
      "Connect your existing systems effortlessly with our integration solutions. We ensure that all your tools and applications work harmoniously, saving time and reducing complexity in your business operations.",
  },
  {
    icon: <FaChartBar size={30} />, // Performance Analytics Icon
    title: "Performance Analytics",
    description:
      "Gain actionable insights into your operations with comprehensive performance analytics. Our tools help you monitor key metrics, identify areas for improvement, and drive data-informed strategies to achieve your  goals",
  },
];

const stats = [
  { value: "500+", label: "Digital Projects Delivered" },
  { value: "25+", label: "Industries we served" },
];

const Home = () => {
  return (
    <>
     <Box>
  <Box
    className="backgroundImage"
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
      justifyContent: "space-between",
      alignItems: "center",
      padding: { xs: "4%", md: "2%" }, // More padding on mobile
      minHeight: "100vh", // Use min-height instead of height
      color: "white",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    {/* Text content container */}
    <Box
      sx={{
        textAlign: "center",
        padding: 0,
        width: { xs: "100%", md: "100%" },
        mt: { xs: "10%", md: "20%" }, // Responsive top margin
        mb: { xs: "5%", md: 0 }, // Bottom margin on mobile
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "roboto, serif",
          fontWeight: "700",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" }, // Responsive font size
          lineHeight: { xs: 1.2, md: 1.3 },
        }}
      >
        Transform Your Business 
      </Typography>
      
      <Typography
        variant="h2"
        sx={{
          color: "white",
          fontFamily: "roboto, serif",
          fontWeight: "700",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          lineHeight: { xs: 1.2, md: 1.3 },
        }}
      >
        with Innovative and Scalable
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "700",
            display: "inline-block",
            background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            padding: 0,
            margin: 0,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
            lineHeight: { xs: 1.2, md: 1.3 },
          }}
        >
          Software Solutions
        </Typography>
      </Box>

      <Box sx={{ height: { xs: 16, md: 24 } }} /> {/* Responsive spacing */}

      <Typography
        variant="body1"
        sx={{
          color: "white",
          mb: { xs: 3, md: "2%" },
          width: { xs: "90%", md: "60%" },
          mx: "auto", // Center horizontally
          fontFamily: "roboto, sans-serif",
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.6,
        }}
      >
        Empower your business with cutting-edge software solutions designed to streamline operations, boost efficiency, and drive growth. Our innovative and scalable technologies are tailored to meet your unique needs, ensuring seamless integration and exceptional performance.
      </Typography>

      <Box sx={{ height: { xs: 16, md: 24 } }} /> {/* Responsive spacing */}

      <HoverButton
        variant="contained"
        sx={{
          background: "white",
          color: "black",
          width: "auto",
          fontSize: { xs: "0.9rem", md: "1rem" },
          px: { xs: 3, md: 4 },
          py: { xs: 1, md: 1.5 },
          '&:hover': {
            background: "#f5f5f5",
          },
        }}
        onClick={() => {
          alert("Let's discuss your project!");
        }}
      >
        Book Project
      </HoverButton>

      <Box sx={{ height: { xs: 48, md: 96 } }} /> {/* Responsive bottom spacing */}
    </Box>
  </Box>


       
        <Box
          style={{
            textAlign: "center",
            fontFamily: "roboto, sans-serif",
            fontWeight: "0",
            marginTop:'10%'
          }}
        >
         <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px", // Adjust spacing between items
  }}
>
  <h2 style={{ fontWeight: "500", textAlign: "center" }}>Features</h2>
  <h2 style={{ fontWeight: "500", textAlign: "center",
     background:
     "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
   WebkitBackgroundClip: "text",
   WebkitTextFillColor: "transparent",
   }}>S&C Solutions</h2>
  <h2 style={{ fontWeight: "500", textAlign: "center" }}>Provide</h2>
</div>
<br/>
          <Typography
            variant="body1"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "roboto, sans-serif",
              width: "50%",
              marginLeft: "25%",
            }}
          >
            S&C Solutions offers a range of powerful features designed to optimize your business processes. Our software solutions provide seamless integration, enhanced productivity, and scalable options to meet your unique needs. With a focus on innovation, we ensure that your business is equipped with the tools necessary for long-term success.
          </Typography>

          <br />
          <br />
          <hr className="hr-1" />
          <Box
            style={{
              backgroundColor: "white",
              width: "90%",
              marginLeft: "3.5%",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <Grid container spacing={4} justifyContent="left">
              {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    style={{
                      padding: "10px", // Remove padding
                      margin: "20px", // Remove margin
                      width: "100%", // Ensure the card takes full width
                      height: "100%", // Ensure card takes full height
                      display: "flex",
                      flexDirection: "column",

                      justifyContent: "left", // Center content vertically
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
                    <CardContent style={{ flex: "1", padding: "0" }}>
                      {" "}
                      {/* Remove padding */}
                      <div
                        style={{
                          marginBottom: "5%",
                          background:
                            "radial-gradient(circle at 10% 20%, rgb(55, 209, 255) 0%, rgb(14, 31, 111) 100.2%)",
                          borderRadius: "50%",
                          padding: "20px",
                          textAlign: "center",
                          display: "inline-block",
                          color: "white",
                        }}
                      >
                        {card.icon}
                      </div>
                      <Typography
                        variant="h5"
                        component="div"
                        style={{
                          textAlign: "center",
                          fontFamily: "roboto, sans-serif",
                          fontWeight: "450",
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{
                          textAlign: "center",
                          marginTop: "10px",
                          fontFamily: "roboto, sans-serif",
                        }}
                      >
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <br/>
        <br/>

        <hr className="hr-1" />
     
        <Box
          style={{
            textAlign: "center",
            padding: "10% 2%", // More padding for better spacing
            width: "100%", // Set the width to leave more space for the image
            marginTop: "5%", // Optional for alignment
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "black",
              fontFamily: "roboto, serif",
              fontWeight: "500",
              width: "100%", // Adjust width of the text container
            }}
          >
            From Ideas to Impact
          </Typography>
          <Typography
            variant="h4"
            style={{
              color: "black",
              fontFamily: "roboto, serif",
              fontWeight: "500",
              width: "100%", // Adjust width of the text container
            }}
          >
             Building Solutions That Matter
          </Typography>
          <Typography
            variant="h3"
            style={{
              fontFamily: "Open sans, sans-serif",
              background:
                "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "700",
              width: "100%", // Adjust width of the text container
            }}
          >
            Discover What's Next
          </Typography>

          <br />

          <br/>

          <Typography
            variant="body1"
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "roboto, sans-serif",
              width: "50%",
              marginLeft: "25%",
            }}
          >
            
At S&C Solutions, we transform visionary ideas into impactful software solutions that drive real change. Our commitment to innovation and excellence ensures that every solution we build is designed to address your unique challenges and create lasting value. Explore what’s next with us and discover how our tailored solutions can propel your business forward.
          </Typography>
          
<ContactButton
              variant="contained"
              color="primary"
              style={{
                marginTop: "3%",
                width: "20%",
                backgroundColor: "rgb(72, 113, 247)",
                padding: "1%",
                fontFamily: "roboto, sans-serif",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#009CFF",
                  color: "white",
                },
              }}
            >
              Learn More
            </ContactButton>
        </Box>
<hr className="hr-1" />
        <Cards />
        <br />
        <hr className="hr-1" />
        <SplitLayout />
        <br />
        <CompanyInfo />

        {/* Animated Cards */}
      <Splitout />

        <br />
        <SecondCards />

        {/* Team Section */}
        <br />
        <br />
        <br />
        <br />
        <hr/>
        {/* Project Form */}
        <ProjectForm />
        <br />
        <br />
        <br />
        <FAQ />
        <br />
        <br />
        <br />
        <br />

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
};

export default Home;
