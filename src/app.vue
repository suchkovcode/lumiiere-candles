<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
import ogImage from "@/assets/img/png/preview.png";

export default {
   setup() {
      useHead({
         htmlAttrs: {
            lang: "ru",
         }
      }),

      useSeoMeta({
         title: "lumiiere-candles",

         viewport: "width=device-width, initial-scale=1",
         meta: [
            { hid: "description", name: "description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "og:title", property: "og:title", content: "Arsenijs Fabric | Home" },
            { hid: "og:url", property: "og:url", content: "https://lumiiere-candles.com" },
            { hid: "og:description", property: "og:description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "og:image", property: "og:image", content: ogImage },

            { hid: "twitter:title", name: "twitter:title", content: "Arsenijs Fabric | Home" },
            { hid: "twitter:url", name: "twitter:url", content: "https://lumiiere-candles.com" },
            { hid: "twitter:description", name: "twitter:description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "twitter:image", name: "twitter:image", content: ogImage },
         ],
         link: [{ hid: "canonical", rel: "canonical", href: "https://lumiiere-candles.com" }],
      });

      defineRobotMeta();
   },
};
</script>

<style lang="scss">
@import "@/assets/styles/reset";
@import "@/assets/styles/fonts";
@import "@/assets/styles/var";
@import "@/assets/styles/global";
@import "@/assets/styles/text";
@import "@/assets/styles/btn";
</style>
