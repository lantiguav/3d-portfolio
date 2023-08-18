/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.jsx"
  })],
  define: {
    __ANALYTICS_ID__: process.env.VITE_VERCEL_ANALYTICS_ID,
  },
})
