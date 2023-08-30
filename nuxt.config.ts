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
                  (asset) => !asset.endsWith(".webp") && !asset.endsWith(".jpg") && !asset.endsWith(".png") && !asset.endsWith(".svg"),
               );
            }
         }
      },
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
      noScripts: false,
      renderJsonPayloads: false,
      crossOriginPrefetch: false,
   },

   nitro: {
      preset: "cloudflare-pages",
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
      xsl: false,
      xslTips: false,
      discoverImages: true,
   },

   strapi: {
      devtools: false,
   },

   css: ["@/assets/styles/app.scss"],
   modules: ["@nuxtjs/eslint-module", "@pinia/nuxt", "@nuxt/image", "@nuxtjs/strapi", "@nuxtjs/i18n", "nuxt-simple-robots", "nuxt-simple-sitemap"],
});
