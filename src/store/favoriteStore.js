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
         const isExistsCard = this.cards.some((item) => item.id === cardId);

         if (!isExistsCard) {
            const currentElement = store.products.find((item) => item.id === cardId);
            this.cards.push(currentElement);
            store.updateFavorite(cardId, true);
         }
      },

      delCardFavorite(cardId) {
         const store = useAppStore();
         this.cards = this.cards.filter((item) => item.id !== cardId);
         store.updateFavorite(cardId, false);
      },
   },
});
