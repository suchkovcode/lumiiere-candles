<template>
   <section class="goods">
      <div class="container">
         <base-breadcrumbs class="goods__breadcrumbs" :roter-link="roterData" />
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
            <button class="goods__search-btn" @click="serchUpdate(searchQuery)">Найти</button>
         </div>
      </div>
   </section>
   <section class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter
               :category-data="uniqueCategories"
               :aroma-data="uniqueAroma"
               :collection-data="uniqueCollection"
               @filter="filterData = $event" />
            <div>
               <AppPagination class="allcatalog__pagination" />
               <AppCatalog v-if="filteredProducts.filteredProducts.length" :data-item="filteredProducts.filteredProducts" class="allcatalog__cards" />
               <p v-else class="emptyData">Список пуст</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
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
               last: true,
            },
         ],

         searchQuery: "",
      };
   },

   computed: {
      ...mapState(useAppStore, ["uniqueCategories", "uniqueAroma", "uniqueCollection", "filteredProducts"]),
   },

   methods: {
      ...mapActions(useAppStore, { serchUpdate: "updateSearchQuery" }),
   },
};
</script>
