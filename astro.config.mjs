import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const isGHPages = process.env.DEPLOY_TARGET === 'ghpages';

export default defineConfig({
  site: isGHPages ? 'https://code-2-art.github.io' : 'https://code2art.com',
  base: isGHPages ? '/code2art_website/' : '/',
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap(),
  ],
  output: 'static'
});