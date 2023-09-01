<template>
   <section class="hero">
      <div class="container">
         <div class="hero__content">
            <img class="hero__icon" src="@/assets/img/svg/hero__icon.svg" alt="Иконка" width="210" height="60" />
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
         <img class="hero__bg" src="@/assets/img/webp/home__hero-1.webp" alt="Главная картинка" width="340" height="800" />
      </div>
      <svg class="hero__wave-1" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-1"></use>
      </svg>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="products">
      <div class="container">
         <div class="products__bullet">
            <div class="products__bullet-item">
               <div class="products__bullet-icon">
                  <svg class="products__bullet-icon-svg">
                     <use xlink:href="@/assets/img/svg/sprite.svg#homeProductIcon-1"></use>
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
                     <use xlink:href="@/assets/img/svg/sprite.svg#homeProductIcon-2"></use>
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
                     <use xlink:href="@/assets/img/svg/sprite.svg#homeProductIcon-3"></use>
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
               <img
                  class="products__card-img transition"
                  src="@/assets/img/webp/products__card-1.webp"
                  loading="lazy"
                  alt="Картинка 1"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-2" to="/catalog">
               <div class="products__card-header">
                  <h2 class="products__card-title">Спички</h2>
                  <p class="subtitle products__card-subtitle">Зажигай, чтоб горело ясно</p>
               </div>
               <img
                  class="products__card-img transition"
                  src="@/assets/img/webp/products__card-2.webp"
                  loading="lazy"
                  alt="Картинка 2"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-3" to="catalog/postcard">
               <div class="products__card-header">
                  <h2 class="products__card-title">Открытки</h2>
                  <p class="subtitle products__card-subtitle">Для самых любимых!</p>
               </div>
               <img
                  class="products__card-img transition"
                  src="@/assets/img/webp/products__card-3.webp"
                  loading="lazy"
                  alt="Картинка 3"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardLink"></use>
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
               <img
                  class="products__card-img transition"
                  src="@/assets/img/webp/products__card-4.webp"
                  loading="lazy"
                  alt="Картинка 4"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardLink"></use>
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
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardIcon-1"></use>
               </svg>
               <svg class="products__card-icon-2">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardIcon-2"></use>
               </svg>
               <svg class="products__card-icon-3">
                  <use xlink:href="@/assets/img/svg/sprite.svg#homeProductCardIcon-3"></use>
               </svg>
               <ul class="products__card-nav">
                  <li class="products__card-nav-item" @click="setCollection('Гарри Поттер')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Гарри Поттер </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="setCollection('Аниме')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Аниме </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="setCollection('Сериалы')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Сериалы </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="setCollection('Фильмы')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Фильмы </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="setCollection('Игры')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Игры </nuxt-link>
                  </li>
                  <li class="products__card-nav-item" @click="setCollection('Без персонажей')">
                     <nuxt-link to="/catalog" class="products__card-nav-link transition"> Без персонажей </nuxt-link>
                  </li>
               </ul>
               <img
                  class="products__card-img transition"
                  src="@/assets/img/webp/products__card-5.webp"
                  loading="lazy"
                  alt="Картинка 4"
                  width="300"
                  height="450" />
            </div>
         </div>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="sliders">
      <BaseSlider />
      <svg class="hero__wave-2 hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-2"></use>
      </svg>
   </section>

   <section class="catalog">
      <div class="container">
         <header class="catalog__header">
            <img class="catalog__icon" src="@/assets/img/svg/home__catalog-icon.svg" loading="lazy" alt="Иконка" width="120" height="40" />
            <h2 class="title catalog__title">Популярные товары</h2>
            <p class="subtitle catalog__subtitle">Свечи, которые действительно пахнут!</p>
            <nuxt-link class="btn btn--catalog catalog__btn" to="/catalog"> Все товары </nuxt-link>
         </header>
         <AppCatalog :data-item="renderLimitProductCatalog" />
         <button v-if="countProductCatalog < 16" class="catalog__btn-loading" @click="countProductCatalog += 4">Загрузить еще</button>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="subscribe">
      <div class="container">
         <BlockFallow />
      </div>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="@/assets/img/svg/sprite.svg#wave-2"></use>
      </svg>
   </section>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   data() {
      return {
         countProductCatalog: 8,
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),

      renderLimitProductCatalog() {
         return this.products.slice(0, this.countProductCatalog);
      },
   },

   methods: {
      ...mapActions(useAppStore, { setCollection: "setCollectionFilter" }),
   },
};
</script>
