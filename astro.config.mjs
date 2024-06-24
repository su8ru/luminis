import { defineConfig } from 'astro/config';
import remarkLinkCard from 'remark-link-card';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://su8ru.dev',
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
  integrations: [preact()],
});
