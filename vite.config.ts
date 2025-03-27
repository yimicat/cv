import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  plugins: [sveltekit(), UnoCSS()],
  server: {
    open: true,
    port: 2208,
    hmr: {
      overlay: false
    }
  }
})
