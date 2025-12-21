import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/react/',
  }

  // Only use the sub-path if we are running the 'build' command (for GitHub)
  if (command !== 'serve') {
    config.base = '/ldj-gold/'
  }

  return config
})