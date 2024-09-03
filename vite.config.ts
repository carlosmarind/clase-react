import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/dragonballz": {
        target: "https://www.dragonballapi.com/dragonballz/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/dragonballz/, ""),
      },
    },
  },
  plugins: [react()],
})
