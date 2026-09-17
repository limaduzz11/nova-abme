import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://nova-abme.pages.dev';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  integrations: [sitemap()],
});
