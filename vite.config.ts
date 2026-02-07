import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Mantenemos el servidor como lo tenías
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  // Añadimos la base para evitar la pantalla blanca en Vercel
  base: './', 
  resolve: {
    alias: {
      // Ajustamos el alias para que apunte a la raíz o a src según tu estructura
      '@': path.resolve(__dirname, '.'),
    }
  }
});