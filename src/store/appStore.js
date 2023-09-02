import { defineStore } from "pinia";
import { getProduct } from "@/api/request";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         products: [],
         params: {
            "pagination[page]": 1,
            "pagination[pageSize]": 10,
            "locale": "ru",
            "populate": "*",
         },

         filter: {
            category: "Все",
            sort: "new",
            aroma: [],
            collection: [],
         },

         isActiveFavorite: false,
         isActiveBacket: false,
         pageNumber: 1,
         searchQuery: "",
      };
   },

   getters: {
      uniqueCategories(state) {
         return [...new Set(state.products.map((item) => item.category))].sort((a, b) => b.localeCompare(a));
      },

      uniqueCollection(state) {
         return [...new Set(state.products.map((item) => item.collection))].sort((a, b) => b.localeCompare(a));
      },

      uniqueAroma(state) {
         return [...new Set(state.products.map((item) => item.aroma))].sort((a, b) => b.localeCompare(a));
      },

      filteredProducts(state) {
         const selectedCategory = state.filter.category;
         const sortingFunctions = {
            new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
            old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };
         const sortingFunction = sortingFunctions[state.filter.sort];
         const selectedAromas = new Set(state.filter.aroma);
         const selectedCollections = new Set(state.filter.collection);
         const startIndex = (state.pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         const searchQuery = state.searchQuery.trim().toLowerCase();

         // Фильтрация по категории
         const filteredByCategory = selectedCategory === "Все" ? state.products : state.products.filter((item) => item.category === selectedCategory);

         // Сортировка
         const sortedByCategory = sortingFunction ? [...filteredByCategory].sort(sortingFunction) : [...filteredByCategory];

         // Фильтрация по ароматам
         const filteredByAroma = selectedAromas.size === 0 ? sortedByCategory : sortedByCategory.filter((item) => selectedAromas.has(item.aroma));

         // Фильтрация по коллекциям
         const filteredByCollection = selectedCollections.size === 0 ? filteredByAroma : filteredByAroma.filter((item) => selectedCollections.has(item.collection));

         // Пагинация
         const filteredByLimitedCards = filteredByCollection.slice(startIndex, endIndex);

         // Фильтрация по поисковому запросу
         const filteredBySearchQuery = !searchQuery
            ? filteredByLimitedCards
            : filteredByLimitedCards.filter((item) => item.title.toLowerCase().includes(searchQuery));

         // cardPaginationCount
         const itemCount = state.searchQuery.length > 0 ? filteredBySearchQuery.length : filteredByCollection.length;
         const cardPaginationCount = Math.ceil(itemCount / 6);

         return {
            filteredProducts: filteredBySearchQuery,
            cardPaginationCount: cardPaginationCount,
         };
      },


      getCandlesCard(state) {
         return state.products.filter((item) => item.category === "Свечи");
      },

      getMeltsCard(state) {
         return state.products.filter((item) => item.category === "Мелтсы");
      },

      getBoxesCard(state) {
         return state.products.filter((item) => item.category === "Наборы свечей");
      },

      getPostcardCard(state) {
         return state.products.filter((item) => item.category === "Открытки");
      },

      getPostcardMore(state) {
         return state.products.filter((item) => item.category === "Дополнительно");
      },
   },

   actions: {
      async getProductList() {
         try {
            const { card } = await getProduct(this.params);
            this.setProducData(card);
         } catch (error) {
            console.error(error.message);
         }
      },

      async setProducData(productData) {
         this.products = productData;
      },

      async setCollectionFilter(collectionName) {
         this.filter.collection.push(collectionName);
      },

      async updateFavoriteCanvas(state) {
         this.isActiveFavorite = state;
      },

      async updateBacketCanvas(state) {
         this.isActiveBacket = state;
      },

      async updateFilterData(data) {
         this.filter = data;
      },

      async updatePageNumber(data) {
         this.pageNumber = data;
      },

      async updateSearchQuery(data) {
         this.searchQuery = data;
      },
   },
});
