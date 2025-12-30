import { defineConfig } from "vite";

export default defineConfig({
  base: "/first-pro-landing/",

  server: {
    watch: {
      usePolling: true,
    },

    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
