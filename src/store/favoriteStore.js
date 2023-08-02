import { defineStore } from "pinia";
import { useAppStore } from "@/store/appStore";
import { useStorage } from "@vueuse/core";

export const useFavoriteStore = defineStore("favoriteStore", {
   state: () => {
      return {
         cards: useStorage("favorite-items", []),
      };
   },

   actions: {
      addCardFavorite(cardId) {
         const store = useAppStore();
         const currentElement = store.products.filter((item) => item.id === cardId);
         this.cards.push(...currentElement);
      },

      delCardFavorite(cardId) {
         const currentElement = this.cards.filter((item) => item.id !== cardId);
         this.cards = currentElement;
      },
   },
});
