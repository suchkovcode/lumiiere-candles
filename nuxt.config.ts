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
            { name: "robots", content: "noindex, nofollow" },
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
            { rel: "preconnect", href: "https://admin.suchkov.cc" },
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
      componentIslands: false,
      payloadExtraction: false,
      headNext: true,
      appManifest: false,
      renderJsonPayloads: false,
      crossOriginPrefetch: true,
      sharedPrerenderData: true,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   nitro: {
      preset: "node-server",
      serveStatic: "node",
      prerender: {
         autoSubfolderIndex: false,
         crawlLinks: true,
      },
      output: {
         dir: ".output",
         serverDir: ".output/server",
         publicDir: ".output/public",
      },

      minify: false,
   },

   eslint: {
      lintOnStart: false,
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
      indexable: false,
      url: "https://lumiiere.suchkov.cc",
   },

   strapi: {
      devtools: false,
      url: process.env.API_URL || "https://admin.suchkov.cc",
   },

   unlazy: {
      ssr: isDev ? false : true,
      placeholderSize: 24,
   },

   security: {
      csrf: true,
      sri: true,
      nonce: false,
      ssg: {
         meta: true,
         hashScripts: false,
         hashStyles: false,
      },
      headers: {
         crossOriginEmbedderPolicy: "unsafe-none",
         crossOriginOpenerPolicy: "unsafe-none",
         crossOriginResourcePolicy: "cross-origin",
         originAgentCluster: "?1",
         referrerPolicy: "strict-origin",
         strictTransportSecurity: {
            maxAge: 15552000,
            includeSubdomains: true,
         },
         xContentTypeOptions: "nosniff",
         xDownloadOptions: "noopen",
         xFrameOptions: "DENY",
         xPermittedCrossDomainPolicies: "all",
         xXSSProtection: "1",
         contentSecurityPolicy: {
            "base-uri": ["'none'"],
            "font-src": ["'self'"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'none'"],
            "img-src": ["'self'", "data:", "https:", "https://assets.lumiiere-candles.com", "https://admin.suchkov.cc"],
            "object-src": ["'none'"],
            "script-src-attr": ["'none'"],
            "style-src": ["'self'", "'unsafe-inline'"],
            "script-src": ["'self'", "'unsafe-inline'"],
            "connect-src": ["'self'", "https:", "https://assets.lumiiere-candles.com", "https://admin.suchkov.cc"],
            "upgrade-insecure-requests": true,
         },
      },
      allowedMethodsRestricter: {
         methods: ["POST", "GET"],
      },
      hidePoweredBy: false,
      removeLoggers: {
         external: [],
         consoleType: ["log", "debug"],
         include: [/\.[jt]sx?$/, /\.vue\??/],
         exclude: [/node_modules/, /\.git/],
      },

      rateLimiter: {
         tokensPerInterval: false,
      },
   },

   css: ["@/assets/styles/app.scss"],
   modules: isDev
      ? ["@nuxtjs/eslint-module", "@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "nuxt-security"]
      : ["@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "nuxt-security"],
});
