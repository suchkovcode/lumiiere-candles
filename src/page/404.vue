<template>
   <section class="error">
      <div class="container">
         <h1 class="error__title">404</h1>
         <p class="error__text">
            Такой страницы не существует <br />
            или она була удалена
         </p>
         <router-link class="btn error__btn" to="/"> вернуться на галвную </router-link>
      </div>
   </section>
</template>

<script>
export default {
   name: "PageNotFound",
};
</script>

<style lang="scss">
.error {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100dvh;
   background: var(--color_primary);

   &__title {
      margin-bottom: 15px;
      font: 700 98px/1.3 "Karton";
      text-align: center;
      color: var(--color_base);
   }

   &__text {
      margin-bottom: 30px;
      font: 500 18px/1.5 "Karton";
      text-align: center;
      color: var(--color_base);
   }

   &__btn {
      color: var(--color_secondar);
      background-color: var(--color_base);
   }

   .container {
      padding: 20px;
   }
}
</style>
