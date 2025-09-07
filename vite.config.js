import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',   // 👈 important fix for S3/static hosting
  plugins: [react(), tailwindcss()],
})
