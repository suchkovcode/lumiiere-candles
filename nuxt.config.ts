const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   builder: "vite",

   app: {
      pageTransition: false,
      layoutTransition: false,
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


   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: '@use "@/assets/styles/_mixin.scss" as *;',
            },
         },
      },
   },

   nitro: {
      preset: "cloudflare",
      serveStatic: true,
   },

   eslint: {
      lintOnStart: false,
   },

   postcss: {
      plugins: {
         "autoprefixer": {},
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
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
      xsl: false,
      xslTips: false,
      discoverImages: true,
   },

   strapi: {
      devtools: false,
      prefix: "/api",
      version: "v4",
      cookie: {},
      cookieName: "",
   },

   modules: ["@nuxtjs/eslint-module", "@pinia/nuxt", "@nuxt/image", "@nuxtjs/strapi", "@nuxtjs/i18n", "nuxt-simple-robots", "nuxt-simple-sitemap"],
});
