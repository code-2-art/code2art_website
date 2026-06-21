import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this project site at https://code-2-art.github.io/code2art_website/.
// The Pages CI sets GH_PAGES_BUILD=true so the build targets that sub-directory.
// Production (push to `product` → rsync to code2art.com root) leaves it unset.
const isGhPages = process.env.GH_PAGES_BUILD === 'true';

// On the Pages sub-directory build, body images authored as root-absolute
// "/uploads/..." must be prefixed with the base, or they 404. The importer
// emits them as raw <img> HTML, which Astro keeps as mdast `html` nodes (not
// parsed elements), so we rewrite the src string there. Production (base "/")
// is a no-op. Cover images are handled in templates via assetUrl().
function remarkBaseUploads() {
  const prefix = isGhPages ? '/code2art_website' : '';
  return (tree) => {
    if (!prefix) return;
    const walk = (node) => {
      if ((node.type === 'html' || node.type === 'raw') && typeof node.value === 'string') {
        node.value = node.value.replace(/(<img\b[^>]*?\ssrc=["'])\/uploads\//g, `$1${prefix}/uploads/`);
      }
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: isGhPages ? 'https://code-2-art.github.io' : 'https://code2art.com',
  base: isGhPages ? '/code2art_website/' : '/',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
  markdown: {
    remarkPlugins: [remarkBaseUploads],
  },
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
