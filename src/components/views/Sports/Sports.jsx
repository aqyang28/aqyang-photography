import React from 'react';
import ColumnGallery from '../../ColumnGallery';
import { sportsPhotos } from '../../../data/sports';
import '../styles.css';

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

      <section className="page-images-section page-images-section--masonry">
        <ColumnGallery photos={sportsPhotos} folder="sports" />
      </section>
    </div>
  );
}
