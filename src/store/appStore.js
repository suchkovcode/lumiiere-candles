import { defineStore } from "pinia";


export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         params: {
            "pagination[page]": 1,
            "pagination[pageSize]": 100,
            "locale": "ru",
            "populate": [
               "Category",
               "Collection",
               "Aroma",
               "img",
               "tags",
               "price.new",
               "price.old",
               "article",
               "weight",
               "SEO.metaTitle",
               "SEO.metaDescription",
               "SEO.keywords",
               "SEO.metaRobots",
               "SEO.canonicalURL",
               "SEO.metaSocial",
            ],
         },
         isActiveFavorite: false,
         isActiveBacket: false,
      };
   },


   actions: {
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
   },
});
