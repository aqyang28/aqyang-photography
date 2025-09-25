import React from 'react';
import { useInView } from 'react-intersection-observer';

// Helper component for fade-in images
function FadeInImage({ src, alt, style, ...props }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
        ...style,
      }}
      {...props}
    />
  );
}

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
        width: '100%', // Reset to normal width
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 auto 3rem auto' // Center the divider
      }} />
      
      {/* Images Section */}
      <section style={{
        width: '100%', // Reset to normal width
        margin: '0 auto', // Center the section
        padding: '0' // Remove padding to match divider alignment
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal columns
          gridTemplateRows: '571px 248px 248px', // Increased by 15% (497px->571px, 216px->248px)
          gap: '0.75rem', // Keep exact same spacing
          maxWidth: '100%',
          padding: '0 2rem', // Add padding to grid container to match text section
          justifyItems: 'center', // Center each grid item horizontally
          alignItems: 'center' // Center each grid item vertically
        }}>
          {/* Row 1 - Portrait Orientation */}
          <FadeInImage
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
          
          <FadeInImage
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
          
          <FadeInImage
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
          <FadeInImage
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
          
          <FadeInImage
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
          
          <FadeInImage
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
          <FadeInImage
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
          
          <FadeInImage
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
          
          <FadeInImage
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
        width: '100%', // Reset to normal width
        margin: '0 auto', // Center the section
        padding: '0', // Remove padding to match divider alignment
        marginTop: '0.75rem' // Match the gap between images in the grid
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: '290px 290px', // Increased by 15% (252px->290px)
          gap: '0.75rem', // Keep exact same spacing
          maxWidth: '100%',
          padding: '0 2rem', // Add padding to grid container to match text section
          justifyItems: 'center', // Center each grid item horizontally
          alignItems: 'center' // Center each grid item vertically
        }}>
          {/* Left Column - Single Portrait */}
          <FadeInImage
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
          <FadeInImage
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
          
          <FadeInImage
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
          <FadeInImage
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