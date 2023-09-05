import { defineStore } from "pinia";
import { getProductOne } from "~/api/request";
import { useAppStore } from "@/store/appStore";

export const useFavoriteStore = defineStore("favoriteStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   actions: {
      async addCardFavorite(cardId) {
         const store = useAppStore();
         const { card } = await getProductOne(cardId, store.params);
         const isExistsCard = this.cards.some((item) => item.uid === cardId);

         if (!isExistsCard) {
            this.cards.push(card);
         }
      },

      delCardFavorite(cardId) {
         this.cards = this.cards.filter((item) => item.uid !== cardId);
      },
   },
});
