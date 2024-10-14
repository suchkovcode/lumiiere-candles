<!-- eslint-disable vue/html-self-closing -->
<template>
   <section class="melts">
      <div class="container">
         <base-breadcrumbs class="boxes__breadcrumbs" :roter-link="{ catalog: true, name: 'Невероятные мелтсы', to: '/catalog/melts' }" />
         <div class="melts__header">
            <img class="melts__header-icon" src="/img/melts__header-icon.svg" alt="pictire" width="119" height="77" />
            <h1 class="title melts__title">НЕВЕРОЯТНЫЕ МЕЛТСЫ</h1>
         </div>
      </div>
   </section>
   <section class="meltsCatalog">
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

const card = computed(() => cards.filter((item) => item.category === "Мелтсы"));
</script>
