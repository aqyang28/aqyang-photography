import React from 'react';
import './styles.css';

export default function Video() {
  return (
    <div className="video-container">
      <section className="page-text-section">
        <h1>Video</h1>
        <p>
          Below are some video recordings that I have created. Working with UNC Psalm 100 and learning to navigate Premiere Pro was super fun. I'm excited to explore video production more in the future!
        </p>
      </section>

      <div className="page-divider" />
      
      <section className="video-section">
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/nwCYJblsIx4"
            title="Video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/wBc6AxSJ5Pg"
            title="Video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/pMlMnvwIr0Q"
            title="Video 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
} 