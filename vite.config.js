import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // Replaces sw-precache-webpack-plugin: dist/service-worker.js precaches
    // the build and serves index.html for navigations. src/registerServiceWorker.js
    // still registers it, so the plugin injects nothing and leaves
    // public/manifest.json alone.
    VitePWA({
      strategies: 'generateSW',
      filename: 'service-worker.js',
      injectRegister: false,
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,gif,svg,eot,ttf,woff,woff2,json}'],
        navigateFallback: '/index.html',
        // Ignores URLs starting from /__ (as the CRA config did, for Firebase).
        navigateFallbackDenylist: [/^\/__/],
      },
    }),
  ],
  resolve: {
    // Sass `~package/...` imports and url()s were a webpack convention.
    alias: [{ find: /^~(.+)/, replacement: '$1' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 3 and Font Awesome 4 predate the module system; keep their
        // deprecation warnings out of the build log. Our own files still warn.
        quietDeps: true,
      },
    },
  },
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
  },
});
