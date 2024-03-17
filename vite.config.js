import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    ViteEjsPlugin({
      domain: "example.com",
      title: "BugFix LLC",
    }),
  ],
});