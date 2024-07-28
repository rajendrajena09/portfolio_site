import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: "/portfolio_site/",
  css:{
    modules:{
      localsConvention:"camelCase",
    },
  },
})
