import { defineStore } from "pinia";
import { getProduct } from "@/api/request";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         products: [],
         meta: {},
         params: {
            "pagination[page]": 1,
            "pagination[pageSize]": 10,
            "locale": "ru",
            "populate": "*",
         },

         filterData: {
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

      filteredByCategory(state) {
         const selectedCategory = state.filterData.category;
         return selectedCategory === "Все" ? state.products : state.products.filter((item) => item.category === selectedCategory);
      },

      sortedProducts(state) {
         const sortingFunctions = {
            new: (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
            old: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };
         const sortingFunction = sortingFunctions[state.filterData.sort];
         const sortedByCategory = [...this.filteredByCategory];
         return sortingFunction ? sortedByCategory.sort(sortingFunction) : sortedByCategory;
      },

      filteredByAroma(state) {
         const selectedAromas = new Set(state.filterData.aroma);
         const filteredByAroma = this.sortedProducts.filter((item) => selectedAromas.has(item.aroma));
         return filteredByAroma.length === 0 ? this.sortedProducts : Array.from(new Set(filteredByAroma));
      },

      filteredByCollection(state) {
         const selectedCollections = new Set(state.filterData.aroma);
         const filteredByCollection = this.filteredByAroma.filter((item) => selectedCollections.has(item.collection));
         return filteredByCollection.length === 0 ? this.filteredByAroma : Array.from(new Set(filteredByCollection));
      },

      filteredByLimitedCards(state) {
         const startIndex = (state.pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         return this.filteredByCollection.slice(startIndex, endIndex);
      },

      filteredBySearchQuery(state) {
         const searchQuery = state.searchQuery.trim().toLowerCase();
         return !searchQuery
            ? this.filteredByLimitedCards
            : this.filteredByLimitedCards.filter((item) => item.title.toLowerCase().includes(searchQuery));
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

      cardPaginationCount(state) {
         const itemCount = state.searchQuery.length > 0 ? this.filteredBySearchQuery.length : this.filteredByCollection.length;
         return Math.ceil(itemCount / 6);
      },
   },

   actions: {
      async getProductList() {
         try {
            const { card, meta } = await getProduct(this.params);
            this.setProducData(card, meta);
         } catch (error) {
            console.error(error.message);
         }
      },

      setProducData(productData, productMeta) {
         this.products = productData;
         this.meta = productMeta;
      },

      setCollectionFilter(caollectionName) {
         this.filterData.collection.push(caollectionName);
      },

      updateFavoriteCanvas(state) {
         this.isActiveFavorite = state;
      },

      updateBacketCanvas(state) {
         this.isActiveBacket = state;
      },

      updateFilterData(data) {
         this.filterData = data;
      },

      updatePageNumber(data) {
         this.pageNumber = data;
      },

      updateSearchQuery(data) {
         this.searchQuery = data;
      },
   },
});
