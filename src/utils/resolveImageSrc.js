const resolvedSrcCache = new Map();

/** Resolve a site-relative image path (e.g. `src/images/sports/sp1.jpg`) to a URL. */
export function resolveImageSrc(source) {
  if (!source) return source;
  if (/^(https?:)?\/\//i.test(source) || source.startsWith('data:')) return source;
  if (source.startsWith('/')) return source;

  const cleaned = source.replace(/^src\//, '');
  const cached = resolvedSrcCache.get(cleaned);
  if (cached) return cached;

  const resolved = new URL(`../${cleaned}`, import.meta.url).href;
  resolvedSrcCache.set(cleaned, resolved);
  return resolved;
}
