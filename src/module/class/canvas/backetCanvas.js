// @ts-nocheck
// TODO: При удалении с корзины элемента необходимо отчишать перменную массива добавленых карточек в корзину
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
      this.render();
      this.open.addEventListener("click", () => {
         this.backet.classList.add("active");
         this.render();
      });

      this.close.addEventListener("click", () => {
         this.backet.classList.remove("active");
      });
   }

   render() {
      if (this.#isStorageExist()) {
         const storageElement = this.#getStorageData();
         const backetItem = storageElement ? this.#getStorageData() : [];
         const dataRenderSort = backetItem.sort((a, b) => (a.name > b.name ? 1 : -1));
         this.list.innerHTML = dataRenderSort.map((item, index) => new CardBacket(item, index).html()).join("");

         this.emptyChangeDataCard();
         this.#changeCountCard();
         this.updateAllCardAtributes();
         this.updateBacketCountItem();
         this.updateBacketTotalSum();
         this.#removeItemBacket();
      } else {
         return null;
      }
   }

   emptyChangeDataCard() {
      const emptyContainer = this.#getSingletNode(".backet__empty");
      const productContainer = this.#getSingletNode(".backet__product");

      if (this.#isStorageExist(Backet.nameStorageItemsCard)) {
         emptyContainer.classList.add("hidden");
         productContainer.classList.remove("hidden");
      } else {
         emptyContainer.classList.remove("hidden");
         productContainer.classList.add("hidden");
      }
   }

   updateBacketCountItem = async () => {
      const storageDataLenght = this.#isStorageExist() ? this.#getStorageData().length : "0";
      const countBacketNumber = this.#getSingletNode(".header__icon-count[data-type='backet']");
      countBacketNumber.textContent = storageDataLenght;
   };

   updateAllCardAtributes() {
      const itemCollection = this.#getHtmlColletcion("backet__product-item");
      const allElementArr = [...itemCollection];

      allElementArr.forEach((element) => {
         const { count, cost } = element.dataset;
         const totalMatch = element.querySelector(".backet__product-cost");
         const mathSum = parseFloat((Number(count) * Number(cost)).toFixed(4));

         element.dataset.sum = mathSum;
         totalMatch.textContent = mathSum;
      });
   }

   updateBacketTotalSum() {
      const totalSum = this.backet.querySelector(".backet__product-value");
      const totalSumAtr = this.backet.querySelector(".backet__product-all");
      const itemDataSum = this.backet.querySelectorAll(".backet__product-item");
      const arrSum = [];

      itemDataSum.forEach((element) => {
         arrSum.push(Number(element.dataset.sum));
         const sumOfNumbers = parseFloat(arrSum.reduce((acc, number) => acc + number, 0).toFixed(4));
         totalSum.textContent = sumOfNumbers;
         totalSumAtr.dataset.sum = sumOfNumbers;
      });
   }

   #updateCardAtributes(articleCode) {
      const currentElementArticle = this.#getSingletNode(`.backet__product-item[data-code='${articleCode}']`);
      const curentTotalCount = currentElementArticle.querySelector(".backet__product-total");
      const curentCost = currentElementArticle.querySelector(".backet__product-cost");
      const { value } = curentTotalCount.dataset;
      const { cost } = currentElementArticle.dataset;
      const mathSum = parseFloat((Number(cost) * Number(value)).toFixed(4));

      currentElementArticle.dataset.count = value;
      currentElementArticle.dataset.sum = mathSum;
      curentCost.textContent = mathSum;

      if (this.#isStorageExist()) {
         const storageElement = this.#getStorageData();
         const currentItem = storageElement.find((item) => item.article === articleCode);

         currentItem.count = Number(value);
         this.#setStorageData(Backet.nameStorageItemsCard, storageElement);
      }
   }

   #removeItemBacket() {
      const emptyContainer = this.#getSingletNode(".backet__empty");
      const productContainer = this.#getSingletNode(".backet__product");

      if (this.#isStorageExist()) {
         const allBacketItem = this.backet.getElementsByClassName("backet__product-remove");
         const allBacketItemArr = [...allBacketItem];

         allBacketItemArr.forEach((element) => {
            element.addEventListener("click", (event) => {
               const { code } = event.currentTarget.dataset;
               this.backet.querySelector(`.backet__product-item[data-code='${code}']`).remove();

               this.updateBacketTotalSum();

               const allBacketItemArr = [...allBacketItem];
               const newArr = this.#getStorageData().filter((item) => item.article !== code);
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

   #changeCountCard() {
      const btnCountCollection = this.#getHtmlColletcion("backet__product-plusminus");
      const btnCountArr = [...btnCountCollection];
      btnCountArr.forEach((element) => {
         element.addEventListener("click", (event) => {
            const { type } = event.target.dataset;
            const totalCount = event.currentTarget.querySelector(".backet__product-total");
            let dataValueCountChange = Number(totalCount.textContent);

            if (type === "plus") {
               dataValueCountChange++;
               if (dataValueCountChange <= 10) {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
               }
            }

            if (type === "minus") {
               dataValueCountChange--;
               if (dataValueCountChange >= 1) {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
               }
            }

            this.#updateCardAtributes(event.currentTarget.dataset.article);
            this.updateBacketTotalSum();
         });
      });
   }

   #getStorageData(storageKey = Backet.nameStorageItemsCard) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
   }

   #getSingletNode(selectorNode) {
      return document.querySelector(selectorNode);
   }

   #getHtmlColletcion(selectorNode) {
      return document.getElementsByClassName(selectorNode);
   }

   #setStorageData(storageKey = Backet.nameStorageItemsCard, dataStorage = []) {
      return localStorage.setItem(storageKey, JSON.stringify(dataStorage));
   }

   #isStorageExist(storageKey = Backet.nameStorageItemsCard) {
      const isNull = localStorage.getItem(storageKey) !== null;
      if (isNull) {
         const dataStorage = JSON.parse(localStorage.getItem(storageKey));
         const emptyOrder = Object.keys(dataStorage).length === 0;
         return isNull && !emptyOrder ? true : false;
      }
   }
}
