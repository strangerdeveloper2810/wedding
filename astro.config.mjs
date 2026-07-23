// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// ⚠️ Đổi `site` sang domain thật khi deploy — canonical/OG/sitemap phụ thuộc vào nó.
export default defineConfig({
  site: 'https://minhluan-thutrang.wedding',
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
