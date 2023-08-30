<template>
   <section class="candles">
      <div class="container">
         <base-breadcrumbs :roter-link="roterData" />
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
      <div class="container">
         <AppCatalog :data-item="getCandlesCard" />
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Каталог",
               to: "/catalog",
               last: false,
            },
            {
               id: 3,
               name: "Соевые свечи",
               to: "/catalog/candles",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useAppStore, ["getCandlesCard"]),
   },
};
</script>
