/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react({
      include: "**/*.jsx"
    })],
    define: {
      __ANALYTICS_ID__: JSON.stringify(env.VERCEL_ANALYTICS_ID)
    },
  }
})
