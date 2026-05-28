import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 4173,
    allowedHosts: [
      'shubham-mallick-portfolio.onrender.com',
      '.onrender.com',
      'localhost',
      '127.0.0.1'
    ],
    strictPort: false
  }
})
