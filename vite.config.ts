import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "./",
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      src: "",
    },
  },
});
