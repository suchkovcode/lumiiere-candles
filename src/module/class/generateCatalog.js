/* eslint-disable max-len */
import { Card } from "./cards";

export class GenerateCatalog {
   constructor(target, data) {
      this._target = document.querySelector(target);
      this.#init(data);
   }

   #init(data) {
      this.#render(data);
      this.#incrementCount();
      this.#decrementCount();
      this.#selectFavorite();
      this.#changeSize();
   }

   #html(data) {
      const markup = data.map((item, index) => {
         return new Card(item, index).html();
      });
      return markup.join("");
   }

   #render(arrData) {
      try {
         this._target.innerHTML = this.#html(arrData);
      } catch (err) {}
   }

   #selectFavorite() {
      const arrFavoriteElements = [];
      const cardFavorite = this._target.querySelectorAll(".card__favorite[data-type='favorite']");
      const isExist = localStorage.getItem("favoriteElements");

      if (isExist !== null) {
         const getFavoriteData = JSON.parse(localStorage.getItem("favoriteElements"));
         getFavoriteData.map((item) => {
            const currentElement = this._target.querySelector(`.card__favorite[data-id="${item.id}"]`);
            currentElement.dataset.select = true;
            arrFavoriteElements.push({
               id: item.id,
               title: item.title,
               hero: item.hero,
               code: item.code,
            });
         });
      }

      cardFavorite.forEach((element) => {
         element.addEventListener("click", (event) => {
            const dataElement = data.find((dataElement) => dataElement.id == event.currentTarget.dataset.id);
            const existElement = Boolean(arrFavoriteElements.find((item) => item.id == event.currentTarget.dataset.id));
            if (event.currentTarget.dataset.select === "false") {
               event.currentTarget.dataset.select = true;
               if (!existElement) {
                  arrFavoriteElements.push({
                     id: event.currentTarget.dataset.id,
                     title: dataElement.title,
                     hero: dataElement.hero,
                     code: dataElement.code.small,
                  });
                  localStorage.setItem("favoriteElements", JSON.stringify(arrFavoriteElements));
               }
            } else {
               const existElement = arrFavoriteElements.find((item) => item.id == event.currentTarget.dataset.id);
               const indexElement = arrFavoriteElements.indexOf(existElement);
               event.currentTarget.dataset.select = false;
               arrFavoriteElements.splice(indexElement, 1);
               localStorage.setItem("favoriteElements", JSON.stringify(arrFavoriteElements));
            }
         });
      });
   }

   #changeSize() {
      const changeContainer = this._target.querySelectorAll(".card__size");
      const dataSize = {};
      changeContainer.forEach((element) => {
         const selectSizeElement = element.querySelectorAll(".card__size-btn");
         element.addEventListener("click", (event) => {
            if (event.target.classList == "card__size-btn") {
               dataSize.card = event.target.dataset.id;
               dataSize.size = event.target.dataset.value;
               dataSize.price = event.target.dataset.price;
               dataSize.select = event.target.dataset.select;
               selectSizeElement.forEach((element) => {
                  element.dataset.select = false;
                  event.target.dataset.select = true;
               });
               this.#chagePrice(dataSize);
            }
         });
      });
   }

   #chagePrice(dataSize) {
      const currentValue = this._target.querySelector(`.card[data-id='${dataSize.card}'] .card__price`);
      const currentPrice = this._target.querySelector(`.card[data-id='${dataSize.card}'] .card__price-value`);
      currentValue.dataset.value = dataSize.price;
      currentPrice.textContent = dataSize.price;
   }

   #incrementCount() {
      const btnCount = this._target.querySelectorAll(".card__btn-count[data-type='count']");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            let dataValueCountChange = event.currentTarget.getAttribute("data-value");
            const cardcountValue = event.currentTarget.querySelector(".card__count-value");
            if (event.target.dataset.type === "plus") {
               dataValueCountChange++;
               if (dataValueCountChange <= "10") {
                  event.currentTarget.setAttribute("data-value", dataValueCountChange);
                  cardcountValue.textContent = dataValueCountChange;
               }
            }
         });
      });
   }

   #decrementCount() {
      const btnCount = this._target.querySelectorAll(".card__btn-count[data-type='count']");
      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            let dataValueCountChange = event.currentTarget.getAttribute("data-value");
            const cardcountValue = event.currentTarget.querySelector(".card__count-value");
            if (event.target.dataset.type === "minus") {
               if (dataValueCountChange > "1") {
                  dataValueCountChange--;
                  event.currentTarget.setAttribute("data-value", dataValueCountChange);
                  cardcountValue.textContent = dataValueCountChange;
               }
            }
         });
      });
   }
}
