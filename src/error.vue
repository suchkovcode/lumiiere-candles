<template>
   <section class="error">
      <div class="container">
         <h1 class="error__title">404</h1>
         <p class="error__text">
            Такой страницы не существует <br />
            или она была удалена
         </p>
         <NuxtLink class="btn error__btn" to="/">
            Вернуться на главную
         </NuxtLink>
      </div>
   </section>
</template>

<script>
export default {
   setup() {
      useSeoMeta({
         title: "Lumiiere Candles | 404",
      });
   },
};
</script>
