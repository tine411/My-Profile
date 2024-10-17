import React from "react";
import { Container } from 'react-bootstrap';

const About = () => {
  // Fullscreen style for the container
  const fullScreenStyle = {
    height: '100vh', // Full viewport height
    display: 'flex', // Use flexbox to center content
    alignItems: 'center', // Center vertically
    justifyContent: 'center', // Center horizontally
    backgroundColor: '#FFB6C1', // Light pink background color
    color: '#343a40', // Dark gray text color
    padding: '30px',
    borderRadius: '.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for a subtle 3D effect
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const headerStyle = {
    color: '#FF69B4', // Pink color for the heading
    fontSize: '3rem', // Increased font size for prominence
    marginBottom: '15px',
    textAlign: 'center', // Center the header
    width: '100%', // Ensures header takes full width for centering
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const paragraphStyle = {
    fontSize: '1.7rem', // Slightly larger font for readability
    lineHeight: '1.6',
    textAlign: 'left', // Left align the paragraph
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  return (
    <div style={fullScreenStyle}>
      <Container>
        <h1 style={headerStyle}>About Me</h1>
        <p style={paragraphStyle}>
          I enjoy dancing, singing, and reading. These activities bring me joy and allow me to express myself creatively. 
          I am currently working towards my career goals of becoming a full-stack developer.
        </p>
      </Container>
    </div>
  );
}

export default About;
