import { defineConfig } from "vite";

export default defineConfig({
  // Настройки сервера для автоматического обновления
  server: {
    watch: {
      // Использовать опрос файлов (помогает, если обычный HMR не срабатывает)
      usePolling: true,
    },
    // Открывать браузер автоматически при старте (по желанию)
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
