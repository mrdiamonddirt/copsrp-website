import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://www.github.com/mrdiamonddirt/copsrp-website',
  plugins: [react()],
})
