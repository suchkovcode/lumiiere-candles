import { defineStore } from "pinia";
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
         const config = useRuntimeConfig();
         const isExistsCard = this.cards.some((item) => item.uid === cardId);

         try {
            const response = await fetch(`${config.public.STRAPI}/api/products/${cardId}`, {
               method: "GET",
               params: {
                  locale: store.params.locale,
               },
            });
            
            const data = await response.json();
            const { title, img, price, article } = data.data.attributes;

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
