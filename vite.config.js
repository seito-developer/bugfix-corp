import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import { networkInterfaces } from 'os'
import {ViteEjsPlugin} from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";
import VitePluginBrowserSync from 'vite-plugin-browser-sync'


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const ip = Object.values(networkInterfaces()).flat().find((i) => i.family === 'IPv4' && !i.internal)?.address
  const useBrowserSync = env.VITE_BROWSER_SYNC && ip

  console.log('env.VITE_BROWSER_SYNC', env.VITE_BROWSER_SYNC)
  console.log('ip', ip)
  return {
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
            counseling: resolve(__dirname, 'siid/siid/counseling/index.html'),
            tuition: resolve(__dirname, 'siid/tuition/index.html'),
          },
          contact: 'contact/index.html',
          privacyPolicy: 'privacy-policy/index.html',
          law: 'law/index.html'
        }
      }
    },
    plugins: [
      (() => {
        return useBrowserSync ? VitePluginBrowserSync({
            dev: {
                bs: {
                    notify: false,
                    // open: 'external',
                },
            },
        }) : null;
      })(),
      ViteEjsPlugin(mainData, {
        ejs: {
          beautify: true,
        }
      }),
    ],
    server: {
      host: useBrowserSync ? ip : host,
      watch: {
        // ディレクトリの深い場所にあるファイルも監視するために、適切なパターンを設定
        ignored: ['!**/node_modules/**'],
        usePolling: true,
        depth: 10
      }
    }
  }
});