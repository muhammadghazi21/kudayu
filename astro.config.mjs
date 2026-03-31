import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://muhammadghazi21.github.io',
  base: '/kudayu',
  output: 'static',
  integrations: [],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser'
    }
  }
});
