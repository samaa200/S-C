import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Home from './screens/Home/Home';
import Navbar from './components/navbar/Navbar';
import ContactUs from './screens/contact/ContactUs';
import Generic from './components/generic/Generic';
import ProjectForm from './components/projectForm/ProjectForm';
import About from './screens/About/About';
import Team from './components/Team/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyInfo from './components/companyinfo/CompanyInfo';
import Blog from './screens/blogs/Blog';
import BlogDetails from './screens/blogdetails/BlogDetails';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar /> {/* Keep the Navbar component outside Routes to make it persistent across pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/:serviceId" element={<Generic />} />
          <Route path="/project-form" element={<ProjectForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/company" element={<CompanyInfo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs/:serviceId" element={<BlogDetails />} />

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
