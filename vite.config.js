import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue' // vue 3
import vue from '@vitejs/plugin-vue2'; //vue 2
import favicons from '@peterek/vite-plugin-favicons'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    favicons('src/assets/icon.png', {
      appName: "F-Spexet",
      appShortName: "F-Spexet",
      appDescription: "F-sektionens studentspex på Chalmers"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // File formats are case-sensative so we add JPG here
  assetsInclude: ['**/*.JPG'],
})
