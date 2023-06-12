/* eslint-disable max-len */
import svg from "Assets/img/svg/sprite.svg";

export class CardCatalog {
   constructor(item, index) {
      this.item = item;
      this.index = index;
   }

   html() {
      const description = this.item.category.join(" | ").trim();
      const markup = /* html */ `
      <article class="card" data-index="${this.index}" data-id="${this.item.id}">
      <header class="card__header">
         <div class="card__favorite" data-type="favorite" data-select="false" data-id="${this.item.id}">
            <svg class="card__favorite-icon">
               <use xlink:href="${svg}#cardFavoriteIcon"></use>
            </svg>
         </div>
         <img class="card__hero" src="${this.item.hero}" loading="lazy" alt="Картинка продукта" width="140" height="180" />
      </header>
      <main class="card__body">
         <div class="card__rating">
            <div class="card__rating-icons">
               <svg class="card__rating-icon" data-index="0">
                  <use xlink:href="${svg}#cardRatingIcon"></use>
               </svg>
               <svg class="card__rating-icon" data-index="1">
                  <use xlink:href="${svg}#cardRatingIcon"></use>
               </svg>
               <svg class="card__rating-icon" data-index="2">
                  <use xlink:href="${svg}#cardRatingIcon"></use>
               </svg>
               <svg class="card__rating-icon" data-index="3">
                  <use xlink:href="${svg}#cardRatingIcon"></use>
               </svg>
               <svg class="card__rating-icon" data-index="4">
                  <use xlink:href="${svg}#cardRatingIcon"></use>
               </svg>
            </div>
            <span class="card__rating-value">${this.item.grade.level}</span>
            <span class="card__rating-total">(${this.item.grade.count})</span>
         </div>
         <h3 class="card__title">${this.item.title}</h3>
         <p class="card__article">
            Артикул:
            <span class="card__article-size" data-type="article" data-value="${this.item.code.small}">${this.item.code.small}</span>
         </p>
         <p class="card__description">${description}</p>
         <p class="card__price" data-value="${this.item.price.small}">
            <span class="card__price-currency">$</span>
            <span class="card__price-value">${this.item.price.small}</span>
         </p>
         <div class="changesize">
            <p class="changesize__title">Размер</p>
            <div class="changesize__select">
               <button class="changesize__btn" type="button" data-id="${this.item.id}" data-index="0" data-value="40" data-article="${this.item.code.small}" data-price="${this.item.price.small}" data-select="true" >40 мл</button>
               <button class="changesize__btn" type="button" data-id="${this.item.id}" data-index="1" data-value="100" data-article="${this.item.code.medium}" data-price="${this.item.price.medium}" data-select="false" >100 мл</button>
               <button class="changesize__btn" type="button" data-id="${this.item.id}" data-index="2" data-value="200" data-article="${this.item.code.large}" data-price="${this.item.price.large}" data-select="false">200 мл</button>
            </div>
         </div>
      </main>
      <footer class="card__footer">
         <a class="card__btn-more route" href="#/post">Подробнее</a>
         <div class="card__btn-count" data-type="count" data-value="1">
            <button class="card__btn-minus" data-type="minus"></button>
            <p class="card__count-value">1</p>
            <button class="card__btn-plus" data-type="plus"></button>
         </div>
         <button class="card__btn-add" data-type="add" data-id="${this.item.id}">
            <svg class="card__btn-add-icon">
               <use xlink:href="${svg}#cardBtnAddIcon"></use>
            </svg>
            <span>В корзину</span>
         </button>
      </footer>
      </article>`;
      return markup;
   }
}
