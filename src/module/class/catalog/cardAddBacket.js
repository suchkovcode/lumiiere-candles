export class CardAddBacket {
   static nameStorageItemsCard = "backetElements";

   constructor(element, data) {
      this.el = element;
      this._data = data;
   }

   init() {
      this.#setBacketCard();
   }

   #getStorageData(storageKey) {
      const isNan = this.#isStorageExist(storageKey);
      const dataStorgae = JSON.parse(localStorage.getItem(storageKey));
      const emptyOrder = Object.keys(dataStorgae).length === 0;
      return isNan && !emptyOrder ? JSON.parse(localStorage.getItem(storageKey)) : false;
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
      const isExist = this.#isStorageExist(CardAddBacket.nameStorageItemsCard);

      if (isExist) {
         this.#setMemoryStorageArrBacket(CardAddBacket.nameStorageItemsCard, arrBacketElements);
      }

      cardArr.forEach((cardAdd) => {
         cardAdd.addEventListener("click", (event) => {
            this.#setStorageData(CardAddBacket.nameStorageItemsCard, this.#setArrBacketItem(event, arrBacketElements));
         });
      });
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
      return localStorage.getItem(storageKey) !== null;
   }
}
