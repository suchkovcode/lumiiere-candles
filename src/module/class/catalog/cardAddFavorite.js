import { Favorite } from "../canvas/favoriteCanvas";

export class CardAddFavorite {
   static nameStorageItemsFavorite = "favoriteElements";

   constructor(element, data) {
      this.el = element;
      this._data = data;
   }

   init() {
      this.#selectFavorite();
   }

   addFavoriteItem(idItem, arrFavorite) {
      const currentItem = this.#getSingletNode(`.card__favorite[data-id="${idItem}"]`);
      const { title, hero, code, price } = this._data.find((dataElement) => dataElement.id == idItem);
      const existElement = arrFavorite.find((item) => item.id == idItem) !== undefined;

      currentItem.dataset.select = true;

      if (!existElement) {
         arrFavorite.push({
            id: idItem,
            name: title,
            img: hero,
            price: price.small,
            article: code.small,
         });
         this.#setStorageData(CardAddFavorite.nameStorageItemsFavorite, arrFavorite);
      }
      return arrFavorite;
   }

   removeFavoriteItem(idItem, arrFavorite) {
      const currentItem = this.#getSingletNode(`.card__favorite[data-id="${idItem}"]`);
      const indexElement = arrFavorite.findIndex((item) => item.id == idItem);
      currentItem.dataset.select = false;
      arrFavorite.splice(indexElement, 1);
      this.#setStorageData(CardAddFavorite.nameStorageItemsFavorite, arrFavorite);
      return arrFavorite;
   }

   #selectFavorite() {
      const arrFavoriteElements = [];
      const cardFavorite = this.#getNodeList(".card__favorite[data-type='favorite']");
      const isExist = this.#isStorageExist(CardAddFavorite.nameStorageItemsFavorite);

      if (isExist) {
         this.#setMemoryStorageArrFavotite(CardAddFavorite.nameStorageItemsFavorite, arrFavoriteElements);
      }

      cardFavorite.forEach((element) => {
         element.addEventListener("click", (event) => {
            const { id, select } = event.currentTarget.dataset;
            if (select === "false") {
               this.addFavoriteItem(id, arrFavoriteElements);
               new Favorite().updateFavoriteCountItem();
            }
            if (select === "true") {
               this.removeFavoriteItem(id, arrFavoriteElements);
               new Favorite().updateFavoriteCountItem();
            }
         });
      });
   }

   #getSingletNode(selectorNode) {
      return document.querySelector(selectorNode);
   }

   #getNodeList(selectorNode) {
      return document.querySelectorAll(selectorNode);
   }

   #getStorageData(storageKey) {
      const isNull = this.#isStorageExist(storageKey);
      return isNull ? JSON.parse(localStorage.getItem(storageKey)) : false;
   }

   #setStorageData(storageKey, dataStorage = []) {
      return localStorage.setItem(storageKey, JSON.stringify(dataStorage));
   }

   #setMemoryStorageArrFavotite(storageKey, pushArr) {
      const dataStorage = this.#getStorageData(storageKey);

      if (dataStorage !== false) {
         dataStorage.map((item) => {
            const currentElement = this.#getSingletNode(`.card__favorite[data-id="${item.id}"]`);

            currentElement.dataset.select = true;
            pushArr.push({
               id: item.id,
               name: item.title,
               img: item.hero,
               price: item.price,
               article: item.code,
            });
         });
         return pushArr;
      }
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
