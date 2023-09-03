import { defineStore } from "pinia";
import { useAppStore } from "@/store/appStore";

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
         const store = useAppStore();
         const card = store.products.find((item) => item.uid === cardData.id);
         const existingCard = this.cards.find((item) => item.article === card.article[cardData.size]);

         if (existingCard) {
            existingCard.count = Math.min(existingCard.count + cardData.count, 10);
            this.sumCard(existingCard.article);
         } else {
            const newCardData = {
               id: cardData.id,
               article: card.article[cardData.size],
               count: cardData.count,
               price: card.price[cardData.size],
               currency: card.price.currency,
               size: cardData.size,
            };
            this.cards.push(newCardData);
            this.sumCard(newCardData.article);
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
