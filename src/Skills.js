import React from "react";
import { Container } from 'react-bootstrap';

const Skills = () => {
  const fullScreenStyle = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFB6C1', // Light pink background
    color: '#343a40',
    padding: '30px',
    textAlign: 'center',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const headerStyle = {
    color: '#FF69B4',
    fontSize: '3rem',
    marginBottom: '15px',
    fontFamily: 'Times New Roman, Times, serif' // Added font family
  };

  const skillsListStyle = {
    fontSize: '1.6rem',
    lineHeight: '1.6',
    fontFamily: 'Times New Roman, Times, serif' // Added font family to skills list
  };

  const skillsList = ['Communication', 'Javascript', 'Time Management', 'React', 'CSS'];

  return (
    <div style={fullScreenStyle}>
      <Container>
        <h1 style={headerStyle}>My Skills</h1>
        <ul style={skillsListStyle}>
          {skillsList.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Skills;
