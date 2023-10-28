import { ViteFaviconsPlugin } from "vite-plugin-favicon2";
const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   runtimeConfig: {
      public: {
         STRAPI: process.env.API_URL,
         STRAPI_BASE_URL: process.env.STRAPI_BASE_URL,
         strapi: {
            url: process.env.API_URL,
         },
      },
   },

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
      rootId: "root",
      pageTransition: false,
      layoutTransition: false,
      buildAssetsDir: isDev ? "_nuxt/" : "assets/",
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
      server: false,
      client: false,
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
      inlineSSRStyles: true,
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

   postcss: {
      plugins: {
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "cssnano": {
            preset: [
               "default",
               {
                  discardComments: { removeAll: true },
                  discardEmpty: true,
                  discardDuplicates: true,
                  minifyFontValues: true,
               },
            ],
         },
      },
   },

   site: {
      url: "https://lumiiere-candles.com",
   },

   strapi: {
      url: process.env.API_URL || "http://localhost:1337",
      prefix: "/api",
      version: "v4",
      cookie: {},
      cookieName: "strapi_jwt",
   },

   css: ["@/assets/styles/app.scss"],
   modules: ["@nuxtjs/eslint-module", "@pinia/nuxt", "@nuxtjs/device", "nuxt-simple-robots", "nuxt-simple-sitemap", "@nuxtjs/strapi"],
});
