import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
// const flowbite = require("flowbite-react/tailwind");
export default defineConfig({
  
  plugins: [react(),tailwindcss()  ],
})
