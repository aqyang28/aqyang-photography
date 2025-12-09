import React from 'react';
import FadeInImage from '../components/FadeInImage';
import './styles.css';

export default function Sports() {
  return (
    <div className="page-container">
      <section className="page-text-section">
        <h1>Sports</h1>
        <p>
          I love the action and emotion that comes with photographing sports as well as the creative liberty you have in editing to elevate your work—it's definitely the medium I want to pursue most heavily in the coming years. Below is a collection of photos I have taken at sports events!
        </p>
      </section>

      <div className="page-divider" />
      
      <section className="page-images-section">
        <div className="page-grid page-grid-16-rows">
          <FadeInImage src="src/images/sports/sp1.jpg" alt="Sports 1" />
          <FadeInImage src="src/images/sports/sp2.jpg" alt="Sports 2" />
          <FadeInImage src="src/images/sports/sp3.jpg" alt="Sports 3" />
          <FadeInImage src="src/images/sports/sp4.jpg" alt="Sports 4" />
          <FadeInImage src="src/images/sports/sp5.jpg" alt="Sports 5" />
          <FadeInImage src="src/images/sports/sp6.jpg" alt="Sports 6" />
          <FadeInImage src="src/images/sports/sp7.jpg" alt="Sports 7" />
          <FadeInImage src="src/images/sports/sp8.jpg" alt="Sports 8" />
          <FadeInImage src="src/images/sports/sp9.jpg" alt="Sports 9" />
          <FadeInImage src="src/images/sports/sp10.jpg" alt="Sports 10" />
          <FadeInImage src="src/images/sports/sp11.jpg" alt="Sports 11" />
          <FadeInImage src="src/images/sports/sp12.jpg" alt="Sports 12" />
          <FadeInImage src="src/images/sports/sp13.jpg" alt="Sports 13" />
          <FadeInImage src="src/images/sports/sp14.jpg" alt="Sports 14" />
          <FadeInImage src="src/images/sports/sp15.jpg" alt="Sports 15" />
          <FadeInImage src="src/images/sports/sp18.jpg" alt="Sports 16" />
          <FadeInImage src="src/images/sports/sp16.jpg" alt="Sports 17" />
          <FadeInImage src="src/images/sports/sp17.jpg" alt="Sports 18" />
          <FadeInImage src="src/images/sports/sp19.jpg" alt="Sports 19" />
          <FadeInImage src="src/images/sports/sp20.jpg" alt="Sports 20" />
          <FadeInImage src="src/images/sports/sp34.jpg" alt="Sports 21" />
          <FadeInImage src="src/images/sports/sp21.jpg" alt="Sports 34" />
          <FadeInImage src="src/images/sports/sp35.jpg" alt="Sports 35" />
          <FadeInImage src="src/images/sports/sp36.jpg" alt="Sports 36" />
          <FadeInImage src="src/images/sports/sp22.jpg" alt="Sports 22" />
          <FadeInImage src="src/images/sports/sp23.jpeg" alt="Sports 23" />
          <FadeInImage src="src/images/sports/sp24.jpeg" alt="Sports 24" />
          <FadeInImage src="src/images/sports/sp25.jpeg" alt="Sports 25" />
          <FadeInImage src="src/images/sports/sp26.jpeg" alt="Sports 26" />
          <FadeInImage src="src/images/sports/sp27.jpeg" alt="Sports 27" />
          <FadeInImage src="src/images/sports/sp28.jpg" alt="Sports 28" />
          <FadeInImage src="src/images/sports/sp29.jpg" alt="Sports 29" />
          <FadeInImage src="src/images/sports/sp30.jpg" alt="Sports 30" />
          <FadeInImage src="src/images/sports/sp31.jpg" alt="Sports 31" />
          <FadeInImage src="src/images/sports/sp32.jpg" alt="Sports 32" />
          <FadeInImage src="src/images/sports/sp33.jpg" alt="Sports 33" />

          <FadeInImage
            src="src/images/sports/sp_v1.jpg"
            alt="Sports Vertical 1"
            style={{ gridColumn: '1 / 2', gridRow: '13 / 15' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v2.jpeg"
            alt="Sports Vertical 2"
            style={{ gridColumn: '2 / 3', gridRow: '13 / 15' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v0.jpg"
            alt="Sports Vertical 3"
            style={{ gridColumn: '3 / 4', gridRow: '13 / 15' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v3.jpg"
            alt="Sports Vertical 4"
            style={{ gridColumn: '1 / 2', gridRow: '15 / 17' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v4.jpg"
            alt="Sports Vertical 5"
            style={{ gridColumn: '2 / 3', gridRow: '15 / 17' }}
          />
          <FadeInImage
            src="src/images/sports/sp_v5.jpg"
            alt="Sports Vertical 6"
            style={{ gridColumn: '3 / 4', gridRow: '15 / 17' }}
          />
        </div>
      </section>
    </div>
  );
} 