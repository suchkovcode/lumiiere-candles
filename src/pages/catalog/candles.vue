<template>
   <section class="candles">
      <div class="container">
         <base-breadcrumbs class="boxes__breadcrumbs" :roter-link="{ catalog: true, name: 'Соевые свечи', to: '/catalog/candles' }" />
         <div class="candles__header">
            <img class="candles__header-icon" src="@/assets/img/svg/candles__header-icon.svg" alt="Главная картинка" width="85" height="40" />
            <h1 class="title candles__title">СОЕВЫЕ СВЕЧИ</h1>
            <p class="subtitle candles__subtitle">
               <svg class="candles__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               Все наши свечи в одном месте — любой цвет, размер и аромат. Хочешь помедитировать, устроить дома романтик или просто создать уютную
               атмосферу? Выбирай под свое настроение и тайные желания!
            </p>
         </div>
      </div>
   </section>
   <section class="candlesCatalog">
      <!-- <div class="container">
         <AppCatalog v-if="card.length > 0" :data-item="card" />
         <p v-else class="emptyData">Список пуст</p>
      </div> -->
   </section>
</template>

<script>
import { getCandlesCard } from "@/api/request";

export default {
   // async setup() {
   //    const { data } = await useAsyncData(() => getCandlesCard());

   //    return {
   //       card: data.value,
   //    };
   // },
};
</script>
