import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { resolveImageSrc } from '../utils/resolveImageSrc';
import './FadeInImage.css';

const VISIBLE_RATIO = 0.12;
const revealed = new WeakSet();
let observer;

function reveal(el) {
  if (!el) return false;
  if (revealed.has(el)) {
    el.classList.add('is-inview');
    return true;
  }
  if (!el.complete || el.naturalHeight <= 0) return false;

  const rect = el.getBoundingClientRect();
  if (rect.height <= 1) return false;
  const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  if (visible / rect.height < VISIBLE_RATIO) return false;

  revealed.add(el);
  // add animmation selector for fade-in animation
  el.classList.add('is-inview');
  observer?.unobserve(el);
  return true;
}

function ensureObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= VISIBLE_RATIO) reveal(entry.target);
    });
  }, { threshold: VISIBLE_RATIO });
  return observer;
}

function watchFadeIn(el) {
  if (revealed.has(el)) {
    // re-add inview to prevent reanimation
    el.classList.add('is-inview');
    return () => {};
  }
  const io = ensureObserver();
  io.observe(el);
  reveal(el);
  return () => io.unobserve(el);
}

export default function FadeInImage({ src, alt, width, height, style, className, onLoad, onError, ...props }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && revealed.has(el)) el.classList.add('is-inview');
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    return watchFadeIn(el);
  }, []);

  return (
    <img
      {...props}
      ref={ref}
      src={resolveImageSrc(src)}
      alt={alt}
      {...(width && height ? { width, height } : {})}
      className={className ? `fade-in-image ${className}` : 'fade-in-image'}
      style={{ width: '100%', height: 'auto', ...style }}
      onLoad={(event) => {
        if (ref.current) reveal(ref.current);
        onLoad?.(event);
      }}
      onError={(event) => {
        const el = ref.current;
        if (el) {
          revealed.add(el);
          // default to load image on err
          el.classList.add('is-inview');
          observer?.unobserve(el);
        }
        onError?.(event);
      }}
    />
  );
}
