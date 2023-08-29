import { defineStore } from "pinia";
import { PRODUCTS } from "@/assets/data/product";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         test: [],
         products: PRODUCTS,

         filterData: {
            category: "все",
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

      filteredByCategory(state) {
         const selectedCategory = state.filterData.category;
         if (selectedCategory === "все") {
            return state.products;
         }
         return state.products.filter((item) => item.category === selectedCategory);
      },

      sortedProducts(state) {
         const sortingFunctions = {
            new: (a, b) => a.date - b.date,
            old: (a, b) => b.date - a.date,
            start: (a, b) => b.title.localeCompare(a.title),
            end: (a, b) => a.title.localeCompare(b.title),
         };
         const sortingFunction = sortingFunctions[state.filterData.sort];
         const sortedByCategory = [...this.filteredByCategory];
         if (sortingFunction) {
            return sortedByCategory.sort(sortingFunction);
         }
         return sortedByCategory;
      },

      filteredByAroma(state) {
         const selectedAromas = state.filterData.aroma;
         if (selectedAromas.length === 0) {
            return this.sortedProducts;
         }
         const filteredByAroma = this.sortedProducts.filter((item) => selectedAromas.includes(item.aroma));
         return Array.from(new Set(filteredByAroma));
      },

      filteredByCollection(state) {
         const selectedCollections = state.filterData.collection;
         if (selectedCollections.length === 0) {
            return this.filteredByAroma;
         }
         const filteredByCollection = this.filteredByAroma.filter((item) => selectedCollections.includes(item.collection));
         return Array.from(new Set(filteredByCollection));
      },

      limitedCards(state) {
         const startIndex = (state.pageNumber - 1) * 6;
         const endIndex = startIndex + 6;
         return this.filteredByCollection.slice(startIndex, endIndex);
      },

      filteredBySearchQuery(state) {
         const searchQuery = state.searchQuery.trim().toLowerCase();
         if (!searchQuery) {
            return this.limitedCards;
         }
         return this.limitedCards.filter((item) => item.title.toLowerCase().includes(searchQuery));
      },

      cardPaginationCount(state) {
         const itemCount = state.searchQuery.length > 0 ? this.filteredBySearchQuery.length : this.filteredByCollection.length;
         return Math.ceil(itemCount / 6);
      },

      getCandlesCard(state) {
         return state.products.filter((item) => item.category === "свечи");
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
   },

   actions: {
      // downloadGallery(context) {
      //    return new Promise((resolve, reject) => {
      //       axios
      //          .get("http://localhost:1337/api/galleries")
      //          .then((response) => {
      //             var array = response.data.data;
      //             context.commit("load", array);
      //             resolve();
      //          })
      //          .catch((err) => {
      //             alert(err.message);
      //             reject(err.message);
      //          });
      //    });
      // },

      setCollectionFilter(caollectionName) {
         this.filterData.collection.push(caollectionName);
      },

      updateFavorite(cardId, state) {
         const index = this.products.findIndex((element) => element.id === cardId);
         this.products[index].isFavorite = state;
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
