import React from 'react';

const About = () => {
  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>About Me</h1>
      <p>I'm Rochelle, a computer science student from Pamantasan ng Cabuyao. I'm passionate about web development, coding, and learning new technologies.</p>
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

export default About;
