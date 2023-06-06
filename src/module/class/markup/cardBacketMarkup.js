export class CardBacket {
   constructor(item, index) {
      this.item = item;
      this.index = index;
   }

   html() {
      const markup = /* html */ `
      <div class="backet__product-item" data-id="${this.item.id}" data-code="${this.item.article}" data-size="${this.item.size}" data-count="${this.item.count}" data-cost="${this.item.price}" data-sum=""  data-index="${this.index}">
         <img class="backet__product-img" src="${this.item.img}" alt="Картинка товара" width="70" height="70" />
         <div class="backet__product-options">
            <a class="backet__product-name" href="#">${this.item.name}</a>
            <p class="backet__product-size">Размер: <span class="backet__product-option">${this.item.size}</span> мл </p>
            <p class="backet__product-code">${this.item.article}</p>
         </div>
         <div class="backet__product-count">
            <div class="backet__product-plusminus" data-id="${this.item.id}" data-article="${this.item.article}">
               <div class="backet__product-minus" data-type="minus"></div>
               <div class="backet__product-total" data-value="${this.item.count}">${this.item.count}</div>
               <div class="backet__product-plus" data-type="plus"></div>
            </div>
            <div class="backet__product-sum">$<span class="backet__product-cost">${this.item.price}</span></div>
         </div>
         <div class="backet__product-remove" data-code="${this.item.article}"></div>
      </div>
      `;
      return markup;
   }
}
