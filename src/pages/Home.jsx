import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const images = [
  {
    src: 'src/images/portrait.jpg',
    title: 'Portraits',
    alt: 'Portraits'
  },
  {
    src: 'src/images/sport.jpg',
    title: 'Sports',
    alt: 'Sports'
  },
  {
    src: 'src/images/travel.jpg',
    title: 'Travel',
    alt: 'Travel'
  },
  {
    src: 'src/images/video.jpg',
    title: 'Video',
    alt: 'Photograph of a girl singing into a microphone.'
  }
];

export default function Home() {
  const [errored, setErrored] = useState(Array(images.length).fill(false));

  // Reset error state if image src changes
  useEffect(() => {
    setErrored(Array(images.length).fill(false));
    // eslint-disable-next-line
  }, images.map(img => img.src));

  const handleError = idx => {
    setErrored(prev => {
      const copy = [...prev];
      copy[idx] = true;
      return copy;
    });
  };

  return (
    <section className="portfolio-grid">
      {images.map((img, idx) => (
        <div className="portfolio-item" key={idx}>
          <NavLink 
            to={`/${img.title.toLowerCase()}`} 
            className="portfolio-image-link"
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div className="portfolio-image-container">
              {errored[idx] ? (
                <div className="portfolio-image-alt">{img.alt}</div>
              ) : (
                <>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="portfolio-image"
                    onError={() => handleError(idx)}
                  />
                  <div className="portfolio-overlay">
                    <h2 className="portfolio-overlay-text">{img.title}</h2>
                  </div>
                </>
              )}
            </div>
          </NavLink>
        </div>
      ))}
    </section>
  );
} 