import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  Icon,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Importing the arrow icon

const OtherServices = () => {
  return (
    <Box
      style={{
        backgroundColor: "rgba(72, 113, 247,1)",
        width: "90%",
        marginLeft: "3.5%",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          padding: "3%",
          textAlign: "center",
          fontFamily: "roboto, sans-serif",
          color: "white",
          fontWeight: "500",
        }}
      >
        Other Services
      </h1>

      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 1
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 1. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "orange",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";

            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 2
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 2. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(72, 113, 247,1)",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 3
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 3. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(72, 113, 247,1)",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 1
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 1. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(72, 113, 247,1)",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 2
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 2. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(72, 113, 247,1)",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            style={{
              padding: "5%",
              margin: "10px",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(72, 113, 247,1)";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.color = "";
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ fontFamily: "roboto, sans-serif", fontWeight: "600" }}
              >
                Card Title 3
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: "10px", fontFamily: "roboto, sans-serif" }}
              >
                This is a description for Card 3. You can add more information
                here.
              </Typography>
              {/* Read More Link */}
              <Link
                href="#"
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                  color: "rgba(72, 113, 247,1)",
                  fontWeight: "normal",
                  fontFamily: "roboto, sans-serif",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "orange")}
              >
                Read More <ArrowForwardIcon style={{ marginLeft: "5px" }} />
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>

    </Box>
  );
};

export default OtherServices;
