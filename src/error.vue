<template>
   <section class="error">
      <div class="container">
         <h1 class="error__title">{{ error.statusCode }}</h1>
         <p class="error__text">
            Ой произошла ошибка <br />
            {{ error.message }}
         </p>
         <NuxtLink class="btn error__btn" to="/"> Вернуться на главную </NuxtLink>
      </div>
   </section>
</template>

<script>
export default {
   props: {
      error: {
         type: Object,
         required: true,
      },
   },

   setup() {
      useSeoMeta({
         title: "Lumiiere Candles | 404",
         description: "Ой кажется возникла ошибка",
      });

      defineRobotMeta();
   },
};
</script>
