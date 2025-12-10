import React from 'react';
import { useInView } from 'react-intersection-observer';

function resolveSrc(source) {
  if (!source) return source;
  // Allow absolute/http/data URLs through
  if (/^(https?:)?\/\//i.test(source) || source.startsWith('data:')) return source;
  // Allow already-rooted paths
  if (source.startsWith('/')) return source;
  // Resolve relative project asset (strip leading src/)
  const cleaned = source.replace(/^src\//, '');
  return new URL(`../${cleaned}`, import.meta.url).href;
}

export default function FadeInImage({ src, alt, style, ...props }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const resolvedSrc = resolveSrc(src);

  return (
    <img
      ref={ref}
      src={resolvedSrc}
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
