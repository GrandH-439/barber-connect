import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1519206596317-91382b5f8bd1?ixlib=rb-4.0.3'
  ];

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="section-title">Our Work</h1>
        <p className="gallery-subtitle">Check out our latest haircuts and styles</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Barber work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;