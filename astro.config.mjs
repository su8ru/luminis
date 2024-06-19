import { defineConfig } from 'astro/config';
import remarkLinkCard from 'remark-link-card';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkLinkCard],
  },
});
