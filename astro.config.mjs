import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://popovchikk.ru',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
});