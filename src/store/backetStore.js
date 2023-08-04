import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

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
         const isExistsCard = !!this.cards.find((item) => item.code === cardData.code);
         if (isExistsCard) {
            const indexCardStore = this.cards.findIndex((item) => item.code === cardData.code);
            const sumCount = (this.cards[indexCardStore].count += cardData.count);
            sumCount >= 10 ? (this.cards[indexCardStore].count = 10) : (this.cards[indexCardStore].count = sumCount);
            this.sumCard(cardData.code);
         } else {
            this.cards.push(cardData);
            this.sumCard(cardData.code);
         }
      },

      sumCard(codeCard) {
         const indexCardStore = this.cards.findIndex((item) => item.code === codeCard);
         const sumPrice = Number(parseFloat(this.cards[indexCardStore].price * this.cards[indexCardStore].count).toFixed(2));
         this.cards[indexCardStore].total = sumPrice;
      },

      delCardBacket(cardCode) {
         const currentElement = this.cards.filter((item) => item.code !== cardCode);
         this.cards = currentElement;
      },

      incrementCountCard(codeCard) {
         const currentCard = this.cards.find((item) => item.code === codeCard);
         currentCard.count === 10 ? (currentCard.count = 10) : currentCard.count++;
         this.sumCard(codeCard);
      },

      decrementCountCard(codeCard) {
         const currentCard = this.cards.find((item) => item.code === codeCard);
         currentCard.count === 1 ? (currentCard.count = 1) : currentCard.count--;
         this.sumCard(codeCard);
      },
   },
});
