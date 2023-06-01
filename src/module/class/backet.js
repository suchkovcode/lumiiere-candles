/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
// @ts-nocheck
import { BacketItem } from "./canvasItem";

export class Backet {
   constructor() {
      this.el = document.querySelector(".header");
      this.backet = this.el.querySelector(".backet");
      this.list = this.el.querySelector(".backet__product-list");
      this.open = this.el.querySelector(".header__btn-backet");
      this.close = this.el.querySelector(".backet__close");
      this.init();
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
      this.#emptyChangeDataCard();
      this.#matchAllSum();
      this.#updateAllDataAtributeItem();
   }

   render() {
      const storageElement = localStorage.getItem("backetElements");
      const isEmptyStorage = storageElement !== null;
      const backetItem = isEmptyStorage ? JSON.parse(localStorage.getItem("backetElements")) : [];
      const dataRenderSort = backetItem.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.list.innerHTML = dataRenderSort.map((item, index) => new BacketItem(item, index).html()).join("");
   }

   updateBacketCountItem() {
      const storageElement = localStorage.getItem("backetElements");
      const isEmptyStorage = storageElement !== null;
      const storageDataLenght = isEmptyStorage ? JSON.parse(storageElement).length : "0";
      const countBacketContainer = this.el.querySelector(".header__btn-backet");
      const countBacketNumber = countBacketContainer.querySelector(".header__icon-count");
      countBacketNumber.textContent = storageDataLenght;
   }

   #emptyChangeDataCard() {
      const emptyContainer = this.el.querySelector(".backet__empty");
      const productContainer = this.el.querySelector(".backet__product");
      const isEmptyStorage = localStorage.getItem("backetElements") !== null;

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

   #updateCurrentDataAtributeItem(id) {
      const currentElement = this.backet.querySelector(`.backet__product-item[data-id='${id}']`);
      const curentTotalCount = currentElement.querySelector(".backet__product-total");
      const curentCost = currentElement.querySelector(".backet__product-cost");
      const mathSum = Number(currentElement.dataset.cost) * Number(curentTotalCount.dataset.value);
      currentElement.dataset.count = curentTotalCount.dataset.value;
      currentElement.dataset.sum = parseFloat(mathSum.toFixed(4));
      curentCost.textContent = parseFloat(mathSum.toFixed(4));
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

   #incrementDecrementCount() {
      const btnCount = this.backet.querySelectorAll(".backet__product-plusminus");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            const totalCount = event.currentTarget.querySelector(".backet__product-total");
            let dataValueCountChange = Number(totalCount.textContent);

            if (event.target.dataset.type === "plus") {
               dataValueCountChange++;
               if (dataValueCountChange <= 10) {
                  totalCount.textContent = String(dataValueCountChange) ;
               }
            }
            if (event.target.dataset.type === "minus") {
               dataValueCountChange--;
               if (dataValueCountChange >= 1) {
                  totalCount.textContent = String(dataValueCountChange);
               }
            }
            this.#updateCurrentDataAtributeItem(event.currentTarget.dataset.id);
            this.#matchAllSum();
         });
      });
   }
}
