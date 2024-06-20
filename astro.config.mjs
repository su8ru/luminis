import { defineConfig } from 'astro/config';
import remarkLinkCard from 'remark-link-card';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
  integrations: [preact()],
});
