<!-- eslint-disable vue/html-self-closing -->
<template>
   <section class="postcard">
      <div class="container">
         <base-breadcrumbs class="boxes__breadcrumbs" :roter-link="{ catalog: true, name: 'Всякое разное', to: '/catalog/matches' }" />
         <div class="postcard__header">
            <img class="postcard__header-icon" src="@/assets/img/png/matches__page-icon.png" alt="pictire" width="85" height="40" />
            <h1 class="title postcard__title">ВСЯКОЕ РАЗНОЕ</h1>
            <p class="subtitle postcard__subtitle">
               <svg class="postcard__subtitle-icon">
                  <use xlink:href="/sprite.svg#catalogGetting"></use>
               </svg>
               Свечи, которые действительно пахнут!
            </p>
         </div>
      </div>
   </section>
   <section class="postcardCatalog">
      <div class="container">
         <AppCatalog v-if="card.length > 0" :data-item="card" :visible-item="countProductCatalog" class="catalogs__card--grey" />
         <button
            v-show="card.length > 4 && card.length > countProductCatalog"
            class="catalog__btn-loading catalog__btn-loading--margin"
            @click="countProductCatalog += 8">
            Загрузить еще
         </button>
         <p v-if="!card.length" class="emptyData">Список пуст</p>
      </div>
   </section>
</template>

<script setup>
const countProductCatalog = ref(8);

const { find } = useStrapi();
const { data } = await find("products", {
   "pagination[pageSize]": 100,
});

const cards = await useHandllerApi(data);

const card = computed(() => cards.filter((item) => item.category === "Дополнительно"));
</script>
