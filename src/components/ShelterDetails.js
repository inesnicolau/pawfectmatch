import React from 'react';
import { useParams, Link } from 'react-router-dom';
import shelters from '../data/shelters';
import { useNavigate } from 'react-router-dom';

const ShelterDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const shelter = shelters.find(shelter => shelter.id === parseInt(id));

  if (!shelter) return <p>Shelter not found</p>;

  return (
    <div className="shelter-details">
      {/* Simple Back Arrow */}
      <button onClick={() => navigate('/shelter')} className="back-arrow">←</button>


      <img src={shelter.image} alt={shelter.name} className="shelter-detail-image" />
      <h2>{shelter.name}</h2>
      <p><strong>City:</strong> {shelter.city}</p>
      <p><strong>Address:</strong> {shelter.address}</p>
      <p><strong>About:</strong> {shelter.about}</p>
      <p><strong># of Dogs:</strong> {shelter.numDogs}</p>
      <p><strong># of Cats:</strong> {shelter.numCats}</p>
      <p><strong>Types of Volunteering:</strong> {shelter.volunteering.join(', ')}</p>

      {/* Volunteer Button */}
      <Link to={`/volunteer/${shelter.id}`} className="volunteer-button">
        + Volunteer here!
      </Link>
    </div>
  );
};

export default ShelterDetails;
