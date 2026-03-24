import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  server: {
    port: 5174,
    strictPort: false,
    open: '/index.html',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        games: resolve(__dirname, 'games.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        'book-slot': resolve(__dirname, 'book-slot.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  optimizeDeps: {
    include: ['three']
  }
});
