const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   builder: "vite",
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
      buildAssetsDir: isDev ? "/_nuxt/" : "assets/",

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

   devtools: {
      enabled: false,
      timeline: {
         enabled: false,
      },
   },

   sourcemap: {
      server: false,
      client: false,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   future: {
      compatibilityVersion: 4,
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
         "postcss-hover-media-feature": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
   },

   purgecss: {
      enabled: isDev ? false : true,
      content: ["./src/**/*.vue", "./src/**/*.js"],
      safelist: ["html", "head", "body", "root"],
      fontFace: false,
      variables: false,
      keyframes: false,
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
      strict: false,
      headers: {
         crossOriginResourcePolicy: "same-origin",
         crossOriginOpenerPolicy: "same-origin",
         crossOriginEmbedderPolicy: "credentialless",
         contentSecurityPolicy: {
            "base-uri": ["'none'"],
            "default-src": ["'none'"],
            "connect-src": ["'self'", "https://s3.amurfy.com/", "https://accounts.google.com/gsi/", "https://ipapi.co/json"],
            "font-src": ["'self'", "data:"],
            "form-action": ["'self'"],
            "frame-ancestors": ["'self'"],
            "frame-src": ["'self'", "https://accounts.google.com/gsi/"],
            "img-src": ["'self'", "data:", "blob:", "https://s3.amurfy.com/"],
            "manifest-src": ["'self'"],
            "media-src": ["'self'", "blob:", "https://s3.amurfy.com/"],
            "style-src": ["'self'", "'unsafe-inline'", "https://accounts.google.com/gsi/style"],
            "object-src": ["'self'"],
            "script-src-attr": ["'none'"],
            "script-src": ["'self'", "'unsafe-inline'", "https://accounts.google.com/gsi/client"],
            "worker-src": ["'self'"],
            "upgrade-insecure-requests": true,
         },
         originAgentCluster: "?1",
         referrerPolicy: "no-referrer",
         strictTransportSecurity: {
            maxAge: 15552000,
            includeSubdomains: true,
         },
         xContentTypeOptions: "nosniff",
         xDNSPrefetchControl: "off",
         xDownloadOptions: "noopen",
         xFrameOptions: "SAMEORIGIN",
         xPermittedCrossDomainPolicies: "none",
         xXSSProtection: "1",
         permissionsPolicy: {
            "camera": [],
            "display-capture": [],
            "fullscreen": [],
            "geolocation": [],
            "microphone": [],
         },
      },
      requestSizeLimiter: {
         maxRequestSizeInBytes: 20971520, // 20 MB
         maxUploadFileRequestInBytes: 20971520, // 20 MB
         throwError: true,
      },
      rateLimiter: {
         tokensPerInterval: 150,
         interval: 300000,
         headers: true,
         driver: {
            name: "lruCache",
         },
         throwError: true,
      },
      xssValidator: {
         throwError: true,
      },
      corsHandler: {
         origin: process.env.NUXT_PUBLIC_SITE_URL,
         methods: ["GET", "POST", "DELETE"],
         preflight: {
            statusCode: 204,
         },
      },
      allowedMethodsRestricter: {
         methods: "*",
         throwError: true,
      },
      hidePoweredBy: true,
      basicAuth: false,
      enabled: true,
      csrf: false,
      nonce: false,
      removeLoggers: {
         external: [],
         consoleType: ["log", "debug"],
         include: [/\.[jt]sx?$/, /\.vue\??/],
         exclude: [/node_modules/, /\.git/],
      },
      ssg: false,
      sri: true,
   },

   css: ["@/assets/styles/app.scss"],
   modules: isDev
      ? ["@nuxtjs/eslint-module", "@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "nuxt-security", "@pinia-plugin-persistedstate/nuxt"]
      : ["@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "nuxt-security", "@pinia-plugin-persistedstate/nuxt"],
});
