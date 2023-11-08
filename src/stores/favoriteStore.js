import { defineStore } from "pinia";

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
            const { title, img, price, article, Category } = data.attributes;

            const card = {
               uid: cardId,
               title: title || {},
               article: article || {},
               price: price || {},
               img: img?.data?.attributes || {},
               category: Category.data?.attributes?.name,
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
