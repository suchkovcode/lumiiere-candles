import { defineStore } from "pinia";
import { Axios } from "@/api/request";

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
      async getProductList() {
         try {
            const { data } = await Axios.get("/products", { params: this.params });
            const arrayCard = data.data.map((item) => {
               const {
                  Aroma: { data: aromaData },
                  Category: { data: categoryData },
                  Collection: { data: collectionData },
                  img,
                  tags,
                  ...attributes
               } = item.attributes;

               const tagNames = tags.map((tag) => tag.name);

               return {
                  ...attributes,
                  img: img.data.attributes,
                  aroma: aromaData.attributes.name,
                  category: categoryData.attributes.name,
                  collection: collectionData.attributes.name,
                  tags: tagNames,
               };
            });
            this.setProducData(arrayCard, data.meta);
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
