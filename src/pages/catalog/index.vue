<template>
   <section class="goods">
      <div class="container">
         <base-breadcrumbs class="goods__breadcrumbs" :roter-link="{ name: 'Каталог', to: '/catalog' }" />
         <div class="goods__header">
            <svg class="goods__header-icon" width="85" height="40">
               <use xlink:href="/sprite.svg#catalogHeaderIcon"></use>
            </svg>
            <h1 class="title goods__title">КАТАЛОГ</h1>
            <p class="subtitle goods__subtitle">
               <svg class="goods__subtitle-icon">
                  <use xlink:href="/sprite.svg#catalogGetting"></use>
               </svg>
               «Поверь дружок, здесь ты найдешь все для сохранения своего душевного равновесия»
            </p>
         </div>
         <div class="goods__search">
            <div class="goods__search-container">
               <input class="goods__search-input" type="text" placeholder="Что нужно найти?" @input="searchQuery = $event.target.value" />
               <svg class="goods__search-icon" fill="none" stroke="rgb(182, 182, 182)">
                  <use xlink:href="/sprite.svg#search"></use>
               </svg>
            </div>
            <button class="goods__search-btn">Найти</button>
         </div>
      </div>
   </section>
   <div class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter @filter-handler="(filter = $event), (pageNumber = 1)" />
            <div>
               <AppCatalog class="allcatalog__cards" :data-item="filteredProducts.products" />
               <AppPagination
                  class="allcatalog__pagination"
                  :pagination-data="filteredProducts.pagination"
                  :page-data="pageNumber"
                  @page-number="pageNumber = $event" />
               <p v-show="!filteredProducts.products.length" class="emptyData">Список пуст</p>
            </div>
         </div>
      </div>
   </div>
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
         card,
      };
   },

   data() {
      return {
         pageNumber: 1,
         filter: {},
         searchQuery: "",
      };
   },

   computed: {
      filteredProducts() {
         const sortingFunctions = {
            new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
            old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };

         const { sort, aroma, collection, category } = this.filter;
         const { pageNumber, card } = this;
         const startIndex = (pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         const searchQuery = this.searchQuery.trim().toLowerCase();

         const sortingFunction = sortingFunctions[sort];
         const selectedAromas = new Set(aroma);
         const selectedCollections = new Set(collection);

         const filteredByCategory = category === "Все" ? card : card.filter((item) => item.category === category);

         const sortedByCategory = sortingFunction ? [...filteredByCategory].sort(sortingFunction) : [...filteredByCategory];

         const filteredByAroma = selectedAromas.size === 0 ? sortedByCategory : sortedByCategory.filter((item) => selectedAromas.has(item.aroma));

         const filteredByCollection =
            selectedCollections.size === 0 ? filteredByAroma : filteredByAroma.filter((item) => selectedCollections.has(item.collection));

         const filteredByLimitedCards = filteredByCollection.slice(startIndex, endIndex);

         const filteredBySearchQuery = !searchQuery
            ? filteredByLimitedCards
            : filteredByLimitedCards.filter((item) => item.title.toLowerCase().includes(searchQuery));

         const itemCount = searchQuery.length > 0 ? filteredBySearchQuery.length : filteredByCollection.length;
         const cardPaginationCount = Math.ceil(itemCount / 6);

         return {
            products: filteredBySearchQuery,
            pagination: cardPaginationCount,
         };
      },
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
@import "@/assets/styles/components/appFilter";
@import "@/assets/styles/components/appPagination";
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

@import "@/assets/styles/pages/catalog/catalog";
</style>
