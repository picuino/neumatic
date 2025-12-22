import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  root: 'source',
  build: {
    outDir: resolve(__dirname, 'docs'),
    emptyOutDir: true, // Limpia la carpeta build antes de construir
    
    rollupOptions: {
        
      input: {
        main: resolve(__dirname, 'source/index.html'), // Entrada principal
      },        
        
      output: {
        // Deshabilita la división automática de chunks dinámicos
        inlineDynamicImports: true,
        
        // Define el formato de salida
        format: 'iife',
        
        // Opcional: Personaliza el nombre del archivo de salida
        entryFileNames: `neumatic.js`,
        
        // Opcional: Personaliza el nombre del archivo CSS si también se incluye CSS
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'neumatic.css';
          }
          return 'assets/[name].[extname]';
        },
      },
    },
  },
});