<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
export default {
    setup() {
      useSeoMeta({
         title: "Lumiiere Candles | Home",
         description: "Соевые свечи ручной работы с вашими любимыми персонажами",
      });
      defineRobotMeta();
   },
};
</script>
