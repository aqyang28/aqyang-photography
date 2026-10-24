import React from 'react';
import ColumnGallery from '../../ColumnGallery';
import { travelPhotos } from '../../../data/travel';
import '../styles.css';

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

      <section className="page-images-section page-images-section--masonry">
        <ColumnGallery photos={travelPhotos} folder="travel" />
      </section>
    </div>
  );
}
