import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
   state: () => {
      return {
         params: {
            "pagination[page]": 1,
            "pagination[pageSize]": 100,
            "locale": "ru",
         },
         isActiveFavorite: false,
         isActiveBacket: false,
         pageNumber: 1,
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

      async logOut() {
         this.isAuth = false;
      },

      async logIn() {
         this.isAuth = true;
      },

      async setPageNumber(value) {
         this.pageNumber = value;
      },
   },
});
