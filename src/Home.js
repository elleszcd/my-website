import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={isMobile ? mobileCardStyle : cardStyle}>
      <h1 style={headingStyle}>Dangal Greetings! Welcome to My Web Profile!</h1>
      <p>Hi! I'm Rochelle, and this is my web profile where you can know more about me, my skills, and where you can get in touch with me.</p>
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
  maxWidth: '60vw',
};

const mobileCardStyle = {
  ...cardStyle, // Inherit desktop styles
  maxWidth: '90vw', // Adjust for mobile
  padding: '1rem', // Less padding on mobile
};

const headingStyle = {
  color: '#3AAFA9',
  fontSize: '2rem',
};

export default Home;
