import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/niroshkumar-portfolio/',
  define: {
    __BUILD_TIME__: JSON.stringify(Date.now().toString()),
  },
})
