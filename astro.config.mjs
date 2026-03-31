import { defineConfig } from 'astro/config';

// Ganti YOUR_USERNAME dengan username GitHub kamu
// Contoh: jika repo https://github.com/ghazi/kudayu → site: 'https://ghazi.github.io', base: '/kudayu'
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
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
