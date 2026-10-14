import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  // Custom domain on GitHub Pages; public/CNAME holds the same name.
  site: 'https://hacktheplains.org',
  // The guide was briefly published as /rules.
  redirects: { '/rules': '/guide' },
  vite: { plugins: [yaml()] },
});
