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
         <img class="hero__bg" src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/e5bd2b71-e16a-4c76-da7d-fe5d791a1a00/public" alt="Главная картинка" width="340" height="800" />
      </div>
      <svg class="hero__wave-1" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-1"></use>
      </svg>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="products">
      <div class="container">
         <div class="products__bullet">
            <div class="products__bullet-item">
               <div class="products__bullet-icon">
                  <svg class="products__bullet-icon-svg">
                     <use xlink:href="/sprite.svg#homeProductIcon-1"></use>
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
                     <use xlink:href="/sprite.svg#homeProductIcon-2"></use>
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
                     <use xlink:href="/sprite.svg#homeProductIcon-3"></use>
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
                  src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/ce0099bc-4fff-4f00-b265-a6fdd9ab6900/public"
                  loading="lazy"
                  alt="Картинка 1"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-2" to="/catalog">
               <div class="products__card-header">
                  <h2 class="products__card-title">Спички</h2>
                  <p class="subtitle products__card-subtitle">Зажигай, чтоб горело ясно</p>
               </div>
               <img
                  class="products__card-img transition"
                  src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/0a7a8017-f49c-4918-132f-05dcf28efe00/public"
                  loading="lazy"
                  alt="Картинка 2"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/sprite.svg#homeProductCardLink"></use>
               </svg>
            </nuxt-link>
            <nuxt-link class="products__card-item products__card-item-3" to="catalog/matches">
               <div class="products__card-header">
                  <h2 class="products__card-title">Открытки</h2>
                  <p class="subtitle products__card-subtitle">Для самых любимых!</p>
               </div>
               <img
                  class="products__card-img transition"
                  src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/8b7732ae-4691-478a-ade1-798e6539f900/public"
                  loading="lazy"
                  alt="Картинка 3"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/sprite.svg#homeProductCardLink"></use>
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
                  src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/f815569d-b507-4391-5559-ed1fd8810700/public"
                  loading="lazy"
                  alt="Картинка 4"
                  width="300"
                  height="450" />
               <svg class="products__card-icon-link">
                  <use xlink:href="/sprite.svg#homeProductCardLink"></use>
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
                  <use xlink:href="/sprite.svg#homeProductCardIcon-1"></use>
               </svg>
               <svg class="products__card-icon-2">
                  <use xlink:href="/sprite.svg#homeProductCardIcon-2"></use>
               </svg>
               <svg class="products__card-icon-3">
                  <use xlink:href="/sprite.svg#homeProductCardIcon-3"></use>
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
                  src="https://imagedelivery.net/4c-eqJ8fBLTQgIB2dLtpEg/fcd58b4e-0f65-40ae-8317-2d83fe2b1c00/publicp"
                  loading="lazy"
                  alt="Картинка 4"
                  width="300"
                  height="450" />
            </div>
         </div>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="sliders">
      <BaseSlider />
      <svg class="hero__wave-2 hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-2"></use>
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
         <AppCatalog :data-item="card" :visible-item="countProductCatalog" />
         <button v-if="card.length > 4 && countProductCatalog < 16" class="catalog__btn-loading" @click="countProductCatalog += 4">Загрузить еще</button>
      </div>
      <svg class="hero__wave-2 hero__wave-2--white hero__wave-2--wave-1" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-2"></use>
      </svg>
   </section>
   <section class="subscribe">
      <div class="container">
         <BlockFallow />
      </div>
      <svg class="hero__wave-2" width="11700" height="90">
         <use xlink:href="/sprite.svg#wave-2"></use>
      </svg>
   </section>
</template>

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";

export default {
   async setup() {
      const store = useAppStore();
      const config = useRuntimeConfig();

      const { data } = await useFetch(`${config.public.STRAPI}/api/products`, {
         method: "GET",
         params: {
            "pagination[pageSize]": 16,
            "locale": store.params.locale,
         },
      });

      const card = await useHandllerApi(data);

      return {
         card,
      };
   },

   data() {
      return {
         countProductCatalog: 8,
      };
   },

   methods: {
      ...mapActions(useAppStore, { setCollection: "setCollectionFilter" }),
   },
};
</script>
