// @ts-nocheck

import { Backet } from "../canvas/backetCanvas";

export class CardAddBacket {
   static nameStorageItemsCard = "backetElements";

   constructor(element, data) {
      this.el = element;
      this.data = data;
   }

   init() {
      this.#setBacketCard();
   }

   #getStorageData(storageKey = CardAddBacket.nameStorageItemsCard) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
   }

   #getDataCard(eventData) {
      const { id } = eventData.currentTarget.dataset;
      const { title, hero } = this.data.find((dataElement) => dataElement.id == id);
      const currentCard = this.#getSingletNode(`.card[data-id="${id}"]`);
      const currentPrice = this.#getCustomSingleNode(currentCard, ".card__price");
      const currentSize = this.#getCustomSingleNode(currentCard, ".card__size-btn[data-select='true']");
      const currentCount = this.#getCustomSingleNode(currentCard, ".card__btn-count[data-type='count']");
      const currentArticle = this.#getCustomSingleNode(currentCard, ".card__article-size[data-type='article']");

      return {
         id: String(id),
         article: String(currentArticle.dataset.value),
         count: Number(currentCount.dataset.value),
         size: Number(currentSize.dataset.value),
         price: Number(currentPrice.dataset.value),
         name: String(title),
         img: String(hero),
      };
   }

   #getCustomSingleNode(customParent, selectorNode) {
      return customParent.querySelector(selectorNode);
   }

   #getSingletNode(selectorNode) {
      return document.querySelector(selectorNode);
   }

   #getHtmlColletcion(selectorNode) {
      return document.getElementsByClassName(selectorNode);
   }

   #setStorageData(storageKey, dataStorage = []) {
      return localStorage.setItem(storageKey, JSON.stringify(dataStorage));
   }

   #setMemoryStorageArrBacket(pushArr) {
      const dataStorage = this.#getStorageData();

      if (dataStorage !== false) {
         dataStorage.map((item) => {
            pushArr.push({
               id: String(item.id),
               article: String(item.article),
               count: Number(item.count),
               size: Number(item.size),
               price: Number(item.price),
               name: String(item.name),
               img: String(item.img),
            });
         });
         return pushArr;
      }
   }

   #setArrBacketItem(eventData, arrSet) {
      const getDataObjectCard = this.#getDataCard(eventData);
      const isElement = arrSet.find((dataElement) => dataElement.article === getDataObjectCard.article) !== undefined;

      if (!isElement) {
         arrSet.push(getDataObjectCard);
         return arrSet;
      } else {
         const getArrItem = arrSet.find((dataElement) => dataElement.article === getDataObjectCard.article);
         const getArrIndexItem = arrSet.findIndex((dataElement) => dataElement.article === getArrItem.article);
         arrSet[getArrIndexItem].count = arrSet[getArrIndexItem].count + getDataObjectCard.count;
         if (arrSet[getArrIndexItem].count >= 10) {
            arrSet[getArrIndexItem].count = 10;
         }
         return arrSet;
      }
   }

   #setBacketCard() {
      const backet = new Backet();
      const arrBacketElements = [];
      const cardAddBacket = this.#getHtmlColletcion("card__btn-add");
      const cardArr = [...cardAddBacket];

      if (this.#isStorageExist()) {
         this.#setMemoryStorageArrBacket(arrBacketElements);
      }

      cardArr.forEach((cardAdd) => {
         cardAdd.addEventListener("click", (event) => {
            this.#setStorageData(CardAddBacket.nameStorageItemsCard, this.#setArrBacketItem(event, arrBacketElements));
            backet.render();
         });
      });
   }

   #isStorageExist(storageKey = CardAddBacket.nameStorageItemsCard) {
      const isNull = localStorage.getItem(storageKey) !== null;
      if (isNull) {
         const dataStorage = JSON.parse(localStorage.getItem(storageKey));
         const emptyOrder = Object.keys(dataStorage).length === 0;
         return isNull && !emptyOrder ? true : false;
      }
   }
}
