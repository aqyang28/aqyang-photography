import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function githubPagesSpaFallback() {
  return {
    name: 'github-pages-404-fallback',
    closeBundle() {
      const dist = resolve('dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
  };
}

export default defineConfig({
  base: '/aqyang-photography/',
  plugins: [react(), githubPagesSpaFallback()],
});