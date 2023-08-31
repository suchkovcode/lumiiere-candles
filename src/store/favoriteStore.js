import { defineStore } from "pinia";
import { useAppStore } from "@/store/appStore";

export const useFavoriteStore = defineStore("favoriteStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   actions: {
      addCardFavorite(cardId) {
         const store = useAppStore();
         const isExistsCard = this.cards.some((item) => item.uid === cardId);

         if (!isExistsCard) {
            const currentElement = store.products.find((item) => item.uid === cardId);
            this.cards.push(currentElement);
            store.updateFavorite(cardId, true);
         }
      },

      delCardFavorite(cardId) {
         const store = useAppStore();
         this.cards = this.cards.filter((item) => item.uid !== cardId);
         store.updateFavorite(cardId, false);
      },
   },
});
