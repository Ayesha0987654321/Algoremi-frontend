import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Algoremi-frontend',

   server: {
    historyApiFallback: true,   // ← makes /portfolio/fincore work on refresh
  },
})
