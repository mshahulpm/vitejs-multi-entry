import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app1: fileURLToPath(new URL('./resources/app1.html', import.meta.url)),
        app2: fileURLToPath(new URL('./resources/app2.html', import.meta.url)),
        app3: fileURLToPath(new URL('./resources/app3.html', import.meta.url)),
      }
    }
  },

})
