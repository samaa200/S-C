import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
  {
    question: "What services does your software house provide?",
    answer: "We offer a range of services including web development, mobile app development, UI/UX design, cloud solutions, and IT consulting.",
  },
  {
    question: "How does the development process work?",
    answer: "Our process includes discovery, design, development, testing, and deployment. We ensure regular updates and client collaboration at each stage.",
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models such as fixed-price, hourly rates, and dedicated team-based models depending on the project's scope and requirements.",
  },
  {
    question: "How do you ensure data security?",
    answer: "We follow industry-standard security practices, including encryption, secure access controls, and regular audits to ensure data integrity and privacy.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we provide post-launch support, including bug fixes, updates, and ongoing maintenance to ensure smooth operation and performance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        padding: "5%",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop:'20%'
      }}
    >
        
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontFamily: "roboto, sans-serif",
          fontWeight: "500",
          mb: 3,
          color: "#3a3a3a",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <br/> 

      {faqs.map((faq, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#f6f6f6",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
            onClick={() => handleToggle(index)}
          >
            <Typography variant="h6" sx={{ fontWeight: "500", color: "#333" }}>
              {faq.question}
            </Typography>
            <IconButton
              sx={{ color: "#333" }}
              aria-label="Toggle Answer"
              onClick={() => handleToggle(index)}
            >
              {openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </IconButton>
          </Box>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  sx={{
                    padding: "15px 10px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "5px",
                    mt: 1,
                  }}
                >
                  <Typography variant="body1" color="textSecondary">
                    {faq.answer}
                  </Typography>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;
