import React from 'react';

export default function Portraits() {
  return (
    <div>
      {/* Text Section */}
      <section style={{ 
        maxWidth: 722.5,
        margin: '-10px auto 0 auto', // Negative top margin to pull title closer to toolbar
        padding: '0 1rem 2rem 1rem' // Set top padding to 0
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#1a1a1a',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Portraits
        </h1>
        
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '1.5rem',
          textAlign: 'left'
        }}>
          To me, the greatest gift of shooting portraits is seeing other people smile. As a photographer, I will never take for granted the opportunity to smile alongside others.
        </p>
        
        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          Also, I cannot thank my friend Kevin enough for taking me under his wing and teaching me techniques when I was just starting out. Check out his amazing work here (@kevins.shots)!
        </p>

        <p style={{
          fontSize: '0.95rem',
          lineHeight: '1.6',
          color: '#333',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          Below is a collection of graduation photos, family portraits, and individuals portraits that I have taken:
        </p>
      </section>

      {/* Divider */}
      <div style={{
        width: '137.5%', // Increased from 125% to 137.5% (1.1x)
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 -18.75% 3rem -18.75%' // Adjusted negative margins to center the wider divider
      }} />
      
      {/* Images Section */}
      <section style={{
        width: '170%', // Increased from 160% to extend closer to screen edges
        margin: '0 -35% 0 -35%', // Increased negative margins to bring images closer to screen edge
        padding: '0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal columns
          gridTemplateRows: '829px 360px 360px', // First row increased by 1.2x (from 691px to 829px), others remain same
          gap: '1.0125rem', // Reduced from 1.125rem to 1.0125rem (0.9x)
          maxWidth: '100%',
          padding: '0 0.50625rem 0 0.50625rem' // Reduced edge padding by half (0.5x of 1.0125rem)
        }}>
          {/* Row 1 - Portrait Orientation */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Portrait 1"
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
            alt="Portrait 2"
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
            alt="Portrait 3"
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
            alt="Portrait 4"
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
            alt="Portrait 5"
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
            alt="Portrait 6"
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
            alt="Portrait 7"
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
            alt="Portrait 8"
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
            alt="Portrait 9"
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
        width: '170%', // Increased from 160% to extend closer to screen edges
        margin: '0 -35% 0 -35%', // Increased negative margins to bring images closer to screen edge
        padding: '0',
        marginTop: '1.5rem' // Added proper spacing to match the gap between other images
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '420px 420px', // Two tall rows for middle images
          gap: '1.0125rem',
          maxWidth: '100%',
          padding: '0 0.50625rem 0 0.50625rem'
        }}>
          {/* Left Column - Single Portrait */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Portrait 11"
            style={{
              gridColumn: '1 / 2',
              gridRow: '1 / 3', // Spans both rows, stays vertical
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Middle Column - Two Landscape Images Stacked */}
          <img
            src="src/images/sample_horiz.jpg"
            alt="Portrait 12"
            style={{
              gridColumn: '2 / 3',
              gridRow: '1 / 2', // Top image
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          <img
            src="src/images/sample_horiz.jpg"
            alt="Portrait 13"
            style={{
              gridColumn: '2 / 3',
              gridRow: '2 / 3', // Bottom image
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Right Column - Single Portrait */}
          <img
            src="src/images/sample_vert.jpg"
            alt="Portrait 14"
            style={{
              gridColumn: '3 / 4',
              gridRow: '1 / 3', // Spans both rows, stays vertical
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