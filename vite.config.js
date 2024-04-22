import { defineConfig } from 'vite'
import { networkInterfaces } from 'os'
import {ViteEjsPlugin} from "vite-plugin-ejs";
import { mainData } from "./src/data/mainData";
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import { globSync } from 'glob';
import path from 'path';

// var path = require('path');
// https://ja.vitejs.dev/guide/build.html
const ip = Object.values(networkInterfaces()).flat().find((i) => i.family === 'IPv4' && !i.internal)?.address
const root = 'src/pages/';

export default defineConfig({
  root: root,
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      // input: '**/*.html'
      input: Object.fromEntries(
		    globSync(`${root}/**/*.html`).map(file => {
        // This remove `src/` as well as the file extension from each
        // file, so e.g. src/nested/foo.js becomes nested/foo
          console.log("file", 
            path.relative(root, file.slice(
              0, file.length - path.extname(file).length
            ))
          )
        })
          
          // path.relative(
          //   'src',
          //   file.slice(0, file.length - path.extname(file).length)
          // ),
        // ])
      )
    }
    //     main: 'index.html',
    //     siid: {
    //       "": 'siid/index.html',
    //       basic: 'siid/basic/index.html',
    //       career: 'siid/career/index.html',
    //       counseling: 'siid/siid/counseling/index.html',
    //       tuition: 'siid/tuition/index.html',
    //     },
    //     contact: 'contact/index.html',
    //     privacyPolicy: 'privacy-policy/index.html',
    //     law: 'law/index.html'
    //   }
    // }
  },
  plugins: [
    VitePluginBrowserSync(),
    ViteEjsPlugin(mainData, {
      ejs: {
        beautify: true,
      }
    }),
  ],
  server: {
    host: ip ? ip : 'localhost',
    watch: {
      ignored: ['!**/node_modules/**'],
      usePolling: true,
      depth: 10
    }
  }
});