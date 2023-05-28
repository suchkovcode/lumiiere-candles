import { BacketItem } from "./canvasItem";

export class Backet {
   constructor(selectorPerent) {
      this.el = document.querySelector(selectorPerent);
      this.backet = this.el.querySelector(".backet");
      this.open = this.el.querySelector(".header__btn-backet");
      this.close = this.el.querySelector(".backet__close");
      this.arrBacket = [];
      this.init();
   }

   handleEvent() {
      if (!this.backet.classList.contains("active")) {
         this.#openBacket();
         this.#isLocalStogage();
      } else {
         this.#closeBacket();
         this.#isLocalStogage();
      }
   }

   init() {
      this.open.addEventListener("click", this);
      this.close.addEventListener("click", this);
   }

   render(arrData) {
      const productList = this.el.querySelector(".backet__product-list");
      productList.innerHTML = this.#html(arrData);
      this.#incrementCount();
      this.#decrementCount();
   }

   #html(data) {
      const dataRender = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      const markup = dataRender.map((item, index) => new BacketItem(item, index).html());
      return markup.join("");
   }

   #isLocalStogage() {
      const emptyContainer = this.el.querySelector(".backet__empty");
      const productContainer = this.el.querySelector(".backet__product");
      const isEmpty = localStorage.getItem("backetElements") !== null;
      if (isEmpty) {
         emptyContainer.classList.add("hidden");
         productContainer.classList.remove("hidden");
         this.#addItemBacket();
      } else {
         emptyContainer.classList.remove("hidden");
         productContainer.classList.add("hidden");
      }
   }

   #addItemBacket() {
      this.arrBacket = JSON.parse(localStorage.getItem("backetElements"));
      this.render(this.arrBacket);
   }

   #updateDataAtributeItem(id) {
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

   #incrementCount() {
      const btnCount = this.backet.querySelectorAll(".backet__product-plusminus");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            const totalCount = event.currentTarget.querySelector(".backet__product-total");
            let dataValueCountChange = totalCount.getAttribute("data-value");
            if (event.target.dataset.type === "plus") {
               dataValueCountChange++;
               if (dataValueCountChange <= "10") {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
                  this.#updateDataAtributeItem(event.currentTarget.dataset.id);
                  this.#matchAllSum();
               }
            }
         });
      });
   }

   #decrementCount() {
      const btnCount = this.backet.querySelectorAll(".backet__product-plusminus");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            const totalCount = event.currentTarget.querySelector(".backet__product-total");
            let dataValueCountChange = totalCount.getAttribute("data-value");
            if (event.target.dataset.type === "minus") {
               dataValueCountChange--;
               if (dataValueCountChange >= "1") {
                  totalCount.setAttribute("data-value", dataValueCountChange);
                  totalCount.textContent = dataValueCountChange;
                  this.#updateDataAtributeItem(event.currentTarget.dataset.id);
                  this.#matchAllSum();
               }
            }
         });
      });
   }

   #openBacket() {
      this.backet.classList.add("active");
   }

   #closeBacket() {
      this.backet.classList.remove("active");
   }
}
