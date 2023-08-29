import { defineStore } from "pinia";

export const useBacketStore = defineStore("backetStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   getters: {
      sumAddition() {
         let sumArr = [];
         this.cards.forEach((element) => {
            const multiplysum = element.price * element.count;
            sumArr.push(Number(multiplysum));
         });
         sumArr = parseFloat(sumArr.reduce((acc, number) => acc + number, 0).toFixed(2));
         return sumArr;
      },
   },

   actions: {
      addCardBacket(cardData) {
         const existingCardIndex = this.cards.findIndex((item) => item.code === cardData.code);

         if (existingCardIndex !== -1) {
            const existingCard = this.cards[existingCardIndex];
            existingCard.count = Math.min(existingCard.count + cardData.count, 10);
            this.sumCard(cardData.code);
         } else {
            this.cards.push(cardData);
            this.sumCard(cardData.code);
         }
      },

      sumCard(codeCard) {
         const card = this.cards.find((item) => item.code === codeCard);
         if (card) {
            card.total = parseFloat((card.price * card.count).toFixed(2));
         }
      },

      delCardBacket(cardCode) {
         this.cards = this.cards.filter((item) => item.code !== cardCode);
      },

      incrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.code === codeCard);
         if (card) {
            card.count = Math.min(card.count + 1, 10);
            this.sumCard(codeCard);
         }
      },

      decrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.code === codeCard);
         if (card) {
            card.count = Math.max(card.count - 1, 1);
            this.sumCard(codeCard);
         }
      },
   },
});
