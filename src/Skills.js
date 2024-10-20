import React from 'react';

const Skills = () => {
  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>My Skills</h1>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Problem Solving</li>
        <li>Collaboration</li>
      </ul>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#FEFFFF',
  padding: '2rem',
  margin: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  color: '#17252A',
};

const headingStyle = {
  color: '#3AAFA9',
};

export default Skills;
