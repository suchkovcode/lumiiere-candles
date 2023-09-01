<template>
   <div class="slider">
      <div class="container">
         <div class="slider-wrapper">
            <div class="slider-item" :class="{ active: currentSlider === 1 }">
               <div class="slider-item__img-box">
                  <div class="slider-item__bullet">
                     <svg class="slider-item__bullet-icon">
                        <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderBulletIcon"></use>
                     </svg>
                     <svg class="slider-item__bullet-text">
                        <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderBulletText"></use>
                     </svg>
                  </div>
                  <img class="slider-item__hero" src="@/assets/img/webp/slider__img-1.webp" loading="lazy" alt="picture" width="300" height="300" />
               </div>
               <div class="slider-item__content-box">
                  <div class="slider-item__header">
                     <svg class="slider-item__icon-1">
                        <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderItemIcon-1"></use>
                     </svg>
                     <h2 class="title slider-item__title">
                        Свеча месяца
                        <svg class="slider-item__icon-2">
                           <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderItemIcon-2"></use>
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
                           <p class="slider-item__price-old"><del>$20</del></p>
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
                        xmlns="http://www.w3.org/2000/svg">
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
                        <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderBulletIcon-1"></use>
                     </svg>
                  </div>
                  <img class="slider-item__hero" src="@/assets/img/webp/slider__img-2.webp" loading="lazy" alt="picture" width="300" height="300" />
               </div>
               <div class="slider-item__content-box">
                  <div class="slider-item__header">
                     <img
                        class="slider-item__icon"
                        src="@/assets/img/webp/slider__icon-2.webp"
                        loading="lazy"
                        alt="picture"
                        width="100"
                        height="20" />
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
                  <img class="slider-item__hero" src="@/assets/img/webp/slider__img-3.webp" loading="lazy" alt="picture" width="300" height="300" />
               </div>
               <div class="slider-item__content-box">
                  <div class="slider-item__header">
                     <svg class="slider-item__icon-1">
                        <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderItemIcon-1"></use>
                     </svg>
                     <h2 class="title slider-item__title slider-item__title--slider-3">
                        Скидка за отзыв
                        <svg class="slider-item__icon-2 slider-item__icon-2--slider-3">
                           <use xlink:href="@/assets/img/svg/sprite.svg#homeSliderItemIcon-2"></use>
                        </svg>
                     </h2>
                     <p class="slider-item__subtitle">
                        Оставь отзыв под купленным товаром и свяжись со мной любым удобным способом указанным в контактах, чтобы получить промокод* на
                        скидку 5%, булочка
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
</template>

<script>
export default {
   data() {
      return {
         countClider: 3,
         currentSlider: 1,
         timerData: null,
      };
   },

   mounted() {
      this.launchTimer();
   },

   methods: {
      launchTimer() {
         this.timerData = setInterval(() => {
            this.currentSlider++;
            this.currentSlider === 4 ? (this.currentSlider = 1) : this.currentSlider;
         }, 5000);
      },

      resetTimer(number) {
         this.currentSlider = number;
         clearInterval(this.timerData);
         this.launchTimer();
      },
   },
};
</script>
