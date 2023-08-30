<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
export default {
   setup() {
      useHead({
         htmlAttrs: {
            lang: "ru",
         }
      }),

      useSeoMeta({
         title: "Lumiiere Candles | App",
         viewport: "width=device-width, initial-scale=1",
         link: [{ hid: "canonical", rel: "canonical", href: "https://lumiiere-candles.com" }],
      });

      defineRobotMeta();
   },
};
</script>


