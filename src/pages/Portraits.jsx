import React from 'react';
import FadeInImage from '../components/FadeInImage';
import './styles.css';

export default function Portraits() {
  return (
    <div className="page-container">
      {/* Text Section */}
      <section className="page-text-section">
        <h1>Portraits</h1>
        
        <p>
          To me, the greatest gift of shooting portraits is seeing other people smile. As a photographer, I will never take for granted the opportunity to smile alongside others.
        </p>
        
        <p>
          Also, I cannot thank my friend Kevin enough for taking me under his wing and teaching me techniques when I was just starting out. Check out his amazing work here: <a href="https://www.instagram.com/kevins.shots/" target="_blank" rel="noopener noreferrer">@kevins.shots</a>!
        </p>

        <p>
          Below is a collection of graduation photos, family portraits, and individuals portraits that I have taken:
        </p>
      </section>

      <div className="page-divider" />
      
      <section className="page-images-section">
        <div className="page-grid page-grid-12-rows">
          <FadeInImage
            src="src/images/portraits/portrait_vert1.jpg"
            alt="Portrait 1"
            style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz1.jpg"
            alt="Portrait 2"
            style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert2.jpeg"
            alt="Portrait 3"
            style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz4.jpeg"
            alt="Portrait 4"
            style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert3.jpg"
            alt="Portrait 5"
            style={{ gridColumn: '2 / 3', gridRow: '2 / 4' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz3.jpeg"
            alt="Portrait 6"
            style={{ gridColumn: '3 / 4', gridRow: '3 / 4' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_vert4.jpg"
            alt="Portrait 7"
            style={{ gridColumn: '1 / 2', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert6.jpg"
            alt="Portrait 8"
            style={{ gridColumn: '2 / 3', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert5.jpg"
            alt="Portrait 9"
            style={{ gridColumn: '3 / 4', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert7.jpeg"
            alt="Portrait 10"
            style={{ gridColumn: '1 / 2', gridRow: '6 / 8' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert12.jpg"
            alt="Portrait 11"
            style={{ gridColumn: '2 / 3', gridRow: '6 / 8' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert13.jpg"
            alt="Portrait 12"
            style={{ gridColumn: '3 / 4', gridRow: '6 / 8' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_horiz2.jpeg"
            alt="Portrait 13"
            style={{ gridColumn: '1 / 2', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert17.jpeg"
            alt="Portrait 14"
            style={{ gridColumn: '2 / 3', gridRow: '8 / 10' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz5.jpg"
            alt="Portrait 15"
            style={{ gridColumn: '3 / 4', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert8.jpeg"
            alt="Portrait 16"
            style={{ gridColumn: '1 / 2', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz6.jpg"
            alt="Portrait 17"
            style={{ gridColumn: '2 / 3', gridRow: '10 / 11' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert16.jpg"
            alt="Portrait 18"
            style={{ gridColumn: '3 / 4', gridRow: '9 / 11' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_vert10.jpg"
            alt="Portrait 19"
            style={{ gridColumn: '1 / 2', gridRow: '11 / 13' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert11.jpg"
            alt="Portrait 20"
            style={{ gridColumn: '2 / 3', gridRow: '11 / 13' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert14.jpg"
            alt="Portrait 21"
            style={{ gridColumn: '3 / 4', gridRow: '11 / 13' }}
          />
        </div>
      </section>
    </div>
  );
} 