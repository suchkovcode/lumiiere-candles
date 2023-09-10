import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   builder: "vite",
   srcDir: "./src/",
   telemetry: false,
   ssr: true,

   hooks: {
      "build:manifest": (manifest) => {
         for (const key in manifest) {
            const file = manifest[key];
            if (file.assets) {
               file.assets = file.assets.filter(
                  (asset) =>
                     !asset.endsWith(".webp") &&
                     !asset.endsWith(".jpg") &&
                     !asset.endsWith(".png") &&
                     !asset.endsWith(".jpeg") &&
                     !asset.endsWith(".svg"),
               );
            }
         }
      },
   },

   app: {
      pageTransition: false,
      layoutTransition: false,
      // buildAssetsDir: "/assets/"
   },

   vite: {
      plugins: [
         ViteFaviconsPlugin({
            logo: "./src/assets/img/svg/favicon.svg",
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
                  appleStartup: false,
                  favicons: true,
                  windows: false,
                  yandex: false,
               },
            },
         }),
      ],
   },

   sourcemap: {
      server: isDev ? true : false,
      client: isDev ? true : false,
   },

   devtools: {
      enabled: false,

      timeline: {
         enabled: false,
      },
   },

   devServer: {
      port: 3000,
   },

   experimental: {
      inlineSSRStyles: false,
      payloadExtraction: false,
      headNext: false,
      noScripts: false,
      renderJsonPayloads: false,
      crossOriginPrefetch: false,
   },

   nitro: {
      preset: "cloudflare-pages-static",
      serveStatic: true,
   },

   eslint: {
      lintOnStart: false,
   },

   image: {
      inject: false,
      format: ["webp"],
      quality: 80,
      dir: "assets/img",
   },

   robots: {
      sitemap: ["/sitemap.xml"],
      credits: false,
   },

   sitemap: {
      sitemaps: false,
      xsl: false,
      xslTips: false,
      discoverImages: true,
   },

   site: {
      url: "https://lumiiere-candles.com",
   },

   strapi: {
      url: process.env.STRAPI_URL,
      devtools: false,
   },

   css: ["@/assets/styles/app.scss"],
   modules: ["@nuxtjs/eslint-module", "@pinia/nuxt", "@nuxtjs/strapi", "@nuxtjs/i18n", "nuxt-simple-robots", "nuxt-simple-sitemap"],
});
