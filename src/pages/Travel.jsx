import React from 'react';

export default function Travel() {
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
          Travel
        </h1>
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          Carrying a camera when traveling keeps me on my toes. It's exciting how even when you're going to a renowned tourist destination, you never actually know what you're going to see until you get there. Below are some of my favorite photos taken on my travels!
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
            alt="Travel 1"
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
            alt="Travel 2"
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
            alt="Travel 3"
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
            alt="Travel 4"
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
            alt="Travel 5"
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
            alt="Travel 6"
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
            alt="Travel 7"
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
            alt="Travel 8"
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
            alt="Travel 9"
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
            alt="Travel 11"
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
            alt="Travel 12"
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
            alt="Travel 13"
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
            alt="Travel 14"
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