// @ts-nocheck
// TODO: При удалении с корзины элемента необходимо отчишать перменную массива добавленых карточек в избарнное

import { CardFavorite } from "../markup/cardFavoriteMarkup";
import { CardAddFavorite } from "../catalog/cardAddFavorite";

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
      this.render();
      this.open.addEventListener("click", () => {
         this.favorite.classList.add("active");
         this.render();
      });

      this.close.addEventListener("click", () => {
         this.favorite.classList.remove("active");
      });
   }

   render() {
      if (this.#isStorageExist(Favorite.nameStorageItemsFavorite)) {
         this.list.innerHTML = this.#getStorageData(Favorite.nameStorageItemsFavorite)
            .map((item, index) => new CardFavorite(item, index).html())
            .join("");

         this.#emptyChangeDataCard();
      } else {
         return null;
      }
      this.#removeItemBacket();
   }

   updateFavoriteCountItem = async () => {
      const storageDataLenght = this.#isStorageExist(Favorite.nameStorageItemsFavorite)
         ? this.#getStorageData(Favorite.nameStorageItemsFavorite).length
         : "0";
      const countBacketNumber = document.querySelector(".header__icon-count[data-type='favorite']");
      countBacketNumber.textContent = storageDataLenght;
   };

   #removeItemBacket = async () => {
      const emptyContainer = document.querySelector(".favorite__empty");
      const listContainer = document.querySelector(".favorite__list");

      if (this.#isStorageExist(Favorite.nameStorageItemsFavorite)) {
         const allFavoriteItem = this.favorite.getElementsByClassName("favorite__list-remove");
         const allFavoriteItemArr = [...allFavoriteItem];

         allFavoriteItemArr.forEach((element) => {
            element.addEventListener("click", (event) => {
               const { id } = event.currentTarget.dataset;
               this.favorite.querySelector(`.favorite__list-item[data-id='${id}']`).remove();
               const allFavoriteItemArr = [...allFavoriteItem];
               const newArr = this.#getStorageData(Favorite.nameStorageItemsFavorite).filter(
                  (item) => item.article !== id,
               );

               if (allFavoriteItemArr.length === 0) {
                  emptyContainer.classList.remove("hidden");
                  listContainer.classList.add("hidden");
                  localStorage.removeItem(Favorite.nameStorageItemsFavorite);
               }

               new CardAddFavorite().removeFavoriteItem(id, newArr);
               this.#setStorageData(Favorite.nameStorageItemsFavorite, newArr);
               this.updateFavoriteCountItem();
            });
         });
      }
   };

   #emptyChangeDataCard() {
      const emptyContainer = document.querySelector(".favorite__empty");
      const productContainer = document.querySelector(".favorite__list");

      if (this.#isStorageExist(Favorite.nameStorageItemsFavorite)) {
         emptyContainer.classList.add("hidden");
         productContainer.classList.remove("hidden");
      } else {
         emptyContainer.classList.remove("hidden");
         productContainer.classList.add("hidden");
      }
   }

   #getStorageData(storageKey) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
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
