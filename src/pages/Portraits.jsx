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
            alt="A recent UNC graduate in a white skirt sitting on a bench reading a book. She is surrounded by greenery and is wearing a stole illustrating the Phillipine national flag"
            style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz1.jpg"
            alt="A recent UNC graduate in a white skirt sitting on a bench reading a book."
            style={{ gridColumn: '2 / 3', gridRow: '1 / 2' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert2.jpeg"
            alt="Two UNC students sitting on a bench and smiling at the camera."
            style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz4.jpeg"
            alt="A recent UNC graduate walking through the Kenan Football Stadium at night with the lights on."
            style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert3.jpg"
            alt="A recent UNC graduate wearing a white skirt and smiling at the camera. She is wearing a stole illustrating the Phillipine national flag."
            style={{ gridColumn: '2 / 3', gridRow: '2 / 4' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz3.jpeg"
            alt="A recent UNC graduate walking through the Kenan Football Stadium at night with the lights on. He is on the phone and pointing with his right finger."
            style={{ gridColumn: '3 / 4', gridRow: '3 / 4' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_vert4.jpg"
            alt="A recent UNC graduate in front of a tree with pink flowers in bloom."
            style={{ gridColumn: '1 / 2', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert6.jpg"
            alt="A recent UNC graduate standing between the walls of the Bell Tower."
            style={{ gridColumn: '2 / 3', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert5.jpg"
            alt="A recent UNC graduate smiling between pink flowers."
            style={{ gridColumn: '3 / 4', gridRow: '4 / 6' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert7.jpeg"
            alt="A recent UNC graduate poses between the arches of the Bell Tower."
            style={{ gridColumn: '1 / 2', gridRow: '6 / 8' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert12.jpg"
            alt="A recent UNC graduate wearing her graduation gown sits on the turf of Kenan Football Stadium, looking at the camera."
            style={{ gridColumn: '2 / 3', gridRow: '6 / 8' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert13.jpg"
            alt="A recent UNC graduate wearing her graduation gown smiles at the camera at the Old Well."
            style={{ gridColumn: '3 / 4', gridRow: '6 / 8' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_horiz2.jpeg"
            alt="A recent UNC graduate wearing his graduation gown fist bumps a worker at The Deli in Chase Dining Hall."
            style={{ gridColumn: '1 / 2', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert17.jpeg"
            alt="A recent UNC graduate wearing his graduation gown poses for a portrait in fron of Hanes Hall."
            style={{ gridColumn: '2 / 3', gridRow: '8 / 10' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz5.jpg"
            alt="Two recent UNC graduates pose for a portrait in front of the Old Well."
            style={{ gridColumn: '3 / 4', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert8.jpeg"
            alt="A recent UNC graduate wearing his graduation gown drinks from the fountain at the Old Well with his family watching."
            style={{ gridColumn: '1 / 2', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_horiz6.jpg"
            alt="A recent UNC graduate wearing his graduation gown orders from The Deli in Chase Dining Hall."
            style={{ gridColumn: '2 / 3', gridRow: '10 / 11' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert16.jpg"
            alt="Two recent UNC graduates look at each other and smile."
            style={{ gridColumn: '3 / 4', gridRow: '9 / 11' }}
          />

          <FadeInImage
            src="src/images/portraits/portrait_vert10.jpg"
            alt="A recent UNC graduate wearing her graduation gown reads a newspaper in the stands of Kenan Football Stadium."
            style={{ gridColumn: '1 / 2', gridRow: '11 / 13' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert11.jpg"
            alt="A recent UNC graduate wearing his graduation gown cheers in the stands of Kenan Football Stadium."
            style={{ gridColumn: '2 / 3', gridRow: '11 / 13' }}
          />
          <FadeInImage
            src="src/images/portraits/portrait_vert14.jpg"
            alt="A recent UNC graduate smiles while adjusting his hair."
            style={{ gridColumn: '3 / 4', gridRow: '11 / 13' }}
          />
        </div>
      </section>
    </div>
  );
} 