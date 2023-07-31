import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue' // vue 3
import vue from '@vitejs/plugin-vue2'; //vue 2
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
