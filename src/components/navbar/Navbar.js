import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {
  Code as CodeIcon,
  Build as BuildIcon,
  Group as GroupIcon,
  Work as WorkIcon,
  DesignServices as DesignServicesIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Menu as MenuIcon,
  Close as CloseIcon
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/contact');
    setExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        fontFamily: "roboto, sans-serif",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "0.5rem 0",
        transition: "all 0.3s ease",
      }}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "roboto, sans-serif",
            fontWeight: "bold",
            fontSize: "30px",
            background: "radial-gradient(circle at -0.1% 100.8%, rgb(0, 234, 255) 0.2%, rgb(0, 124, 255) 59.1%, rgb(198, 0, 255) 100.2%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginLeft: "1rem"
          }}
        >
          S&C Solutions
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          style={{ border: "none", marginRight: "1rem" }}
        >
          {expanded ? <CloseIcon /> : <MenuIcon />}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" style={{ alignItems: "center" }}>
        {/* Services Dropdown - Compact Version */}
<div
  className="nav-item dropdown"
  onMouseEnter={() => !expanded && document.querySelector('.services-dropdown').classList.add("show")}
  onMouseLeave={() => !expanded && document.querySelector('.services-dropdown').classList.remove("show")}
>
  <span
    className="nav-link dropdown-toggle"
    style={{ 
      color: "black",
      fontFamily: "roboto, sans-serif",
      fontSize: "19px",
      cursor: "pointer",
      padding: "0.5rem 1rem"
    }}
    id="servicesDropdown"
    role="button"
    aria-expanded="false"
    onClick={(e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.currentTarget.nextElementSibling.classList.toggle("show");
      }
    }}
  >
    Services
  </span>
  <div 
    className="dropdown-menu services-dropdown p-2" 
    aria-labelledby="servicesDropdown"
    style={{
      border: "none",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      minWidth: "600px",
      maxWidth: "600px"
    }}
  >
    <div className="row">
      {[
        { icon: <WorkIcon style={{ fontSize: "1.25rem" }} />, text: "App Development", link: "/services/app-dev" },
        { icon: <BuildIcon style={{ fontSize: "1.25rem" }} />, text: "Web Development", link: "/services/web-dev" },
        { icon: <GroupIcon style={{ fontSize: "1.25rem" }} />, text: "AI/ML", link: "/services/ai-ml" },
        { icon: <DesignServicesIcon style={{ fontSize: "1.25rem" }} />, text: "UI/UX", link: "/services/ui-ux" },
        { icon: <CloudIcon style={{ fontSize: "1.25rem" }} />, text: "Cloud", link: "/services/cloud-dev" },
        { icon: <SecurityIcon style={{ fontSize: "1.25rem" }} />, text: "Security", link: "/services/it-security" }
      ].map((item, index) => (
        <div className="col-6" key={index}>
          <Link 
            to={item.link} 
            className="dropdown-item d-flex align-items-center py-2 px-3"
            style={{ 
              color: "black", 
              textDecoration: "none",
              fontSize: "0.9rem",
              borderRadius: "4px"
            }}
            onClick={() => setExpanded(false)}
          >
            <span style={{ 
              marginRight: "0.75rem",
              color: "#6200ea",
              minWidth: "24px"
            }}>
              {item.icon}
            </span>
            <span>{item.text}</span>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
            {/* Other Links */}
            {["Industries", "Blog", "About Us"].map((item, index) => (
              <Nav.Link
                key={index}
                as={Link}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                style={{
                  fontFamily: "roboto, sans-serif",
                  fontSize: "19px",
                  color: "black",
                  padding: "0.5rem 1rem"
                }}
                onClick={() => setExpanded(false)}
              >
                {item}
              </Nav.Link>
            ))}

            <Button
              onClick={goToAbout}
              style={{
                fontFamily: "roboto, sans-serif",
                fontSize: "19px",
                color: "black",
                background: "white",
                border: "1px solid black",
                borderRadius: "10px",
                marginLeft: "1rem",
                padding: "0.5rem 1.5rem",
                transition: "all 0.3s ease",
                ":hover": {
                  background: "#f5f5f5"
                }
              }}
              className="contact-btn"
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;