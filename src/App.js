import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import SubmissionSuccess from "./SubmissionSuccess";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Define styles for links and hover effect using React's style object
  const linkStyle = {
    color: '#d63384',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    color: '#fbcfe8',
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#d63384', minHeight: '100vh', fontFamily: 'Times New Roman, Times, serif' }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand
            href="/"
            className="mx-auto"
            style={linkStyle}
            onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
            onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
          >
            My Profile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                as={Link}
                to="/"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/skills"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submission-success" element={<SubmissionSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
