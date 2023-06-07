/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
import { CardBacket } from "../markup/cardBacketMarkup";

export class Backet {
   static nameStorageItemsCard = "backetElements";

   constructor() {
      this.el = document.querySelector(".header");
      this.backet = this.el.querySelector(".backet");
      this.list = this.el.querySelector(".backet__product-list");
      this.open = this.el.querySelector(".header__btn-backet");
      this.close = this.el.querySelector(".backet__close");
   }

   init() {
      this.open.addEventListener("click", this);
      this.close.addEventListener("click", this);
      this.render();
      this.updateBacketCountItem();
      this.#updateAllDataAtributeItem();
      this.#incrementDecrementCount();
   }

   handleEvent() {
      !this.backet.classList.contains("active") ? this.backet.classList.add("active") : this.backet.classList.remove("active");
      this.emptyChangeDataCard();
      this.#matchAllSum();
      this.#updateAllDataAtributeItem();
      this.#removeItemBacket();
   }

   render() {
      const storageElement = localStorage.getItem(Backet.nameStorageItemsCard);
      const isEmptyStorage = storageElement !== null;
      const backetItem = isEmptyStorage ? JSON.parse(localStorage.getItem(Backet.nameStorageItemsCard)) : [];
      const dataRenderSort = backetItem.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.list.innerHTML = dataRenderSort.map((item, index) => new CardBacket(item, index).html()).join("");
   }

   updateBacketCountItem() {
      const storageDataLenght = this.#isStorageExist(Backet.nameStorageItemsCard) ? this.#getStorageData(Backet.nameStorageItemsCard).length : "0";
      const countBacketNumber = this.#getSingletNode(".header__icon-count[data-type='backet']");
      countBacketNumber.textContent = storageDataLenght;
   }

   emptyChangeDataCard() {
      const emptyContainer = this.el.querySelector(".backet__empty");
      const productContainer = this.el.querySelector(".backet__product");
      const isEmptyStorage = localStorage.getItem(Backet.nameStorageItemsCard) !== null;

      if (isEmptyStorage) {
         emptyContainer.classList.add("hidden");
         productContainer.classList.remove("hidden");
      } else {
         emptyContainer.classList.remove("hidden");
         productContainer.classList.add("hidden");
      }
   }

   #updateAllDataAtributeItem() {
      const allElement = this.backet.querySelectorAll(".backet__product-item");
      allElement.forEach((element) => {
         const totalMatch = element.querySelector(".backet__product-cost");
         const curentTotalCount = element.dataset.count;
         const curentCost = element.dataset.cost;
         const mathSum = Number(curentTotalCount) * Number(curentCost);
         element.dataset.sum = parseFloat(mathSum.toFixed(4));
         totalMatch.textContent = parseFloat(mathSum.toFixed(4));
         this.#matchAllSum();
      });
   }

   #updateCurrentDataAtributeItem(article) {
      const isEmptyStorage = localStorage.getItem(Backet.nameStorageItemsCard) !== null;
      const currentElementArticle = this.backet.querySelector(`.backet__product-item[data-code='${article}']`);
      const curentTotalCount = currentElementArticle.querySelector(".backet__product-total");
      const curentCost = currentElementArticle.querySelector(".backet__product-cost");
      const mathSum = Number(currentElementArticle.dataset.cost) * Number(curentTotalCount.dataset.value);

      currentElementArticle.dataset.count = curentTotalCount.dataset.value;
      currentElementArticle.dataset.sum = parseFloat(mathSum.toFixed(4));
      curentCost.textContent = parseFloat(mathSum.toFixed(4));

      if (isEmptyStorage) {
         const storageElement = JSON.parse(localStorage.getItem(Backet.nameStorageItemsCard));
         const test = storageElement.find((item) => item.article === article);
         test.count = Number(curentTotalCount.dataset.value);
         localStorage.setItem(Backet.nameStorageItemsCard, JSON.stringify(storageElement));
      }
   }

   #matchAllSum() {
      const totalSum = this.backet.querySelector(".backet__product-value");
      const totalSumAtr = this.backet.querySelector(".backet__product-all");
      const itemDataSum = this.backet.querySelectorAll(".backet__product-item");
      const arrSum = [];
      itemDataSum.forEach((element) => {
         arrSum.push(Number(element.dataset.sum));
         const sumOfNumbers = arrSum.reduce((acc, number) => acc + number, 0);
         totalSum.textContent = parseFloat(sumOfNumbers.toFixed(4));
         totalSumAtr.dataset.sum = parseFloat(sumOfNumbers.toFixed(4));
      });
   }

   #removeItemBacket() {
      const emptyContainer = this.#getSingletNode(".backet__empty");
      const productContainer = this.#getSingletNode(".backet__product");

      if (this.#isStorageExist(Backet.nameStorageItemsCard)) {
         const allBacketItem = this.backet.getElementsByClassName("backet__product-remove");
         const allBacketItemArr = [...allBacketItem];

         allBacketItemArr.forEach((element) => {
            element.addEventListener("click", (event) => {
               const { code } = event.currentTarget.dataset;
               this.backet.querySelector(`.backet__product-item[data-code='${code}']`).remove();
               this.#matchAllSum();
               const allBacketItemArr = [...allBacketItem];
               const newArr = this.#getStorageData(Backet.nameStorageItemsCard).filter((item) => item.article !== code);
               this.#setStorageData(Backet.nameStorageItemsCard, newArr);

               if (allBacketItemArr.length === 0) {
                  emptyContainer.classList.remove("hidden");
                  productContainer.classList.add("hidden");
                  localStorage.removeItem(Backet.nameStorageItemsCard);
               }
               this.updateBacketCountItem();
            });
         });
      }
   }

   #incrementDecrementCount() {
      const btnCount = this.backet.querySelectorAll(".backet__product-plusminus");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            const totalCount = event.currentTarget.querySelector(".backet__product-total");
            let dataValueCountChange = Number(totalCount.textContent);

            if (event.target.dataset.type === "plus") {
               dataValueCountChange++;
               if (dataValueCountChange <= "10") {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
               }
            }
            if (event.target.dataset.type === "minus") {
               dataValueCountChange--;
               if (dataValueCountChange >= "1") {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
               }
            }
            this.#updateCurrentDataAtributeItem(event.currentTarget.dataset.article);
            this.#matchAllSum();
         });
      });
   }

   #getStorageData(storageKey) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
   }

   #getSingletNode(selectorNode) {
      return this.el.querySelector(selectorNode);
   }

   #setStorageData(storageKey, dataStorage = []) {
      return localStorage.setItem(storageKey, JSON.stringify(dataStorage));
   }

   #isStorageExist(storageKey) {
      const isNull = localStorage.getItem(storageKey) !== null;
      if (isNull) {
         const dataStorage = JSON.parse(localStorage.getItem(storageKey));
         const emptyOrder = Object.keys(dataStorage).length === 0;
         return isNull && !emptyOrder ? true : false;
      }
   }
}
