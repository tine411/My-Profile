import React from "react";
import { Container } from 'react-bootstrap';

const Home = () => {
  const fullScreenStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1', // Light pink background
    color: '#343a40',
    padding: '30px',
    textAlign: 'center',
  };

  const headerStyle = {
    color: '#FF69B4',
    fontSize: '3rem',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    fontSize: '1.7rem', // Set font size for the paragraph
    lineHeight: '1.6', // Optional: Adjust line height for better readability
  };

  return (
    <div style={fullScreenStyle}>
      <Container>
        <h1 style={headerStyle}>Welcome to My Profile!</h1>
        <p style={paragraphStyle}>This is my personal web app showcasing my skills, about me, and contact details.</p>
      </Container>
    </div>
  );
}

export default Home;
