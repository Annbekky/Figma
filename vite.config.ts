import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'  // ← ВАЖНО!
import react from '@vitejs/plugin-react-swc'  // ← И это!
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/Figma/',
  
  plugins: [
    react(),
    tailwindcss(),  // ← ВАЖНО! Без этого Tailwind не работает
  ],
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
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
