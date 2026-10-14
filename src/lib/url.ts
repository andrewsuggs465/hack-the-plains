// Prefixes site-relative paths with the base path, so links work both at
// andrewsuggs465.github.io/hack-the-plains/ and later at a bare domain.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => (path?.startsWith('/') ? base + path : path);
export const isHome = (pathname: string) => ['', '/'].includes(pathname.slice(base.length));
