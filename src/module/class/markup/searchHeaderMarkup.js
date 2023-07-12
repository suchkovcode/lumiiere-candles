export class CanvasSearch {
   constructor() {}
   render(locationRender) {
      const html =
         /* html */
         `<div class="search__input-box">
      <input class="search__input" type="search" placeholder="Свечи ароматические...">
      <svg class="header__icon search__icon" fill="none" stroke="#777">
         <use xlink:href="/src/assets/img/svg/sprite.svg#search"></use>
      </svg>
   </div>
   <div class="search__close"></div>
   <div class="search__tag-box">
      <p class="search__tag">Cвечи</p>
      <p class="search__tag">Cпички</p>
      <p class="search__tag">Открытки</p>
      <p class="search__tag">Наборы</p>
      <p class="search__tag">Фильмы</p>
      <p class="search__tag">Аниме</p>
   </div>`;
      return (locationRender.innerHTML = html);
   }
}
