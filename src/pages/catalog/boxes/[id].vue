<!-- eslint-disable vue/no-v-html -->
<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <base-breadcrumbs
               :roter-link="{ catalog: true, subpage: { name: 'Наборы свечей', to: '/catalog/boxes' }, name: cards.title, to: $route.fullPath }" />
            <article class="post__container">
               <img class="post__img" :src="cards.img.url" :alt="cards.img.alternativeText" :title="cards.img.caption" width="260" height="260" />
               <div class="post__content">
                  <header class="post__content-header">
                     <card-rating :rating-storage="card" />
                     <h1 class="post__title">{{ cards.title }}</h1>
                     <p class="post__article">
                        Артикул: <span class="post__article-size"> {{ cardArticle }} </span>
                     </p>
                     <card-price :price-new="cardPriceNew" :price-old="cardPriceOld" :price-currency="cards.price.currency" />
                     <card-changesize v-if="isCandles" :size-item-data="card.size" @cardsize="card.size = $event" />
                     <div class="post__btn">
                        <card-count :count-data="card.count" @count-item="card.count = $event" />
                        <card-btn-add class="post__btn-add" :is-empty="cards.isStock" @click="addCardBacket" />
                        <card-favorite class="post__favorite" :card-id="cards.uid" />
                     </div>
                  </header>
                  <div class="post__content-body">
                     <p v-if="isCandles || isMelts" class="post__key">{{ categoryJoin }}</p>
                     <p class="post__description">{{ cards.description }}</p>
                     <div v-if="cards.moreInfo" class="post__description" v-html="cards.moreInfo"></div>
                     <p v-if="isCandles" class="post__info">
                        Интенсивность:
                        <span class="post__info-circles">
                           <span v-for="n in 5" :key="n" class="post__info-circle" :class="{ active: n <= cards.intensity }"></span>
                        </span>
                     </p>
                  </div>
                  <footer v-if="isCandles" class="post__content-footer">
                     <p class="post__category">
                        Аромат: <span>{{ cards.aroma }}</span>
                     </p>
                     <p class="post__category">
                        Коллекция: <span>{{ cards.collection }}</span>
                     </p>
                     <p class="post__category">
                        Вес:
                        <span>{{ cardWeight }}</span> г
                     </p>
                  </footer>
               </div>
            </article>
         </div>
      </section>
   </div>
</template>

<script setup>
const store = useBacketStore();
const route = useRoute();
const { findOne } = useStrapi();

const card = ref({
   id: route.params.id,
   size: "small",
   count: 1,
});

const { data } = await findOne("products", route.params.id);
const { cards } = await useHandllerApiOne(data);

const categoryJoin = computed(() => {
   return cards?.tags?.join(" | ");
});

const cardArticle = computed(() => {
   return cards?.article?.[card.value.size]?.toUpperCase();
});

const cardPriceNew = computed(() => {
   const newPrice = cards?.price?.new?.[card.value.size];
   return newPrice ? newPrice : false;
});

const cardPriceOld = computed(() => {
   const oldPrice = cards?.price?.old?.[card.value.size];
   return oldPrice ? oldPrice : false;
});

const cardWeight = computed(() => {
   const cardWeight = cards?.weight?.[card.value.size];
   return cardWeight ? cardWeight : false;
});

const isCandles = computed(() => {
   return cards?.category?.toLowerCase()?.trim() === "свечи";
});

const isMelts = computed(() => {
   return cards?.category?.toLowerCase()?.trim() === "мелтсы";
});

const addCardBacket = () => {
   if (cards.isStock) {
      const cardData = { ...card.value };
      store.addCardBacket(cardData);
      card.value.count = 1;
      card.value.size = "small";
   }
};
</script>
