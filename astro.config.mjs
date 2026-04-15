import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/portfolio',  // ← Правильно! Имя твоего репозитория
  output: 'static',
});