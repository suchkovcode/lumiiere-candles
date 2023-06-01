/* eslint-disable max-len */
import { Card } from "./cards";
import { Backet } from "./backet";

export class GenerateCatalog {
   constructor(target, data) {
      this._target = document.querySelector(target);
      this._data = data;
      this.#init(this._data);
   }

   #init(data) {
      this.#render(data);
      this.#incrementDecremenCount();
      this.#selectFavorite();
      this.#changeSize();
      this.#addBacket();
   }

   #html(data) {
      const markup = data.map((item, index) => new Card(item, index).html());
      return markup.join("");
   }

   #render(arrData) {
      try {
         this._target.innerHTML = this.#html(arrData);
      } catch (err) {}
   }

   #addBacket() {
      const arrBacketElements = [];
      const cardAddBacket = this._target.getElementsByClassName("card__btn-add");
      const cardArr = Array.from(cardAddBacket);
      cardArr.forEach((cardAdd) => {
         cardAdd.addEventListener("click", (event) => {
            const idCard = event.currentTarget.dataset.id;
            const currentCard = this._target.querySelector(`.card[data-id="${idCard}"]`);
            const currentPrice = currentCard.querySelector(".card__price").dataset.value;
            const currentSize = currentCard.querySelector(".card__size-btn[data-select='true']").dataset.value;
            const currentCount = Number(currentCard.querySelector(".card__btn-count[data-type='count']").dataset.value);
            const currentArticle = currentCard.querySelector(".card__article-size[data-type='article']").dataset.value;
            const cardData = this._data.find((dataElement) => dataElement.id == idCard);
            const isElement = arrBacketElements.find((dataElement) => dataElement.article === currentArticle) !== undefined;
            const isExist = localStorage.getItem("backetElements") !== null;

            if (!isElement) {
               arrBacketElements.push({
                  id: idCard,
                  article: currentArticle,
                  count: Number(currentCount),
                  size: currentSize,
                  price: currentPrice,
                  name: cardData.title,
                  img: cardData.hero,
               });
               localStorage.setItem("backetElements", JSON.stringify(arrBacketElements));

            } else {
               const addElement = arrBacketElements.find((dataElement) => dataElement.article === currentArticle);
               const indexElement = arrBacketElements.findIndex((dataElement) => dataElement.article === addElement.article);
               arrBacketElements[indexElement].count = arrBacketElements[indexElement].count + currentCount;
               if (arrBacketElements[indexElement].count >= 10) {
                  arrBacketElements[indexElement].count = 10;
               }
               localStorage.setItem("backetElements", JSON.stringify(arrBacketElements));
            }
            new Backet(".header").render();
            new Backet(".header").updateBacketCountItem();
         });
      });
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
            const dataElement = this._data.find((dataElement) => dataElement.id == event.currentTarget.dataset.id);
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
            const currnetId = event.target.dataset.id;
            const currentCard = this._target.querySelector(`.card[data-id="${currnetId}"]`);
            const currentArticle = currentCard.querySelector(".card__article-size");

            if (event.target.classList == "card__size-btn") {
               dataSize.card = event.target.dataset.id;
               dataSize.size = event.target.dataset.value;
               dataSize.price = event.target.dataset.price;
               dataSize.select = event.target.dataset.select;
               dataSize.article = event.target.dataset.article;
               currentArticle.dataset.value = dataSize.article;
               currentArticle.textContent = dataSize.article;
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

   #incrementDecremenCount() {
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
