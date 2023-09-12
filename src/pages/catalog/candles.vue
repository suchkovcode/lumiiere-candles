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
      <div class="container">
         <AppCatalog v-if="card.length > 0" :data-item="card" :visible-item="countProductCatalog" class="catalogs__card--grey" />
         <button
            v-if="card.length > 4 && countProductCatalog < 16"
            class="catalog__btn-loading catalog__btn-loading--margin"
            @click="countProductCatalog += 4">
            Загрузить еще
         </button>
         <p v-else-if="!card.length" class="emptyData">Список пуст</p>
      </div>
   </section>
</template>

<script>
import { useAppStore } from "@/store/appStore";

export default {
   async setup() {
      const store = useAppStore();
      const config = useRuntimeConfig();

      const { data } = await useFetch(`${config.public.STRAPI}/api/products`, {
         method: "GET",
         params: {
            "pagination[pageSize]": 16,
            "locale": store.params.locale,
         },
      });

      const arrayCard = data.value.data.map((item) => {
         const {
            Aroma: { data: aromaData },
            Category: { data: categoryData },
            Collection: { data: collectionData },
            img,
            tags,
            ...attributes
         } = item.attributes;

         const tagNames = tags.map((tag) => tag?.name || null);

         return {
            ...attributes,
            img: img?.data?.attributes || {},
            aroma: aromaData?.attributes?.name || {},
            category: categoryData?.attributes?.name || {},
            collection: collectionData?.attributes?.name || {},
            tags: tagNames,
         };
      });

      return {
         card: arrayCard.filter((item) => item.category === "Свечи"),
      };
   },

   data() {
      return {
         countProductCatalog: 8,
      };
   },
};
</script>
