import { defineConfig } from "vite";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
import { visualizer } from "rollup-plugin-visualizer";
import inspect from "vite-plugin-inspect";
import stylelint from "vite-plugin-stylelint";
import eslint from "vite-plugin-eslint";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
   appType: "spa",
   root: "./src/",
   base: "./",
   cacheDir: "../.cache",
   build: {
      outDir: "../dist/",
      manifest: false,
      cssCodeSplit: true,
   },
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "./src/"),
      },
   },
   server: {
      port: 8080,
      open: true,
   },
   plugins: [
      visualizer({
         emitFile: true,
         filename: "stats.html",
      }),
      inspect(),
      vue(),
      stylelint(),
      eslint(),
      ViteFaviconsPlugin({
         logo: "src/assets/img/svg/favicon.svg",
         inject: true,
         outputPath: "./static",
         favicons: {
            appName: "Lumiiere Candles",
            appShortName: "Lumiiere Candles",
            appDescription: "Lumiiere Candles",
            start_url: "/",
            icons: {
               android: false,
               appleIcon: true,
               appleStartup: true,
               favicons: true,
               windows: true,
               yandex: true,
            },
         },
      }),
   ],
   css: {
      preprocessorOptions: {
         scss: {
            additionalData: `@import "@/styles/mixin";`,
         },
      },
   },
});
