import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://example.com', // 部署后可改
  integrations: [tailwind({ applyBaseStyles: true })],
  output: 'static'
});