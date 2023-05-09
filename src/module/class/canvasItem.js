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

export class CanvasFavorite {
   constructor() {}
   render(locationRender) {
      const html = /* html */ `
      <div class="canvas__top">
         <p class="canvas__title">Избранное:</p>
         <button class="canvas__close"></button>
      </div>
      <div class="canvas-favorite">
      </div>`;
      return (locationRender.innerHTML = html);
   }
}

export class CanvasBacket {
   constructor() {}
   render(locationRender) {
      const html = /* html */ `
      <div class="canvas__top">
         <p class="canvas__title">Корзина:</p>
         <button class="canvas__close"></button>
      </div>
   <div class="canvas-backet">
      <form class="canvas-backet__form" action="#">
         <div class="canvas-backet__form-order">
            <p class="canvas-backet__form-empty">Корзина пуста</p>
         </div>
         <div class="canvas-backet__form-contact">
            <h2 class="canvas-backet__tittle">Оформить заказ</h2>
            <div class="canvas-backet__form-input-box">
               <input class="canvas-backet__form-input" type="text" placeholder="Ваше имя" value="">
            </div>
            <div class="canvas-backet__form-input-box">
               <input class="canvas-backet__form-input" type="email" placeholder="Электронная почта" value="">
            </div>
            <div class="canvas-backet__form-input-box">
               <input class="canvas-backet__form-input" type="tel" placeholder="+38 (999) 999 99-99" value="">
            </div>
         </div>
         <div class="canvas-backet__form-delivery">
            <h2 class="canvas-backet__tittle">Доставка</h2>
            <label class="canvas-backet__form-input-box">
               <span class="canvas-backet__form-title">Город</span>
               <input class="canvas-backet__form-input" type="search" placeholder="Киев" value="">
            </label>
            <label class="canvas-backet__form-input-box">
               <span class="canvas-backet__form-title">Промокод:</span>
               <input class="canvas-backet__form-input" type="text" placeholder="Введите промокод" value="">
            </label>
            <label class="canvas-backet__form-input-box">
               <span class="canvas-backet__form-title">Как подписать заказ?</span>
               <input class="canvas-backet__form-input" type="text" placeholder="Подпись для коробки" value="">
            </label>
         </div>
         <p class="canvas-backet__form-sum">Итоговая сумма: 
         <span class="canvas-backet__form-currency">$</span><span class="canvas-backet__form-count">0</span></p>
         <div class="canvas-backet__form-button-box">
            <button class="canvas-backet__form-btn btn" type="submit">Купить</button>
            <p class="canvas-backet__form-policy">
            Нажимая на кнопку «Купить» Вы соглашаетесь с нашей Политикой конфиденциальности</p>
         </div>
      </form>
      </div>`;
      return (locationRender.innerHTML = html);
   }
}

export class CanvasSearch {
   constructor() {}
   render(locationRender) {
      const html = `<div>
      </div>`;
      return (locationRender.innerHTML = html);
   }
}
