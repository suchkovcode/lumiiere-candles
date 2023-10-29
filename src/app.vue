<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
export default {
   async setup() {
      useSeoMeta({
         title: "Lumiiere Candles | App",
         description: "Описание не длиннее 155 символов",
      });
      defineRobotMeta();
   },
};
</script>
