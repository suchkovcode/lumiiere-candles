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
               <input class="goods__search-input" type="text" placeholder="Что нужно найти?" @input="searchQueryData = $event.target.value" />
               <svg class="goods__search-icon" fill="none" stroke="rgb(182, 182, 182)">
                  <use xlink:href="@/assets/img/svg/sprite.svg#search"></use>
               </svg>
            </div>
            <button class="goods__search-btn">Найти</button>
         </div>
      </div>
   </section>
   <div class="allcatalog">
      <div class="container">
         <div class="allcatalog__grid">
            <AppFilter @filter-handler="(filter = $event), store.setPageNumber(1)" />
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

const filteredProducts = computed(() => {
   const sortingFunctions = {
      new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
      old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
      start: (a, b) => b.title.localeCompare(a.title),
      end: (a, b) => a.title.localeCompare(b.title),
   };

   const { sort, aroma, collection, category } = filter.value;
   const startIndex = (store.pageNumber - 1) * 6;
   const endIndex = startIndex + 6;
   const searchQuery = searchQueryData.value.trim().toLowerCase();

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
});
</script>
