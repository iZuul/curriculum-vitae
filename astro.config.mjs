import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
