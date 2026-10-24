import React from 'react';
import ColumnGallery from '../../ColumnGallery';
import { portraitsPhotos } from '../../../data/portraits';
import '../styles.css';

export default function Portraits() {
  return (
    <div className="page-container">
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

      <section className="page-images-section page-images-section--masonry">
        <ColumnGallery photos={portraitsPhotos} folder="portraits" />
      </section>
    </div>
  );
}
