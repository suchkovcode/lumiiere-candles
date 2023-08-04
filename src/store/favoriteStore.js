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
         const isExistsCard = !!this.cards.find((item) => item.id === cardId);
         const currentElement = store.products.filter((item) => item.id === cardId);
         isExistsCard ? false : this.cards.push(...currentElement), store.updateFavorite(cardId, true);
      },

      delCardFavorite(cardId) {
         const store = useAppStore();
         const currentElement = this.cards.filter((item) => item.id !== cardId);
         store.updateFavorite(cardId, false)
         this.cards = currentElement;
      },
   },
});
