// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this to the real domain on deploy - used for canonical + OG URLs.
  site: "https://benedictboisclair.com",
  integrations: [sitemap()],
});
