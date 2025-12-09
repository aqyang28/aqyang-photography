import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInImage({ src, alt, style, ...props }) {
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
