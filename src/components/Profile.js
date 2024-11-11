import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles.css';

const Profile = ({ user }) => {
  const [responseMessage, setResponseMessage] = useState("");

  const handleButtonClick = (response) => {
    setResponseMessage(`Your response as "${response}" has been submitted.`);
    setTimeout(() => setResponseMessage(""), 3000);
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <p className="user-name">{user?.name || "Guest"}</p> {/* Display user name if available */}
      <p>I am a...</p>
      <div className="profile-buttons">
        <button className="profile-button" onClick={() => handleButtonClick("International Student")}>
          International Student
        </button>
        <button className="profile-button" onClick={() => handleButtonClick("Grieving Pet Owner")}>
          Grieving Pet Owner
        </button>
        <button className="profile-button" onClick={() => handleButtonClick("Vet Student")}>
          Vet Student
        </button>
        <button className="profile-button" onClick={() => handleButtonClick("Other")}>
          Other
        </button>
      </div>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      
      {/* Social Buttons */}
      <a href="https://www.instagram.com/pawfectmatchpt/profilecard/?igsh=MWI0ZzlrODFxcW5uOA==" target="_blank" rel="noopener noreferrer" className="social-button">
        <FontAwesomeIcon icon={faInstagram} /> Follow our Instagram!
      </a>
      <a href="https://chat.whatsapp.com/FQVSsppUEtO0KVVpsuhNM0" target="_blank" rel="noopener noreferrer" className="social-button">
        <FontAwesomeIcon icon={faWhatsapp} /> Join our WhatsApp Community!
      </a>
      <a href="https://www.gofundme.com/f/pawfect-match-the-bridge-between-volunteers-and-shelters?utm_source=copy_link&utm_medium=customer&utm_campaign=man_sharesheet_dash&attribution_id=sl:0369ab55-a1af-405e-9d87-da126e7f0657" target="_blank" rel="noopener noreferrer" className="social-button">
        <FontAwesomeIcon icon={faHeart} /> Click for cute dog pics!
      </a>
    </div>
  );
};

export default Profile;
