import { defineConfig } from 'vite'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ]),
  ],
})
