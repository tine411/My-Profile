import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission and navigate to SubmissionSuccess
    const formData = { name, email, message }; // Create form data object
    navigate('/submission-success', { state: { formData } }); // Navigate with form data
  };

  const fullScreenStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1', // Light pink background
    color: '#343a40',
    padding: '20px',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const headerStyle = {
    color: '#FF69B4',
    fontSize: '3rem',
    marginBottom: '15px',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  return (
    <div style={fullScreenStyle}>
      <Container>
        <h1 style={headerStyle}>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
              style={{ fontFamily: 'Times New Roman, Times, serif' }} // Added font family to input
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              style={{ fontFamily: 'Times New Roman, Times, serif' }} // Added font family to input
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              rows={3} 
              placeholder="Enter your message" 
              style={{ fontFamily: 'Times New Roman, Times, serif' }} // Added font family to textarea
            />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
