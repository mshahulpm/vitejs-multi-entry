import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname,)
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        app1: resolve(root, 'app1', 'index.html'),
        app2: resolve(root, 'app2', 'index.html'),
        app3: resolve(root, 'app3', 'index.html'),
        common: resolve(root, 'common', 'index.html'),
      }
    }
  },
  server: {
    port: 4000,
    cors: false
  }
})


// https://www.youtube.com/watch?v=STeKBm67l6M
