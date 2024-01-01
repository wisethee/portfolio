import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylexPlugin from "@stylexjs/rollup-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylexPlugin({
      fileName: "./.build/stylex.css",
      dev: true,
      classNamePrefix: "mp-",
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: __dirname,
      },
    }),
  ],
});
