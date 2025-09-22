import React from 'react';

export default function Video() {
  return (
    <div>
      {/* Text Section */}
      <section style={{ 
        maxWidth: 722.5,
        margin: '-10px auto 0 auto',
        padding: '0 1rem 2rem 1rem'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#1a1a1a',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Video
        </h1>
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          Below are some video recordings that I have created. Working with UNC Psalm 100 and learning to navigate Premiere Pro was super fun—I'm excited to explore video production more in the future!
        </p>
      </section>

      {/* Divider */}
      <div style={{
        width: '137.5%',
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 -18.75% 3rem -18.75%'
      }} />
      
      {/* 2x3 Grid of Horizontal Images */}
      <section style={{
        width: '100%',
        margin: '0 auto',
        padding: '0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '360px 360px',
          gap: '1.0125rem',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 0.50625rem 0 0.50625rem'
        }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LwYOQl1vptg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%' }}
          ></iframe>
          <img
            src="src/images/sample_horiz.jpg"
            alt="Video 2"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <img
            src="src/images/sample_horiz.jpg"
            alt="Video 3"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <img
            src="src/images/sample_horiz.jpg"
            alt="Video 4"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <img
            src="src/images/sample_horiz.jpg"
            alt="Video 5"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          <img
            src="src/images/sample_horiz.jpg"
            alt="Video 6"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </section>
    </div>
  );
} 