import React, { useMemo, useSyncExternalStore } from 'react';
import FadeInImage from './FadeInImage';
import './ColumnGallery.css';

function getColumnCount(width) {
  if (width < 540) return 1;
  if (width < 900) return 2;
  return 3;
}

function subscribeToWindowResize(onChange) {
  window.addEventListener('resize', onChange);
  return () => window.removeEventListener('resize', onChange);
}

function useColumnCount() {
  return useSyncExternalStore(
    subscribeToWindowResize,
    () => getColumnCount(window.innerWidth),
    () => 3,
  );
}

export default function ColumnGallery({ photos, folder }) {
  const columnCount = useColumnCount();

  const columns = useMemo(() => {
    const groups = Array.from({ length: columnCount }, () => []);
    photos.forEach((photo, index) => {
      groups[index % columnCount].push(photo);
    });
    return groups;
  }, [photos, columnCount]);

  return (
    <div className="column-grid">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="column-grid-column">
          {column.map((photo, index) => (
            <FadeInImage
              key={`${photo.file}-${index}`}
              src={`src/images/${folder}/${photo.file}`}
              alt={photo.alt}
              className="column-grid-image"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
