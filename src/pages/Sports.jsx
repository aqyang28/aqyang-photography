import React from 'react';

export default function Sports() {
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
          Sports
        </h1>
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          I grew up playing sports, and seriously, what's not to love about them. I love the action and emotion that comes with photographing sports as well as the creative liberty you have in editing to elevate your work. It's definitely the genre I want to pursue most heavily in the coming years, and I would love to get involved with any UNC athletics media team that is willing to have me! Below is a collection of photos I have taken at sports events!
        </p>
      </section>

      {/* Divider */}
      <div style={{
        width: '137.5%',
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 -18.75% 3rem -18.75%'
      }} />
      
      {/* Images Section */}
      <section style={{
        width: '170%',
        margin: '0 -35% 0 -35%',
        padding: '0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '829px 360px 360px',
          gap: '1.0125rem',
          maxWidth: '100%',
          padding: '0 0.50625rem 0 0.50625rem'
        }}>
          {/* Row 1 - Portrait Orientation */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Sports 1"
            style={{
              gridColumn: '1 / 2',
              gridRow: '1 / 2',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_vert.jpg"
            alt="Sports 2"
            style={{
              gridColumn: '2 / 3',
              gridRow: '1 / 2',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_vert.jpg"
            alt="Sports 3"
            style={{
              gridColumn: '3 / 4',
              gridRow: '1 / 2',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          {/* Row 2 */}
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 4"
            style={{
              gridColumn: '1 / 2',
              gridRow: '2 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 5"
            style={{
              gridColumn: '2 / 3',
              gridRow: '2 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 6"
            style={{
              gridColumn: '3 / 4',
              gridRow: '2 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          {/* Row 3 */}
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 7"
            style={{
              gridColumn: '1 / 2',
              gridRow: '3 / 4',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 8"
            style={{
              gridColumn: '2 / 3',
              gridRow: '3 / 4',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 9"
            style={{
              gridColumn: '3 / 4',
              gridRow: '3 / 4',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>
      </section>

      {/* Second Images Section - Dynamic Layout */}
      <section style={{
        width: '170%',
        margin: '0 -35% 0 -35%',
        padding: '0',
        marginTop: '1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '420px 420px',
          gap: '1.0125rem',
          maxWidth: '100%',
          padding: '0 0.50625rem 0 0.50625rem'
        }}>
          {/* Left Column - Single Portrait */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Sports 11"
            style={{
              gridColumn: '1 / 2',
              gridRow: '1 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Middle Column - Two Landscape Images Stacked */}
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 12"
            style={{
              gridColumn: '2 / 3',
              gridRow: '1 / 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Sports 13"
            style={{
              gridColumn: '2 / 3',
              gridRow: '2 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Right Column - Single Portrait */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Sports 14"
            style={{
              gridColumn: '3 / 4',
              gridRow: '1 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </section>
    </div>
  );
} 