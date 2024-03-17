import {defineConfig} from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
  plugins: [
    
    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!"
    }),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
});