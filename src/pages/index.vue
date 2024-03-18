<template>
   <section class="hero">
      <div class="container">
         <div class="hero__content">
            <img class="hero__icon" src="/img/hero__icon.svg" alt="Иконка" width="210" height="60" />
            <h1 class="title upercase hero__title">
               <span class="hero__title-1">СОЕВЫЕ</span>
               <span class="hero__title-2">свечи</span>
               <span class="hero__title-3">
                  ручной
                  <br />
                  работы
               </span>
            </h1>
            <p class="subtitle hero__subtitle">Свечи, которые действительно пахнут!</p>
            <nuxt-link class="btn btn--hero hero__btn" to="/catalog"> хочу </nuxt-link>
         </div>
         <img class="hero__bg" src="/img/home__hero-1.webp" alt="Главная картинка" width="340" height="800" />
      </div>
      <svg class="hero__wave-1" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-1"></use>
      </svg>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="products">
      <div class="container">
         <div class="products__bullet">
            <div class="products__bullet-item">
               <div class="products__bullet-icon">
                  <svg class="products__bullet-icon-svg">
                     <use xlink:href="/img/sprite.svg#homeProductIcon-1"></use>
                  </svg>
               </div>
               <p class="products__bullet-title upercase">
                  Свечи, которые
                  <br />
                  действительно пахнут
               </p>
            </div>
            <div class="products__bullet-item">
               <div class="products__bullet-icon">
                  <svg class="products__bullet-icon-svg">
                     <use xlink:href="/img/sprite.svg#homeProductIcon-2"></use>
                  </svg>
               </div>
               <p class="products__bullet-title upercase">
                  Экологически чистый
                  <br />
                  соевый воск
               </p>
            </div>
            <div class="products__bullet-item">
               <div class="products__bullet-icon">
                  <svg class="products__bullet-icon-svg">
                     <use xlink:href="/img/sprite.svg#homeProductIcon-3"></use>
                  </svg>
               </div>
               <p class="products__bullet-title upercase">
                  Безопасные аромамасла
                  <br />
                  с сертификатом IFRA
               </p>
            </div>
         </div>
         <div class="products__card">
            <nuxt-link class="products__card-item products__card-item-1" to="catalog/candles">
               <div class="products__card-header">
                  <h2 class="products__card-title">Органические свечи</h2>
                  <p class="subtitle products__card-subtitle">Свечи с ароматными сюжетами!</p>
               </div>
               <UnLazyImage
                  class="products__card-img transition"
                  blurhash="LEHw}[GEqwxdV+skk?V@Knv#SbkP"
                  src-set="/img/products__card-1.webp"
                  alt="Картинка 1"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/img/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-2" to="/catalog">
               <div class="products__card-header">
                  <h2 class="products__card-title">Допы</h2>
                  <p class="subtitle products__card-subtitle">Зажигай, чтоб горело ясно</p>
               </div>
               <UnLazyImage
                  class="products__card-img transition"
                  blurhash="LAE:xQ9@-D%N0;00?HM|*0g5bwxV"
                  src-set="/img/products__card-2.webp"
                  alt="Картинка 2"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/img/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-3" to="catalog/melts">
               <div class="products__card-header">
                  <h2 class="products__card-title">Мелтсы</h2>
                  <p class="subtitle products__card-subtitle">
                     Аромалапки, чтобы <br />
                     жизнь была сладкой
                  </p>
               </div>
               <UnLazyImage
                  class="products__card-img transition"
                  blurhash="LCJ?:9_:4p+=_#9+PUPT4nKNPAXo"
                  src-set="/img/products__card-3.webp"
                  alt="Картинка 3"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/img/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-4" to="catalog/boxes">
               <div class="products__card-header">
                  <h2 class="products__card-title">Наборы</h2>
                  <p class="subtitle products__card-subtitle">
                     Всего, да побольше, для тех,
                     <br />
                     кто не смог определиться.
                  </p>
               </div>
               <UnLazyImage
                  class="products__card-img transition"
                  blurhash="L9H-fICi4U1GrV|?wH;Lo}t7XSeT"
                  src-set="/img/products__card-4.webp"
                  alt="Картинка 4"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/img/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <div class="products__card-item products__card-item-5">
               <div class="products__card-header">
                  <h2 class="products__card-title">
                     СОБЕРИ СВОЮ
                     <br />
                     КОЛЛЕКЦИЮ
                  </h2>
               </div>
               <svg class="products__card-icon-1">
                  <use xlink:href="/img/sprite.svg#homeProductCardIcon-1"></use>
               </svg>
               <svg class="products__card-icon-2">
                  <use xlink:href="/img/sprite.svg#homeProductCardIcon-2"></use>
               </svg>
               <svg class="products__card-icon-3">
                  <use xlink:href="/img/sprite.svg#homeProductCardIcon-3"></use>
               </svg>
               <ul class="products__card-nav">
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Гарри Поттер')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Гарри Поттер </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Аниме')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Аниме </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Сериалы')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Сериалы </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Фильмы')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Фильмы </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Игры')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Игры </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="store.setCollectionFilter('Без персонажей')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Без персонажей </nuxt-link>
                  </li>
               </ul>
               <UnLazyImage
                  class="products__card-img transition"
                  blurhash="LJQhz:4S3DrZ$RxHo}XmX4obs.sC"
                  src-set="/img/products__card-5.webp"
                  alt="Картинка 5"
                  width="300"
                  height="450" />
            </div>
         </div>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="sliders">
      <div class="slider">
         <div class="container">
            <div class="slider-wrapper">
               <div class="slider-item" :class="{ active: currentSlider === 1 }">
                  <div class="slider-item__img-box">
                     <div class="slider-item__bullet">
                        <svg class="slider-item__bullet-icon">
                           <use xlink:href="/img/sprite.svg#homeSliderBulletIcon"></use>
                        </svg>
                        <svg class="slider-item__bullet-text">
                           <use xlink:href="/img/sprite.svg#homeSliderBulletText"></use>
                        </svg>
                     </div>
                     <img class="slider-item__hero" src="/img/slider__img-1.webp" loading="lazy" alt="picture" width="300" height="300" />
                  </div>
                  <div class="slider-item__content-box">
                     <div class="slider-item__header">
                        <svg class="slider-item__icon-1">
                           <use xlink:href="/img/sprite.svg#homeSliderItemIcon-1"></use>
                        </svg>
                        <h2 class="title slider-item__title">
                           Свеча месяца
                           <svg class="slider-item__icon-2">
                              <use xlink:href="/img/sprite.svg#homeSliderItemIcon-2"></use>
                           </svg>
                        </h2>
                        <p class="slider-item__subtitle">Беспрецедентная акция, которую мы проводим каждый месяц! Свеча по самой классной цене :)</p>
                     </div>
                     <div class="slider-item__footer">
                        <p class="slider-item__description">
                           В этом месяце свече "пятый" не терпится вас согреть и окутать ароматом спелой черной вишни!
                        </p>
                        <div class="slider-item__btn-box">
                           <a class="btn btn--slider slider-item__btn" href="/"> хочу свечу </a>
                           <div class="slider-item__price">
                              <p class="slider-item__price-new">$15</p>
                              <del class="slider-item__price-old"> $20 </del>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="slider-item" :class="{ active: currentSlider === 2 }">
                  <div class="slider-item__img-box">
                     <div class="slider-item__bullet">
                        <svg
                           class="slider-item__bullet-icon"
                           width="100"
                           height="100"
                           viewBox="0 0 100 100"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink">
                           <g clip-path="url(#clip0_1227_204)">
                              <path
                                 opacity="0.9"
                                 d="M8.80905 36.3026L2.81114 46.9015C1.72962 48.8127 1.72962 51.1875 2.81114 53.0986L8.80905 63.6976C8.89899 63.8564 8.95421 64.0341 8.9708 64.2179L10.0805 76.4764C10.2804 78.6868 11.6163 80.6081 13.5664 81.49L24.3808 86.3808C24.5428 86.4541 24.6875 86.5639 24.8043 86.7023L32.5975 95.9383C34.0028 97.6037 36.1643 98.3375 38.2379 97.8533L49.7381 95.1679C49.9105 95.1276 50.0892 95.1276 50.2616 95.1679L61.7618 97.8533C63.8354 98.3375 65.9969 97.6037 67.4022 95.9383L75.1954 86.7023C75.3122 86.5639 75.4569 86.4541 75.619 86.3808L86.4334 81.49C88.3834 80.6081 89.7192 78.6868 89.9193 76.4764L91.0289 64.2179C91.0455 64.0341 91.1008 63.8564 91.1906 63.6976L97.1889 53.0986C98.2704 51.1875 98.2704 48.8127 97.1889 46.9015L91.1906 36.3026C91.1008 36.1437 91.0455 35.9661 91.0289 35.7823L89.9193 23.5237C89.7192 21.3133 88.3834 19.392 86.4334 18.5101L75.619 13.6193C75.4569 13.546 75.3122 13.4363 75.1954 13.2977L67.4022 4.06181C65.9969 2.39643 63.8354 1.66236 61.7618 2.14679L50.2616 4.83225C50.0892 4.87251 49.9105 4.87251 49.7381 4.83225L38.2379 2.14679C36.1643 1.66236 34.0028 2.39643 32.5975 4.06181L24.8043 13.2977C24.6875 13.4363 24.5428 13.546 24.3808 13.6193L13.5664 18.5101C11.6163 19.392 10.2804 21.3133 10.0805 23.5238L8.9708 35.7823C8.95421 35.9661 8.89899 36.1437 8.80905 36.3026Z"
                                 fill="url(#paint0_linear_1227_204)"
                                 stroke="white"
                                 stroke-width="4"></path>
                           </g>
                           <defs>
                              <linearGradient id="paint0_linear_1227_204" x1="2" y1="50" x2="98" y2="50" gradientUnits="userSpaceOnUse">
                                 <stop offset="0.0254031" stop-color="#AA7738"></stop>
                                 <stop offset="0.0255031" stop-color="#F4E089"></stop>
                                 <stop offset="1" stop-color="#B47D3B"></stop>
                              </linearGradient>
                              <clipPath id="clip0_1227_204">
                                 <rect width="100" height="100" fill="white"></rect>
                              </clipPath>
                           </defs>
                        </svg>
                        <svg class="slider-item__bullet-text slider-item__bullet-text--ticket">
                           <use xlink:href="/img/sprite.svg#homeSliderBulletIcon-1"></use>
                        </svg>
                     </div>
                     <img class="slider-item__hero" src="/img/slider__img-2.webp" loading="lazy" alt="picture" width="300" height="300" />
                  </div>
                  <div class="slider-item__content-box">
                     <div class="slider-item__header">
                        <img class="slider-item__icon" src="/img/slider__icon-2.webp" loading="lazy" alt="picture" width="100" height="20" />
                        <h2 class="title slider-item__title">Золотой билет</h2>
                        <p class="slider-item__subtitle">Переместись в мир сказок и шоколадных свечей, найди золотой билет в своём заказе!</p>
                     </div>
                     <div class="slider-item__footer">
                        <p class="slider-item__label">GOLDENTICKET</p>
                        <p class="slider-item__description">
                           Используй промокод goldenticket при заказе от 2х тысяч и получи шанс выиграть крутой приз!
                        </p>
                        <a class="btn btn--slider slider-item__btn" href="/"> Подробнее </a>
                     </div>
                  </div>
               </div>
               <div class="slider-item" :class="{ active: currentSlider === 3 }">
                  <div class="slider-item__img-box">
                     <img class="slider-item__hero" src="/img/slider__img-3.webp" loading="lazy" alt="picture" width="300" height="300" />
                  </div>
                  <div class="slider-item__content-box">
                     <div class="slider-item__header">
                        <svg class="slider-item__icon-1">
                           <use xlink:href="/img/sprite.svg#homeSliderItemIcon-1"></use>
                        </svg>
                        <h2 class="title slider-item__title slider-item__title--slider-3">
                           Скидка за отзыв
                           <svg class="slider-item__icon-2 slider-item__icon-2--slider-3">
                              <use xlink:href="/img/sprite.svg#homeSliderItemIcon-2"></use>
                           </svg>
                        </h2>
                        <p class="slider-item__subtitle">
                           Оставь отзыв под купленным товаром и свяжись со мной любым удобным способом указанным в контактах, чтобы получить промокод*
                           на скидку 5%, булочка
                        </p>
                     </div>
                     <div class="slider-item__footer">
                        <div class="slider-item__btn-box">
                           <a class="btn btn--slider slider-item__btn" href="/"> Оставить отзыв </a>
                        </div>
                        <p class="slider-item__description">*Действует 2 месяца с момента получения</p>
                     </div>
                  </div>
               </div>
               <div class="slider-dots">
                  <span
                     v-for="n in countClider"
                     :key="n"
                     class="slider-dots__item"
                     :class="{ active: currentSlider === n }"
                     @click="resetTimer(n)"></span>
               </div>
            </div>
         </div>
      </div>
      <svg class="hero__wave-2 hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="catalog">
      <div class="container">
         <header class="catalog__header">
            <img class="catalog__icon" src="/img/home__catalog-icon.svg" loading="lazy" alt="Иконка" width="120" height="40" />
            <h2 class="title catalog__title">Популярные товары</h2>
            <p class="subtitle catalog__subtitle">Свечи, которые действительно пахнут!</p>
            <nuxt-link class="btn btn--catalog catalog__btn" to="/catalog"> Все товары </nuxt-link>
         </header>
         <AppCatalog :data-item="card" :visible-item="countProductCatalog" />
         <button v-if="card.length > 4 && countProductCatalog < 16" class="catalog__btn-loading" @click="countProductCatalog += 4">
            Загрузить еще
         </button>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="subscribe">
      <div class="container">
         <div class="fallow">
            <img class="fallow__bg" src="/img/home__subscribe-bg.webp" alt="picture" loading="lazy" width="300" height="595" />
            <div class="fallow__header">
               <img class="fallow__icon" src="/img/fallow__header-icon.svg" alt="Иконка" width="100" height="43" />
               <h2 class="title fallow__title">Подпишитесь на нашу рассылку</h2>
            </div>
            <p class="subtitle fallow__subtitle">
               Мы ценим ваше доверие и не хотим завалиться в спам. Просто иногда будем делиться с вами анонсом новиночек, классными акциями и
               персональными предложениями.
            </p>
            <div class="fallow__form">
               <input class="fallow__input" type="email" name="email" placeholder="Ваш E-mail" autocomplete="email" required />
               <button class="fallow__btn" type="button">Подписаться</button>
            </div>
         </div>
      </div>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="/img/sprite.svg#wave-2"></use>
      </svg>
   </section>
</template>

<script setup>
const { find } = useStrapi();
const store = useAppStore();
const countClider = ref(3);
const currentSlider = ref(1);
const timerData = ref(null);
const countProductCatalog = ref(8);

const { data } = await find("products");
const card = await useHandllerApi(data);

const launchTimer = () => {
   timerData.value = setInterval(() => {
      currentSlider.value++;
      currentSlider.value === 4 ? (currentSlider.value = 1) : currentSlider.value;
   }, 5000);
};

const resetTimer = (number) => {
   currentSlider.value = number;
   clearInterval(timerData.value);
   launchTimer();
};

onMounted(() => {
   launchTimer();
});
</script>
