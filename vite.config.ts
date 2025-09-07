import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// __dirname ESM uchun workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // Agar proxy kerak bo‘lsa, local dev server uchun uncomment qilasan:
  // server: {
  //   proxy: {
  //     "/api/weather": {
  //       target: "https://api.openweathermap.org/data/2.5",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/weather/, ""),
  //     },
  //     "/api/open": {
  //       target: "https://api.open-meteo.com/v1/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/open/, ""),
  //     },
  //     "/api/countries": {
  //       target: "https://restcountries.com/v3.1",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api\/countries/, ""),
  //     },
  //   },
  // },
});
