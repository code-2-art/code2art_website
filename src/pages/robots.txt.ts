import type { APIRoute } from 'astro';

// Dynamic robots.txt so the Sitemap line points at the right origin + base
// for both production (code2art.com/) and GitHub Pages (/code2art_website/).
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL; // '/' or '/code2art_website/'
  const sitemap = site ? new URL(`${base}sitemap-index.xml`, site).href : '';
  const lines = ['User-agent: *', 'Allow: /'];
  if (sitemap) lines.push('', `Sitemap: ${sitemap}`);
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
