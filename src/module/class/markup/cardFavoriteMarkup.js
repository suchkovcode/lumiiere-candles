export class CardFavorite {
   constructor(item, index) {
      this.item = item;
      this.index = index;
   }

   html() {
      const markup = /* html */ `
      <div class="favorite__list-item" data-id="${this.item.id}" data-index="${this.index}">
         <img class="favorite__list-img" src="${this.item.img}" alt="Картинка товара" width="70" height="70" />
         <div class="favorite__list-options">
            <a class="favorite__list-name" href="#">${this.item.name}</a>
            <p class="favorite__list-size">Размер: <span class="backet__product-option">40</span>мл</p>
            <p class="favorite__list-code">${this.item.article}</p>
         </div>
         <div class="favorite__list-count">
            <div class="favorite__list-sum">$<span class="backet__product-cost">${this.item.price}</span></div>
         </div>
         <div class="favorite__list-remove" data-code="${this.item.article}"></div>
      </div>`;
      return markup;
   }
}
