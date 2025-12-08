import React from 'react';
import { useInView } from 'react-intersection-observer';

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

export default function Sports() {
  return (
    <div>
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

      <div style={{
        width: '137.5%',
        height: '3.75px',
        backgroundColor: '#e0e0e0',
        margin: '0 -18.75% 3rem -18.75%'
      }} />
      
      <section style={{
        width: '170%',
        margin: '0 -35% 0 -35%',
        padding: '0'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(16, 360px)',
          rowGap: '1.0125rem',
          columnGap: '1.0125rem',
          maxWidth: '100%',
          padding: '0 1.75rem 0 1.75rem'
        }}>
          <FadeInImage src="src/images/sports/sp1.jpg" alt="Sports 1" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp2.jpg" alt="Sports 2" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp3.jpg" alt="Sports 3" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp4.jpg" alt="Sports 4" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp5.jpg" alt="Sports 5" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp6.jpg" alt="Sports 6" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp7.jpg" alt="Sports 7" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp8.jpg" alt="Sports 8" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp9.jpg" alt="Sports 9" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp10.jpg" alt="Sports 10" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp11.jpg" alt="Sports 11" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp12.jpg" alt="Sports 12" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp13.jpg" alt="Sports 13" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp14.jpg" alt="Sports 14" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp15.jpg" alt="Sports 15" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp18.jpg" alt="Sports 16" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp16.jpg" alt="Sports 17" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp17.jpg" alt="Sports 18" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp19.jpg" alt="Sports 19" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp20.jpg" alt="Sports 20" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp34.jpg" alt="Sports 21" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp21.jpg" alt="Sports 34" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp35.jpg" alt="Sports 35" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp36.jpg" alt="Sports 36" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp22.jpg" alt="Sports 22" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp23.jpeg" alt="Sports 23" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp24.jpeg" alt="Sports 24" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp25.jpeg" alt="Sports 25" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp26.jpeg" alt="Sports 26" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp27.jpeg" alt="Sports 27" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp28.jpg" alt="Sports 28" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp29.jpg" alt="Sports 29" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp30.jpg" alt="Sports 30" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp31.jpg" alt="Sports 31" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp32.jpg" alt="Sports 32" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <FadeInImage src="src/images/sports/sp33.jpg" alt="Sports 33" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

          <FadeInImage
            src="src/images/sports/sp_v1.jpg"
            alt="Sports Vertical 1"
            style={{ gridColumn: '1 / 2', gridRow: '13 / 15', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v2.jpeg"
            alt="Sports Vertical 2"
            style={{ gridColumn: '2 / 3', gridRow: '13 / 15', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v0.jpg"
            alt="Sports Vertical 3"
            style={{ gridColumn: '3 / 4', gridRow: '13 / 15', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v3.jpg"
            alt="Sports Vertical 4"
            style={{ gridColumn: '1 / 2', gridRow: '15 / 17', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v4.jpg"
            alt="Sports Vertical 5"
            style={{ gridColumn: '2 / 3', gridRow: '15 / 17', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v5.jpg"
            alt="Sports Vertical 6"
            style={{ gridColumn: '3 / 4', gridRow: '15 / 17', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>
    </div>
  );
} 