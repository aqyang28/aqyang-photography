import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const images = [
  {
    src: 'src/images/portrait.jpg',
    title: 'Portraits',
    alt: 'A portrait of a recent college graduate in a white button down shirt.'
  },
  {
    src: 'src/images/sport.jpg',
    title: 'Sports',
    alt: "A photo of a NC State women's basketball player Aziaha James shooting a free throw."
  },
  {
    src: 'src/images/travel.jpg',
    title: 'Travel',
    alt: 'A photo of a boat tour guide sailing through the canals of Zhujiajiao, China.'
  },
  {
    src: 'src/images/video.jpg',
    title: 'Video',
    alt: 'A photo of a girl singing into a microphone.'
  }
];

export default function Home() {
  const [errored, setErrored] = useState(Array(images.length).fill(false));

  useEffect(() => {
    setErrored(Array(images.length).fill(false));
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