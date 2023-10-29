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

      head: {
         htmlAttrs: {
            lang: "ru",
         },
         meta: [
            { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
            { name: "apple-mobile-web-app-title", content: "Lumiiere Candles" },
            { name: "apple-mobile-web-app-capable", content: "yes" },
            { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
         ],
         link: [
            { rel: "shortcut icon", type: "image/png", href: "/static/favicon.ico" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/static/favicon-16x16.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/static/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "48x48", href: "/static/favicon-48x48.png" },
            { rel: "icon", type: "image/png", sizes: "228x228", href: "/static/coast-228x228.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "57x57", href: "/static/apple-touch-icon-57x57.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "60x60", href: "/static/apple-touch-icon-60x60.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "72x72", href: "/static/apple-touch-icon-72x72.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "76x76", href: "/static/apple-touch-icon-76x76.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "114x114", href: "/static/apple-touch-icon-114x114.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "152x152", href: "/static/apple-touch-icon-152x152.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "167x167", href: "/static/apple-touch-icon-167x167.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/static/apple-touch-icon-180x180.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "1024x1024", href: "/static/apple-touch-icon-1024x1024.png" },
         ],
      },
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
      nonce: true,
      allowedMethodsRestricter: {
         methods: ["GET", "POST"],
      },
      ssg: {
         hashScripts: false,
      },
      headers: {
         crossOriginEmbedderPolicy: isDev ? "unsafe-none" : "require-corp",
         crossOriginResourcePolicy: "same-origin",
         contentSecurityPolicy: {
            "default-src": ["'self'", "https://lumiiere-candles.com/"],
            "base-uri": ["'self'", "https://lumiiere-candles.com/"],
            "font-src": ["'self'"],
            "connect-src": ["'self'", "https://strapi.lumiiere-candles.com/"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'self'"],
            "img-src": ["'self'", "data:", "https://assets.lumiiere-candles.com/"],
            "object-src": ["'none'"],
            "style-src": ["'self'", "'unsafe-inline'"],
            "script-src": !isDev
               ? ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'", "https://lumiiere-candles.com/"]
               : ["'self'", "'unsafe-inline'"],
            "script-src-attr": !isDev
               ? ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'", "https://lumiiere-candles.com/"]
               : ["'self'", "'unsafe-inline'"],
            "script-src-elem": !isDev
               ? ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'", "https://lumiiere-candles.com/"]
               : ["'self'", "'unsafe-inline'"],

            "upgrade-insecure-requests": true,
         },
         strictTransportSecurity: {
            maxAge: 15552000,
            includeSubdomains: true,
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
