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
         sumArr = parseFloat(sumArr.reduce((acc, number) => acc + number, 0).toFixed(4));
         return sumArr;
      },
   },

   actions: {
      addCardBacket(cardData) {
         const isExistsCard = !!this.cards.find((item) => item.code === cardData.code);

         if (isExistsCard) {
            const indexCardStore = this.cards.findIndex((item) => item.code === cardData.code);
            const sumCount = (this.cards[indexCardStore].count += cardData.count);

            if (sumCount >= 10) {
               this.cards[indexCardStore].count = 10;
            } else {
               this.cards[indexCardStore].count = sumCount;
            }
         } else {
            this.cards.push(cardData);
         }
      },

      delCardBacket(cardData) {
         const currentCardCode = store.products[currentCardIndex].code[cardData.cardSizeData];
         const currentElement = this.cards.filter((item) => item.code !== currentCardCode);
         this.cards = currentElement;
      },
   },
});
