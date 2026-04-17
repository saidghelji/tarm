import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build', // 👈 This changes the output folder from "dist" to "build"
    assetsDir: 'assets', // Specify the directory for assets
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    dedupe: ['lucide-react'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
