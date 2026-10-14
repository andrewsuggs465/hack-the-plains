// Prefixes site-relative paths with the base path, if one is set in
// astro.config.mjs. With the custom domain there is none and paths pass through.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => (path?.startsWith('/') ? base + path : path);
export const isHome = (pathname: string) => ['', '/'].includes(pathname.slice(base.length));
