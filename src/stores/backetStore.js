import { defineStore } from "pinia";

export const useBacketStore = defineStore("backetStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   getters: {
      getSumAddition() {
         return this.cards
            .reduce((total, element) => {
               const multiplySum = element.price * element.count;
               return total + multiplySum;
            }, 0)
            .toFixed(2);
      },
   },

   actions: {
      async addCardBacket(cardData) {
         const { findOne } = useStrapi();

         try {
            const { data } = await findOne("products", cardData.id);
            const { title, img, price, article } = data.attributes;
            const isExistsCard = this.cards.find((item) => item.article === article[cardData.size]);

            if (isExistsCard) {
               isExistsCard.count = Math.min(isExistsCard.count + cardData.count, 10);
               this.sumCard(isExistsCard.article);
            } else {
               const newCardData = {
                  id: cardData.id,
                  title: title,
                  img: img.data?.attributes,
                  article: article[cardData.size],
                  count: cardData.count,
                  price: price.new[cardData.size],
                  currency: price.currency,
                  size: cardData.size,
               };
               this.cards.push(newCardData);
               this.sumCard(newCardData.article);
            }
         } catch (err) {
            console.error(err);
         }
      },

      async sumCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card) {
            card.total = parseFloat((card.price * card.count).toFixed(2));
         }
      },

      async delCardBacket(cardCode) {
         this.cards = this.cards.filter((item) => item.article !== cardCode);
      },

      async incrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card && card.count < 10) {
            card.count += 1;
            this.sumCard(codeCard);
         }
      },

      async decrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card && card.count > 1) {
            card.count -= 1;
            this.sumCard(codeCard);
         }
      },
   },
});
