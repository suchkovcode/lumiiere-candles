const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   builder: "vite",

   runtimeConfig: {
      AIRTABLE_API_TOKEN: process.env.AIRTABLE_API_TOKEN,
      AIRTABLE_API_BASE_PRODUCT: process.env.AIRTABLE_API_BASE_PRODUCT,
      AIRTABLE_API_TABLE_ALL: process.env.AAIRTABLE_API_TABLE_ALL,
   },

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
