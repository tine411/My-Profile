import React from "react";
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SubmissionSuccess = () => {
  const location = useLocation();
  const { formData } = location.state;

  const containerStyle = {
    backgroundColor: '#FFB6C1', // Light pink background
    padding: '20px',
    borderRadius: '8px', // Optional: add some border radius for better appearance
    marginTop: '20px', // Optional: add some margin at the top
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const headerStyle = {
    fontSize: '2.5rem', // Change font size for the header
    marginBottom: '10px',
    textAlign: 'center',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const paragraphStyle = {
    fontSize: '1.7rem', // Change font size for the paragraph
    marginBottom: '15px',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };
  
  const listItemStyle = {
    fontSize: '1.5rem', // Change font size for list items
    marginBottom: '5px', // Optional: add margin between list items
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  return (
    <Container style={containerStyle}>
      <h1 style={headerStyle}>Thank You, {formData.name}!</h1>
      <p style={paragraphStyle}>Your message has been sent. Here's what you submitted:</p>
      <ul>
        <li style={listItemStyle}><strong>Name:</strong> {formData.name}</li>
        <li style={listItemStyle}><strong>Email:</strong> {formData.email}</li>
        <li style={listItemStyle}><strong>Message:</strong> {formData.message}</li>
      </ul>
    </Container>
  );
}

export default SubmissionSuccess;
