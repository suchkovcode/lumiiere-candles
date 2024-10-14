<template>
   <section class="goods">
      <div class="container">
         <base-breadcrumbs class="goods__breadcrumbs" :roter-link="{ name: 'Каталог', to: '/catalog' }" />
         <div class="goods__header">
            <svg class="goods__header-icon" width="85" height="40">
               <use xlink:href="/img/sprite.svg#catalogHeaderIcon"></use>
            </svg>
            <h1 class="title goods__title">КАТАЛОГ</h1>
            <p class="subtitle goods__subtitle">
               <svg class="goods__subtitle-icon">
                  <use xlink:href="/img/sprite.svg#catalogGetting"></use>
               </svg>
               «Поверь дружок, здесь ты найдешь все для сохранения своего душевного равновесия»
            </p>
         </div>
         <div class="goods__search">
            <div class="goods__search-container">
               <input class="goods__search-input" type="text" placeholder="Что нужно найти?" @input="searchQueryData = $event.target.value" />
               <svg class="goods__search-icon" fill="none" stroke="rgb(182, 182, 182)">
                  <use xlink:href="/img/sprite.svg#search"></use>
               </svg>
            </div>
            <button class="goods__search-btn">Найти</button>
         </div>
      </div>
   </section>
   <div class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter :filters="getUniqueFilter" @filter-handler="(filter = $event), store.setPageNumber(1)" />
            <div>
               <ClientOnly>
                  <AppCatalog class="allcatalog__cards" :data-item="filteredProducts.products" />
                  <AppPagination class="allcatalog__pagination" :pagination-data="filteredProducts.pagination" />
                  <p v-if="!filteredProducts.products.length" class="emptyData">Список пуст</p>
                  <template #fallback>
                     <p class="emptyData">Загрузка карточек...</p>
                  </template>
               </ClientOnly>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
const store = useAppStore();
const { find } = useStrapi();

const filter = ref({});
const searchQueryData = ref("");

const { data } = await find("products", { "pagination[pageSize]": 100 });
const card = await useHandllerApi(data);

const sortingFunctions = {
   new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
   old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
   start: (a, b) => b.title.localeCompare(a.title),
   end: (a, b) => a.title.localeCompare(b.title),
};

const filteredProducts = computed(() => {
   const { sort, aroma, collection, category } = filter.value;
   const startIndex = (store.pageNumber - 1) * 6;
   const searchQuery = searchQueryData.value.trim().toLowerCase();

   let filtered = card.filter((item) => {
      const matchesCategory = category === "Все" || item.category === category;
      const matchesAroma = !aroma.length || aroma.includes(item.aroma);
      const matchesCollection = !collection.length || collection.includes(item.collection);
      const matchesSearch = !searchQuery || item.title.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesAroma && matchesCollection && matchesSearch;
   });

   const sorted = sort ? filtered.sort(sortingFunctions[sort]) : filtered;
   const paginatedItems = sorted.slice(startIndex, startIndex + 6);

   return {
      products: paginatedItems,
      pagination: Math.ceil(filtered.length / 6),
   };
});

const isEmptyObject = (obj) => {
   return Object.keys(obj).length === 0;
};

const getUniqueFilter = computed(() => {
   let uniqueCategories = new Set();
   let uniqueCollections = new Set();
   let uniqueAromas = new Set();

   for (const item of card) {
      if (item.category && !isEmptyObject(item.category)) {
         uniqueCategories.add(item.category);
      }
      if (item.collection && !isEmptyObject(item.collection)) {
         uniqueCollections.add(item.collection);
      }
      if (item.aroma && !isEmptyObject(item.aroma)) {
         uniqueAromas.add(item.aroma);
      }
   }

   return {
      uniqueCategories: Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b)),
      uniqueCollections: Array.from(uniqueCollections).sort((a, b) => a.localeCompare(b)),
      uniqueAromas: Array.from(uniqueAromas).sort((a, b) => a.localeCompare(b)),
   };
});
</script>
