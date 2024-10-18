import React from 'react';

const SubmissionSuccess = ({ formData }) => {
  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>Thank You, {formData.name}!</h1>
      <p>Your message has been sent successfully. We will get back to you soon.</p>
      <div style={detailsStyle}>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Message:</strong> {formData.message}</p>
      </div>
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

const detailsStyle = {
  marginTop: '1.5rem',
  backgroundColor: '#DEF2F1',
  padding: '1rem',
  borderRadius: '5px',
};

export default SubmissionSuccess;
