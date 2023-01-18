/* eslint-disable max-len */
import { data } from "Root/assets/data/products";
import svg from "Assets/img/svg/sprite.svg";

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
         return /* html */ `
         <article class="card" data-index="${index}" data-id="${item.id}">
         <header class="card__header">
            <div class="card__favorite" data-type="favorite" data-select="false" data-id="${item.id}">
               <svg class="card__favorite-icon">
                  <use xlink:href="${svg}#cardFavoriteIcon"></use>
               </svg>
            </div>
            <img class="card__hero" src="${item.hero}" loading="lazy" alt="" width="140" height="180" />
         </header>
         <main class="card__body">
            <div class="card__rating">
               <div class="card__rating-icons">
                  <svg class="card__rating-icon" data-index="0">
                     <use xlink:href="${svg}#cardRatingIcon"></use>
                  </svg>
                  <svg class="card__rating-icon" data-index="1">
                     <use xlink:href="${svg}#cardRatingIcon"></use>
                  </svg>
                  <svg class="card__rating-icon" data-index="2">
                     <use xlink:href="${svg}#cardRatingIcon"></use>
                  </svg>
                  <svg class="card__rating-icon" data-index="3">
                     <use xlink:href="${svg}#cardRatingIcon"></use>
                  </svg>
                  <svg class="card__rating-icon" data-index="4">
                     <use xlink:href="${svg}#cardRatingIcon"></use>
                  </svg>
               </div>
               <span class="card__rating-value">${item.grade.level}</span>
               <span class="card__rating-total">(${item.grade.count})</span>

            </div>
            <h3 class="card__title">${item.title}</h3>
            <p class="card__article">
               Артикул:
               <span class="card__article-size" data-type="article">${item.code.small}</span>
            </p>
            <p class="card__description">${item.category.join(" | ").trim()}</p>
            <p class="card__price" data-value="${item.price.small}">
               <span class="card__price-currency">$</span>
               <span class="card__price-value">${item.price.small}</span>
            </p>
            <div class="card__size">
               <p class="card__size-title">Размер</p>
               <div class="card__size-select">
                  <button class="card__size-btn" type="button" data-id="${item.id}" data-index="0" data-value="40" data-price="${item.price.small}" data-select="true" >40 мл</button>
                  <button class="card__size-btn" type="button" data-id="${item.id}" data-index="1" data-value="100" data-price="${item.price.medium}" data-select="false" >100 мл</button>
                  <button class="card__size-btn" type="button"  data-id="${item.id}" data-index="2" data-value="200" data-price="${item.price.large}" data-select="false">200 мл</button>
               </div>
            </div>
         </main>
         <footer class="card__footer">
            <a class="card__btn-more" href="#">Подробнее</a>
            <div class="card__btn-count" data-type="count" data-value="1">
               <button class="card__btn-minus" data-type="minus"></button>
               <p class="card__count-value">1</p>
               <button class="card__btn-plus" data-type="plus"></button>
            </div>
            <button class="card__btn-add" data-type="add">
               <svg class="card__btn-add-icon">
                  <use xlink:href="${svg}#cardBtnAddIcon"></use>
               </svg>
               <span>В корзину</span>
            </button>
         </footer>
      </article>
         `;
      });
      return markup.join("");
   }

   #render(arrData) {
      try {
         this._target.innerHTML = this.#html(arrData);
      } catch (err) {
      }
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

setTimeout(() => {
   new GenerateCatalog("#popular-catalog", data);
}, 1500);
