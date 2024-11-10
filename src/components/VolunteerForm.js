import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    availability: '',
    phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for volunteering!');
    navigate(-1); // Goes back to the previous page after submission
  };

  return (
    <div className="volunteer-form">
      <button onClick={() => navigate(-1)} className="back-arrow">←</button>
      <h2>Volunteer Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Availability:</label>
        <input
          type="date"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
