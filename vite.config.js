import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  // base: "/My_portfolio/",
  css:{
    modules:{
      localsConvention:"camelCase",
    },
  },
})
