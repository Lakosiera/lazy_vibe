import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      allowedHosts: [`${env.FRONTEND_HOST}`],
      // allowedHosts: true, // любой хост
      proxy: {
        "/api": {
          target: `http://${env.BACKEND_HOST}`,
          changeOrigin: true,
          secure: false,
          rewriteWsOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  })
}