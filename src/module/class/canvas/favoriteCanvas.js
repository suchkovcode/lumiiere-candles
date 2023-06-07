/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
// @ts-nocheck

import { CardFavorite } from "../markup/cardFavoriteMarkup";

export class Favorite {
   static nameStorageItemsFavorite = "favoriteElements";

   constructor() {
      this.el = document.querySelector(".header");
      this.favorite = this.el.querySelector(".favorite");
      this.list = this.el.querySelector(".favorite__list");
      this.open = this.el.querySelector(".header__btn-favorite");
      this.close = this.el.querySelector(".favorite__close");
   }

   init() {
      this.open.addEventListener("click", this);
      this.close.addEventListener("click", this);
      this.render();
      this.#emptyChangeDataCard();
      this.#updateFavoriteCountItem();
      this.#removeItemBacket();
   }

   handleEvent() {
      !this.favorite.classList.contains("active") ? this.favorite.classList.add("active") : this.favorite.classList.remove("active");
      this.render();
      this.#emptyChangeDataCard();
      this.#updateFavoriteCountItem();
   }

   render() {
      this.#isStorageExist(Favorite.nameStorageItemsFavorite)
         ? (this.list.innerHTML = this.#getStorageData(Favorite.nameStorageItemsFavorite)
              .map((item, index) => new CardFavorite(item, index).html())
              .join(""))
         : null;
   }

   #emptyChangeDataCard() {
      const emptyContainer = this.#getSingletNode(".favorite__empty");
      const productContainer = this.#getSingletNode(".favorite__list");
      const isEmptyStorage = this.#isStorageExist(Favorite.nameStorageItemsFavorite);

      if (isEmptyStorage) {
         emptyContainer.classList.add("hidden");
         productContainer.classList.remove("hidden");
      } else {
         emptyContainer.classList.remove("hidden");
         productContainer.classList.add("hidden");
      }
   }

   #updateFavoriteCountItem() {
      const storageDataLenght = this.#isStorageExist(Favorite.nameStorageItemsFavorite) ? this.#getStorageData(Favorite.nameStorageItemsFavorite).length : "0";
      const countBacketNumber = this.#getSingletNode(".header__icon-count[data-type='favorite']");
      countBacketNumber.textContent = storageDataLenght;
   }

   #removeItemBacket() {
      const emptyContainer = this.#getSingletNode(".favorite__empty");
      const listContainer = this.#getSingletNode(".favorite__list");

      if (this.#isStorageExist(Favorite.nameStorageItemsFavorite)) {
         const allFavoriteItem = this.favorite.getElementsByClassName("favorite__list-remove");
         const allFavoriteItemArr = [...allFavoriteItem];

         allFavoriteItemArr.forEach((element) => {
            element.addEventListener("click", (event) => {
               const { id } = event.currentTarget.dataset;
               this.favorite.querySelector(`.favorite__list-item[data-id='${id}']`).remove();
               const allFavoriteItemArr = [...allFavoriteItem];
               const newArr = this.#getStorageData(Favorite.nameStorageItemsFavorite).filter((item) => item.article !== id);
               this.#setStorageData(Favorite.nameStorageItemsFavorite, newArr);

               if (allFavoriteItemArr.length === 0) {
                  emptyContainer.classList.remove("hidden");
                  listContainer.classList.add("hidden");
                  localStorage.removeItem(Favorite.nameStorageItemsFavorite);
               }
               this.#updateFavoriteCountItem();
            });
         });
      }
   }

   #getStorageData(storageKey) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
   }

   #setStorageData(storageKey, dataStorage = []) {
      return localStorage.setItem(storageKey, JSON.stringify(dataStorage));
   }

   #getCustomSingleNode(customParent, selectorNode) {
      return customParent.querySelector(selectorNode);
   }

   #getSingletNode(selectorNode) {
      return this.el.querySelector(selectorNode);
   }

   #getHtmlColletcion(selectorNode) {
      return this.el.getElementsByClassName(selectorNode);
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
