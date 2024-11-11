import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import shelters from '../data/shelters';

const ShelterList = () => {
  return (
    
    <div className="shelter-list">
      {shelters.map(shelter => (
        <Link to={`/shelter/${shelter.id}`} key={shelter.id} className="shelter-card">
          <LazyLoadImage
            src={shelter.image} // High-resolution image
            alt={shelter.name}
            effect="blur" // Applies the blur effect while loading
            className="shelter-image"
          />
          <h3>{shelter.name}</h3>
          <p>{shelter.city}</p>
        </Link>
      ))}
      <div class="main-container"></div>
    </div>
  );
};

export default ShelterList;
