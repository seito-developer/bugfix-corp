import { resolve } from 'path'
import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";

export default defineConfig({
  root: 'src/pages',
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    publicDir: '../public',
    rollupOptions: {
      
      input: {
        main: resolve(__dirname, 'index.html'),
        siid: {
          "": resolve(__dirname, 'siid/index.html'),
          basic: resolve(__dirname, 'siid/basic/index.html'),
          career: resolve(__dirname, 'siid/career/index.html'),
        },
        contact: 'contact/index.html',
        privacyPolicy: 'privacy-policy/index.html',
        law: 'law/index.html'
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