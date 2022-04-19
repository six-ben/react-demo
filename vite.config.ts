import { defineConfig } from "vite";
import { resolve } from "path";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "/",
  build: {
    outDir: resolve(process.cwd(), "dist"),
  },
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
