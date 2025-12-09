import React from 'react';
import FadeInImage from '../components/FadeInImage';
import './styles.css';

export default function Travel() {
  return (
    <div className="page-container">
      <section className="page-text-section">
        <h1>Travel</h1>
        <p>
          Carrying a camera when traveling keeps me on my toes. It's exciting how even when you're going to a renowned tourist destination, you never actually know what you're going to see until you get there. Below are some of my favorite photos taken on my travels!
        </p>
      </section>

      <div className="page-divider" />
      
      <section className="page-images-section">
        <div className="page-grid page-grid-11-rows">
          <FadeInImage
            src="src/images/travel/t1.jpeg"
            alt="Travel 1"
            style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t3.jpeg"
            alt="Travel 2"
            style={{ gridColumn: '2 / 3', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t2.jpeg"
            alt="Travel 3"
            style={{ gridColumn: '3 / 4', gridRow: '1 / 3' }}
          />
          <FadeInImage
            src="src/images/travel/t_h1.jpg"
            alt="Travel 4"
            style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}
          />
          <FadeInImage
            src="src/images/travel/t_h2.jpg"
            alt="Travel 5"
            style={{ gridColumn: '1 / 2', gridRow: '4 / 5' }}
          />
          <FadeInImage
            src="src/images/travel/t6.jpg"
            alt="Travel 6"
            style={{ gridColumn: '2 / 3', gridRow: '3 / 5' }}
          />
          <FadeInImage
            src="src/images/travel/t7.jpg"
            alt="Travel 7"
            style={{ gridColumn: '3 / 4', gridRow: '3 / 5' }}
          />

          <FadeInImage
            src="src/images/travel/t4.jpeg"
            alt="Travel 8"
            style={{ gridColumn: '1 / 2', gridRow: '5 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t_h5.jpeg"
            alt="Travel 9"
            style={{ gridColumn: '2 / 3', gridRow: '5 / 6' }}
          />
          <FadeInImage
            src="src/images/travel/t6.jpeg"
            alt="Travel 10"
            style={{ gridColumn: '3 / 4', gridRow: '5 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t_h6.jpeg"
            alt="Travel 11"
            style={{ gridColumn: '2 / 3', gridRow: '6 / 7' }}
          />
          <FadeInImage
            src="src/images/travel/t0.jpg"
            alt="Travel 12"
            style={{ gridColumn: '1 / 2', gridRow: '7 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t_h3.jpeg"
            alt="Travel 13"
            style={{ gridColumn: '3 / 4', gridRow: '7 / 8' }}
          />
          <FadeInImage
            src="src/images/travel/t7.jpeg"
            alt="Travel 14"
            style={{ gridColumn: '2 / 3', gridRow: '7 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t_h9.jpeg"
            alt="Travel 15"
            style={{ gridColumn: '3 / 4', gridRow: '8 / 9' }}
          />
          <FadeInImage
            src="src/images/travel/t9.jpeg"
            alt="Travel 16"
            style={{ gridColumn: '1 / 2', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/travel/t_h7.jpeg"
            alt="Travel 17"
            style={{ gridColumn: '2 / 3', gridRow: '9 / 10' }}
          />
          <FadeInImage
            src="src/images/travel/t8.jpeg"
            alt="Travel 18"
            style={{ gridColumn: '3 / 4', gridRow: '9 / 11' }}
          />
          <FadeInImage
            src="src/images/travel/t_h8.jpeg"
            alt="Travel 19"
            style={{ gridColumn: '2 / 3', gridRow: '10 / 11' }}
          />
        </div>
      </section>
    </div>
  );
}
