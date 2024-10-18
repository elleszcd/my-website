import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update the isMobile state when window is resized
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
    <Router>
      <nav style={navbarStyle}>
        <ul style={isMobile ? mobileNavLinksStyle : navLinksStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/skills" style={linkStyle}>Skills</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const navbarStyle = {
  backgroundColor: '#17252A',
  padding: '1rem',
  width: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
};

// Style for desktop navigation
const navLinksStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-around',
  padding: 0,
  margin: 0,
};

// Style for mobile navigation (stacked vertically)
const mobileNavLinksStyle = {
  ...navLinksStyle, // Inherit the desktop style
  flexDirection: 'column', // Stack links on mobile
  alignItems: 'center',
};

const linkStyle = {
  color: '#FEFFFF',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '0.5rem',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '80vh',
  backgroundColor: '#DEF2F1',
  padding: '1rem',
};

export default App;
