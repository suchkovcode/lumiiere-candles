import { defineStore } from "pinia";
import { useAppStore } from "@/stores/appStore";

export const useFavoriteStore = defineStore("favoriteStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   actions: {
      async addCardFavorite(cardId) {
         const { findOne } = useStrapi();
         const isExistsCard = this.cards.some((item) => item.uid === cardId);

         try {
            const { data } = await findOne("products", cardId);
            const { title, img, price, article } = data.attributes;

            const card = {
               uid: cardId,
               title: title || {},
               article: article || {},
               price: price || {},
               img: img?.data?.attributes || {},
            };

            if (!isExistsCard) {
               this.cards.push(card);
            }
         } catch (err) {
            console.error(err);
         }
      },

      delCardFavorite(cardId) {
         this.cards = this.cards.filter((item) => item.uid !== cardId);
      },
   },
});
