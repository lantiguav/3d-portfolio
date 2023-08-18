/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react({
      include: "**/*.jsx"
    })],
    define: {
      __ANALYTICS_ID__: env.VERCEL_ANALYTICS_ID
    },
  }
})
