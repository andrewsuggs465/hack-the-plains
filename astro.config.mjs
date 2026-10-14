import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  // Custom domain on GitHub Pages; public/CNAME holds the same name.
  site: 'https://hacktheplains.org',
  vite: { plugins: [yaml()] },
});
