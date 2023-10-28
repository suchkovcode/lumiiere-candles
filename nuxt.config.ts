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

   routeRules: {
      "/dashboard/**": { ssr: false },
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

   security: {
      allowedMethodsRestricter: {
         methods: ["GET", "POST"],
      },
      headers: {
         crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
         crossOriginResourcePolicy: "cross-origin",
         contentSecurityPolicy: {
            "img-src": ["'self'", "data:", "https://assets.lumiiere-candles.com/"],
            "script-src": ["'self'", "'unsafe-inline'", "http://localhost:3000", "https://lumiiere-candles.com"],
         },
         xXSSProtection: "1",
      },
   },

   css: ["@/assets/styles/app.scss"],
   modules: [
      "@nuxtjs/eslint-module",
      "@pinia/nuxt",
      "@nuxtjs/device",
      "nuxt-simple-robots",
      "nuxt-simple-sitemap",
      "@nuxtjs/strapi",
      "nuxt-security",
   ],
});
