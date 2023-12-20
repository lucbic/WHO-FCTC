import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [ createVuePlugin() ],
  root: '.', // Root directory of your project
  build: {
    outDir: 'dist', // Output directory for build
  },
  server: {
    open: true, // Open in browser on server start
    port: 8080, // Dev server port
  }
});