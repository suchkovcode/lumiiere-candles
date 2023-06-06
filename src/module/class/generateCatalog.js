/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { Card } from "./cards";
import { Backet } from "./backet";

export class GenerateCatalog {
   static nameStorageItemsCard = "backetElements";
   static nameStorageItemsFavorite = "favoriteElements";

   constructor(target, data) {
      this.el = document.querySelector(target);
      this._data = data;
      this.#init(this._data);
   }

   #init(data) {
      this.#render(data);
      this.#incrementDecremenCount();
      this.#selectFavorite();
      this.#changeSize();
      this.#setBacketCard();
   }

   #html(data) {
      const markup = data.map((item, index) => new Card(item, index).html());
      return markup.join("");
   }

   #render(arrData) {
      try {
         this.el.innerHTML = this.#html(arrData);
      } catch (err) {}
   }

   #isStorageExist(storageKey) {
      return localStorage.getItem(storageKey) !== null;
   }

   #getDataCard(eventData) {
      const { id } = eventData.currentTarget.dataset;
      const currentCard = this.#getSingletNode(`.card[data-id="${id}"]`);
      const currentPrice = this.#getCustomSingleNode(currentCard, ".card__price").dataset.value;
      const currentSize = this.#getCustomSingleNode(currentCard, ".card__size-btn[data-select='true']").dataset.value;
      const currentCount = this.#getCustomSingleNode(currentCard, ".card__btn-count[data-type='count']").dataset.value;
      const currentArticle = this.#getCustomSingleNode(currentCard, ".card__article-size[data-type='article']").dataset.value;
      const cardData = this._data.find((dataElement) => dataElement.id == id);

      return {
         id: String(id),
         article: String(currentArticle),
         count: Number(currentCount),
         size: Number(currentSize),
         price: Number(currentPrice),
         name: String(cardData.title),
         img: String(cardData.hero),
      };
   }

   #getCustomSingleNode(customParent = this.el, selectorNode) {
      return customParent.querySelector(selectorNode);
   }

   #getSingletNode(selectorNode) {
      return this.el.querySelector(selectorNode);
   }

   #getNodeList(selectorNode) {
      return this.el.querySelectorAll(selectorNode);
   }

   #getHtmlColletcion(selectorNode) {
      return this.el.getElementsByClassName(selectorNode);
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

   #setMemoryStorageArrBacket(storageKey, pushArr) {
      const dataStorage = this.#getStorageData(storageKey);

      if (dataStorage !== false) {
         dataStorage.map((item) => {
            pushArr.push({
               id: String(item.id),
               article: String(item.article),
               count: Number(item.count),
               size: Number(item.size),
               price: Number(item.price),
               name: String(item.name),
               img: String(item.img),
            });
         });
         return pushArr;
      }
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

   #setArrBacketItem(eventData, arrSet) {
      const getDataObjectCard = this.#getDataCard(eventData);
      const isElement = arrSet.find((dataElement) => dataElement.article === getDataObjectCard.article) !== undefined;

      if (!isElement) {
         arrSet.push(getDataObjectCard);
         return arrSet;
      } else {
         const getArrItem = arrSet.find((dataElement) => dataElement.article === getDataObjectCard.article);
         const getArrIndexItem = arrSet.findIndex((dataElement) => dataElement.article === getArrItem.article);
         arrSet[getArrIndexItem].count = arrSet[getArrIndexItem].count + getDataObjectCard.count;
         if (arrSet[getArrIndexItem].count >= 10) {
            arrSet[getArrIndexItem].count = 10;
         }
         return arrSet;
      }
   }

   #setBacketCard() {
      const arrBacketElements = [];
      const cardAddBacket = this.#getHtmlColletcion("card__btn-add");
      const cardArr = [...cardAddBacket];
      const isExist = this.#isStorageExist(GenerateCatalog.nameStorageItemsCard);

      if (isExist) {
         this.#setMemoryStorageArrBacket(GenerateCatalog.nameStorageItemsCard, arrBacketElements);
      }

      cardArr.forEach((cardAdd) => {
         cardAdd.addEventListener("click", (event) => {
            this.#setStorageData(GenerateCatalog.nameStorageItemsCard, this.#setArrBacketItem(event, arrBacketElements));
         });
      });
   }

   #selectFavorite() {
      const arrFavoriteElements = [];
      const cardFavorite = this.#getNodeList(".card__favorite[data-type='favorite']");
      const isExist = this.#isStorageExist(GenerateCatalog.nameStorageItemsFavorite);

      if (isExist) {
         this.#setMemoryStorageArrFavotite(GenerateCatalog.nameStorageItemsFavorite, arrFavoriteElements);
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
                  localStorage.setItem(GenerateCatalog.nameStorageItemsFavorite, JSON.stringify(arrFavoriteElements));
               }
            } else {
               const indexElement = arrFavoriteElements.findIndex((item) => item.id == id);
               event.currentTarget.dataset.select = false;
               arrFavoriteElements.splice(indexElement, 1);
               localStorage.setItem(GenerateCatalog.nameStorageItemsFavorite, JSON.stringify(arrFavoriteElements));
            }
         });
      });
   }

   #changeSize() {
      const changeContainer = this.#getNodeList(".card__size-select");
      changeContainer.forEach((element) => {
         const selectSizeElement = element.querySelectorAll(".card__size-btn");
         element.addEventListener("click", (event) => {
            const { id, value, price, select, article } = event.target.dataset;
            const currentCard = this.#getSingletNode(`.card[data-id="${id}"] .card__article-size`);

            if (event.target.className === "card__size-btn") {
               const dataSize = {
                  card: id,
                  size: value,
                  price: price,
                  select: select,
                  article: article,
               };

               currentCard.dataset.value = article;
               currentCard.textContent = article;

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
      const currentValue = this.#getSingletNode(`.card[data-id='${dataSize.card}'] .card__price`);
      const currentPrice = this.#getSingletNode(`.card[data-id='${dataSize.card}'] .card__price-value`);
      currentValue.dataset.value = dataSize.price;
      currentPrice.textContent = dataSize.price;
   }

   #incrementDecremenCount() {
      const btnCount = this.#getNodeList(".card__btn-count[data-type='count']");

      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            let dataValueCountChange = event.currentTarget.getAttribute("data-value");
            const cardcountValue = this.#getCustomSingleNode(event.currentTarget, ".card__count-value");

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
