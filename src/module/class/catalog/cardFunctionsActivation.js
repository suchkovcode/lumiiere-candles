export class CardFunctions {
   constructor(element) {
      this.el = element;
   }

   init() {
      this.#changeSize();
      this.#chageCountCard();
   }

   #changeSize() {
      const changeContainer = this.#getNodeList(".changesize__select");
      changeContainer.forEach((element) => {
         const selectSizeElement = element.querySelectorAll(".changesize__btn");
         element.addEventListener("click", (event) => {
            const { id, value, price, select, article } = event.target.dataset;
            const currentCard = this.#getSingletNode(`.card[data-id="${id}"] .card__article-size`);

            if (event.target.className === "changesize__btn") {
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

   #chageCountCard() {
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

   #getCustomSingleNode(customParent, selectorNode) {
      return customParent.querySelector(selectorNode);
   }

   #getSingletNode(selectorNode) {
      return this.el.querySelector(selectorNode);
   }

   #getNodeList(selectorNode) {
      return this.el.querySelectorAll(selectorNode);
   }
}
