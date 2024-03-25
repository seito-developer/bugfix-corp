// import { resolve } from 'path'
import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        siid: './src/siid/index.html',
      }
    }
  },
  plugins: [
    ViteEjsPlugin(mainData, {
      ejs: {
        beautify: true,
      }
    }),
  ],
  server: {
    watch: {
      // ディレクトリの深い場所にあるファイルも監視するために、適切なパターンを設定
      ignored: ['!**/node_modules/**'],
      usePolling: true,
      depth: 10
    }
  }
});