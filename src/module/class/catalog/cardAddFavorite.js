export class CardAddFavorite {
   static nameStorageItemsFavorite = "favoriteElements";

   constructor(element, data) {
      this.el = element;
      this._data = data;
   }

   init() {
      this.#selectFavorite();
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
            const { title, hero, code } = this._data.find((dataElement) => dataElement.id == id);
            const existElement = arrFavoriteElements.find((item) => item.id == id) !== undefined;

            if (select === "false") {
               event.currentTarget.dataset.select = true;

               if (!existElement) {
                  arrFavoriteElements.push({
                     id: id,
                     title: title,
                     hero: hero,
                     code: code.small,
                  });
                  this.#setStorageData(CardAddFavorite.nameStorageItemsFavorite, arrFavoriteElements);
               }
            } else {
               const indexElement = arrFavoriteElements.findIndex((item) => item.id == id);
               event.currentTarget.dataset.select = false;
               arrFavoriteElements.splice(indexElement, 1);
               this.#setStorageData(CardAddFavorite.nameStorageItemsFavorite, arrFavoriteElements);
            }
         });
      });
   }

   #getSingletNode(selectorNode) {
      return this.el.querySelector(selectorNode);
   }

   #getNodeList(selectorNode) {
      return this.el.querySelectorAll(selectorNode);
   }

   #getStorageData(storageKey) {
      const isNan = this.#isStorageExist(storageKey);

      if (isNan) {
         const dataStorgae = JSON.parse(localStorage.getItem(storageKey));
         const emptyOrder = Object.keys(dataStorgae).length === 0;

         if (!emptyOrder) {
            return JSON.parse(localStorage.getItem(storageKey));
         } else {
            return false;
         }
      }
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
               title: item.title,
               hero: item.hero,
               code: item.code,
            });
         });
         return pushArr;
      }
   }

   #isStorageExist(storageKey) {
      return localStorage.getItem(storageKey) !== null;
   }
}
