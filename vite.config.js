import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    // rollupOptions: {}
  },
  plugins: [
    
    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!"
    }),
  ],
});