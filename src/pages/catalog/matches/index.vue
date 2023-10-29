<!-- eslint-disable vue/html-self-closing -->
<template>
   <section class="postcard">
      <div class="container">
         <base-breadcrumbs class="boxes__breadcrumbs" :roter-link="{ catalog: true, name: 'Всякое разное', to: '/catalog/matches' }" />
         <div class="postcard__header">
            <img class="postcard__header-icon" src="@/assets/img/png/matches__page-icon.png" alt="pictire" width="85" height="40" />
            <h1 class="title postcard__title">ВСЯКОЕ РАЗНОЕ</h1>
            <p class="subtitle postcard__subtitle">
               <svg class="postcard__subtitle-icon">
                  <use xlink:href="/sprite.svg#catalogGetting"></use>
               </svg>
               Свечи, которые действительно пахнут!
            </p>
         </div>
      </div>
   </section>
   <section class="postcardCatalog">
      <div class="container">
         <AppCatalog v-if="card.length > 0" :data-item="card" :visible-item="countProductCatalog" class="catalogs__card--grey" />
         <button
            v-show="card.length > 4 && card.length > countProductCatalog"
            class="catalog__btn-loading catalog__btn-loading--margin"
            @click="countProductCatalog += 8">
            Загрузить еще
         </button>
         <p v-if="!card.length" class="emptyData">Список пуст</p>
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
            "pagination[pageSize]": 100,
            "locale": store.params.locale,
         },
      });

      const card = await useHandllerApi(data);

      return {
         card: card.filter((item) => item.category === "Дополнительно"),
      };
   },

   data() {
      return {
         countProductCatalog: 8,
      };
   },
};
</script>

<style lang="scss">
/* stylelint-disable at-rule-empty-line-before */
@import "@/assets/styles/base/reset";
@import "@/assets/styles/base/fonts";
@import "@/assets/styles/base/var";
@import "@/assets/styles/base/mixin";
@import "@/assets/styles/base/global";
@import "@/assets/styles/base/text";
@import "@/assets/styles/base/btn";

@import "@/assets/styles/components/appHeader";
@import "@/assets/styles/components/appFooter";
@import "@/assets/styles/components/appCatalog";
@import "@/assets/styles/components/base/emptyData";
@import "@/assets/styles/components/base/breadcrumbs";

@import "@/assets/styles/components/canvas/backet";
@import "@/assets/styles/components/canvas/backetForm";
@import "@/assets/styles/components/canvas/backetItem";
@import "@/assets/styles/components/canvas/favorite";
@import "@/assets/styles/components/canvas/favoriteItem";
@import "@/assets/styles/components/canvas/menu";
@import "@/assets/styles/components/canvas/header";

@import "@/assets/styles/components/card/card";
@import "@/assets/styles/components/card/cardBtnAdd";
@import "@/assets/styles/components/card/cardBtnMore";
@import "@/assets/styles/components/card/changesize";
@import "@/assets/styles/components/card/count";
@import "@/assets/styles/components/card/favorite";
@import "@/assets/styles/components/card/price";
@import "@/assets/styles/components/card/rating";

@import "@/assets/styles/pages/catalog/matches";
</style>
