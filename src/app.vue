<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
export default {
   async setup() {
      useHead({
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
            { rel: "shortcut icon", type: "image/png", href: "_nuxt/static/favicon.ico" },
            { rel: "icon", type: "image/png", sizes: "16x16", href: "_nuxt/static/favicon-16x16.png" },
            { rel: "icon", type: "image/png", sizes: "32x32", href: "_nuxt/static/favicon-32x32.png" },
            { rel: "icon", type: "image/png", sizes: "48x48", href: "_nuxt/static/favicon-48x48.png" },
            { rel: "icon", type: "image/png", sizes: "228x228", href: "_nuxt/static/coast-228x228.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "57x57", href: "_nuxt/static/apple-touch-icon-57x57.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "60x60", href: "_nuxt/static/apple-touch-icon-60x60.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "72x72", href: "_nuxt/static/apple-touch-icon-72x72.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "76x76", href: "_nuxt/static/apple-touch-icon-76x76.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "114x114", href: "_nuxt/static/apple-touch-icon-114x114.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "152x152", href: "_nuxt/static/apple-touch-icon-152x152.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "167x167", href: "_nuxt/static/apple-touch-icon-167x167.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "_nuxt/static/apple-touch-icon-180x180.png" },
            { rel: "apple-touch-icon", type: "image/png", sizes: "1024x1024", href: "_nuxt/static/apple-touch-icon-1024x1024.png" },

            { hid: "canonical", rel: "canonical", href: "https://lumiiere-candles.com" },
         ],
      });

      useSeoMeta({
         title: "Lumiiere Candles | App",
         description: "Описание не длиннее 155 символов",
      });
      defineRobotMeta();
   },
};
</script>
