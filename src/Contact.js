import React, { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false); // For controlling form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Trigger success message after submission
  };

  // If form is submitted, show the SubmissionSuccess component instead
  if (submitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div style={formGroupStyle}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputBoxStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputBoxStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textAreaStyle}
          />
        </div>
        <button type="submit" style={primaryButtonStyle}>Submit</button>
      </form>
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

const formGroupStyle = {
  marginBottom: '1.5rem',
};

const inputBoxStyle = {
  width: '100%',
  padding: '0.7rem',
  border: '1px solid #3AAFA9',
  borderRadius: '5px',
};

const textAreaStyle = {
  width: '100%',
  padding: '0.7rem',
  border: '1px solid #3AAFA9',
  borderRadius: '5px',
  height: '150px',
  resize: 'none',
};

const primaryButtonStyle = {
  padding: '0.7rem 1.5rem',
  backgroundColor: '#2B7A78',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Contact;
