export class CardFunctions {
   constructor(element) {
      this.el = element;
   }

   init() {
      this.#changeSize();
      this.#chageCountCard();
   }

   #changeSize() {
      const changeContainer = this.el.querySelectorAll(".changesize__select");
      changeContainer.forEach((element) => {
         const selectSizeElement = element.querySelectorAll(".changesize__btn");
         element.addEventListener("click", (event) => {
            const { id, value, price, select, article } = event.target.dataset;
            const currentCard = this.el.querySelector(`.card[data-id="${id}"] .card__article-size`);

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
      const currentValue = this.el.querySelector(`.card[data-id='${dataSize.card}'] .price`);
      const currentPrice = this.el.querySelector(`.card[data-id='${dataSize.card}'] .price__value`);
      currentValue.dataset.value = dataSize.price;
      currentPrice.textContent = dataSize.price;
   }

   #chageCountCard() {
      const btnCount = this.el.querySelectorAll(".btncount[data-type='count']");

      btnCount.forEach((element) => {
         element.addEventListener("click", (event) => {
            let dataValueCountChange = event.currentTarget.getAttribute("data-value");
            const cardcountValue = event.currentTarget.querySelector(".btncount__value");

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
