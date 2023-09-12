<template>
   <section class="goods">
      <div class="container">
         <base-breadcrumbs class="goods__breadcrumbs" :roter-link="{ name: 'Каталог', to: '/catalog' }" />
         <div class="goods__header">
            <svg class="goods__header-icon" width="85" height="40">
               <use xlink:href="@/assets/img/svg/sprite.svg#catalogHeaderIcon"></use>
            </svg>
            <h1 class="title goods__title">КАТАЛОГ</h1>
            <p class="subtitle goods__subtitle">
               <svg class="goods__subtitle-icon">
                  <use xlink:href="@/assets/img/svg/sprite.svg#catalogGetting"></use>
               </svg>
               «Поверь дружок, здесь ты найдешь все для сохранения своего душевного равновесия»
            </p>
         </div>
         <div class="goods__search">
            <div class="goods__search-container">
               <input class="goods__search-input" type="text" placeholder="Что нужно найти?" @input="searchQuery = $event.target.value" />
               <svg class="goods__search-icon" fill="none" stroke="rgb(182, 182, 182)">
                  <use xlink:href="@/assets/img/svg/sprite.svg#search"></use>
               </svg>
            </div>
            <button class="goods__search-btn" @click="false">Найти</button>
         </div>
      </div>
   </section>
   <section class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter @filter-handler="filter = $event" />
            <div>
               <!-- <AppCatalog v-if="filteredProducts.products.length" :data-item="filteredProducts.products" class="allcatalog__cards" /> -->
               <p class="emptyData">Список пуст</p>
               <!-- <AppPagination
                  class="allcatalog__pagination"
                  :pagination-data="filteredProducts.pagination"
                  :page-data="pageNumber"
                  @page-number="pageNumber = $event" /> -->
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { useAppStore } from "@/store/appStore";
import { getProduct } from "@/api/request";

export default {
   async setup() {
      const store = useAppStore();

      try {
         const { data } = await useAsyncData(() => getProduct(store.params));

         return {
            card: data.value.card,
         };
      } catch (error) {}
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
         const selectedCategory = this.filter.category;
         const sortingFunctions = {
            new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
            old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };
         const sortingFunction = sortingFunctions[this.filter.sort];
         const selectedAromas = new Set(this.filter.aroma);
         const selectedCollections = new Set(this.filter.collection);
         const startIndex = (this.pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         const searchQuery = this.searchQuery.trim().toLowerCase();

         const filteredByCategory = selectedCategory === "Все" ? this.card : this.card.filter((item) => item.category === selectedCategory);

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
