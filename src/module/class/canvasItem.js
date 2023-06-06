/* eslint-disable max-len */
export class CanvasMenu {
   constructor() {}
   render(locationRender) {
      const html = /* html */ `
      <div class="canvas__top">
         <p class="canvas__title">Меню</p>
         <button class="canvas__close"></button>
      </div>
      <div class="canvas-menu">
      <nav class="canvas-menu__nav">
         <ul class="canvas-menu__nav-list">
            <li class="canvas-menu__nav-item canvas-menu__drobdown">
               <span class="canvas-menu__nav-link canvas-menu__drobdown-title">КАТАЛОГ</span>
               <ul class="canvas-menu__drobdown-submenu">
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Соевые свечи</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Бестселлеры</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Спички</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Открытки</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Наборы</a>
                  </li>
               </ul>
            </li>
            <li class="canvas-menu__nav-item">
               <a class="canvas-menu__nav-link" href="#">О НАС</a>
            </li>
            <li class="canvas-menu__nav-item canvas-menu__drobdown">
               <span class="canvas-menu__nav-link canvas-menu__drobdown-title">Для клиента</span>
               <ul class="canvas-menu__drobdown-submenu">
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Соевые свечи</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Бестселлеры</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Спички</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Открытки</a>
                  </li>
                  <li class="canvas-menu__drobdown-item">
                     <a class="canvas-menu__drobdown-link" href="#">Наборы</a>
                  </li>
               </ul>
            </li>
            <li class="canvas-menu__nav-item">
               <a class="canvas-menu__nav-link" href="#">КОНТАКТЫ</a>
            </li>
         </ul>
      </nav>
      <div class="canvas-menu__cta">
         <p class="canvas-menu__cta-text">Соевые свечи ручной работы</p>
         <a class="canvas-menu__cta-btn btn btn--menu" href="#">в каталог</a>
      </div>
      </div>`;
      return (locationRender.innerHTML = html);
   }
}

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

