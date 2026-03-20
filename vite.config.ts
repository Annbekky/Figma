import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

// Исправление для __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  // ВАЖНО для GitHub Pages (Project Pages):
  base: '/Figma/',

  plugins: [react()],
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Простой алиас для @ -> src
      '@': path.resolve(__dirname, './src'),
      // Остальные алиасы с версиями обычно не нужны и могут вызывать конфликты.
      // Если они не критичны — рекомендую их убрать.
    },
  },
  
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  
  server: {
    port: 3000,
    open: true,
  },
})
