import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  // GitHub Pages project site for now. When the domain is live, set site to
  // it, delete base, and add public/CNAME containing the domain.
  site: 'https://andrewsuggs465.github.io',
  base: '/hack-the-plains',
  vite: { plugins: [yaml()] },
});
