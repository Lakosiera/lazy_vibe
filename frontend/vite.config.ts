import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default ({ mode }: UserConfig) => {
  const env = loadEnv(mode || '', process.cwd(), '');

  return defineConfig({
    base: `${env.BASE || '/'}`,
    plugins: [
      vue(),
      vueDevTools(),
    ],
    css: {
      preprocessorOptions: {
        // https://github.com/sass/dart-sass/issues/2280
        scss: {
          api: 'modern',
          silenceDeprecations: ['mixed-decls', 'color-functions'],
        },
      },
    },
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
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  })
}
