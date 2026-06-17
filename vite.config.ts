import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        signin: resolve(__dirname, "signin.html"),
        signup: resolve(__dirname, "signup.html"),
        calendar: resolve(__dirname, "main.html"),
      },
    },
  },
});
