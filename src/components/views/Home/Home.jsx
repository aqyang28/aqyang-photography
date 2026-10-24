import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

import portraitImg from '../../../images/portrait.jpg';
import sportImg from '../../../images/sport.jpg';
import travelImg from '../../../images/travel.jpg';
import videoImg from '../../../images/video.jpg';

const images = [
  {
    src: portraitImg,
    title: 'Portraits',
    alt: 'Arecent college graduate in a white button down shirt.'
  },
  {
    src: sportImg,
    title: 'Sports',
    alt: "A NC State women's basketball player Aziaha James shooting a free throw."
  },
  {
    src: travelImg,
    title: 'Travel',
    alt: 'A boat tour guide sailing through the canals of Zhujiajiao, China.'
  },
  {
    src: videoImg,
    title: 'Video',
    alt: 'A member of UNC Psalm 100 sings into a microphone.'
  }
];

export default function Home() {
  const [ready, setReady] = useState(() => Array(images.length).fill(false));
  const [errored, setErrored] = useState(() => Array(images.length).fill(false));

  const markReady = (idx) => {
    setReady((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  const revealWhenDecoded = (idx, node) => {
    if (!node) return;
    const decoded = typeof node.decode === 'function' ? node.decode() : Promise.resolve();
    decoded.then(() => {
      if (node.isConnected) markReady(idx);
    }).catch(() => {
      if (node.isConnected && node.naturalHeight > 0) markReady(idx);
    });
  };

  const handleError = (idx) => {
    setErrored((prev) => {
      if (prev[idx]) return prev;
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section className="portfolio-grid">
      {images.map((img, idx) => (
        <div className="portfolio-item" key={img.title}>
          <NavLink to={`/${img.title.toLowerCase()}`} className="portfolio-image-link">
            <div className={`portfolio-image-container${ready[idx] ? ' is-ready' : ''}`}>
              {errored[idx] ? (
                <div className="portfolio-image-alt">{img.alt}</div>
              ) : (
                <>
                  <img
                    ref={(node) => revealWhenDecoded(idx, node)}
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
