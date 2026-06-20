import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages serves this project site at https://code-2-art.github.io/code2art_website/.
// The Pages CI sets GH_PAGES_BUILD=true so the build targets that sub-directory.
// Production (push to `product` → rsync to code2art.com root) leaves it unset.
const isGhPages = process.env.GH_PAGES_BUILD === 'true';

export default defineConfig({
  site: isGhPages ? 'https://code-2-art.github.io' : 'https://code2art.com',
  base: isGhPages ? '/code2art_website/' : '/',
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
