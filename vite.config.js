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
      // watchEjsFiles: true,
      
    }, {
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