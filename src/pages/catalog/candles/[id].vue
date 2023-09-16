<!-- eslint-disable vue/no-v-html -->
<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <base-breadcrumbs :roter-link="{ catalog: true, name: cards.title, to: $route.fullPath }" />

            
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

<script>
import { mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";
import { useBacketStore } from "@/store/backetStore";

export default {
   async setup() {
      const route = useRoute();
      const store = useAppStore();
      const config = useRuntimeConfig();

      const { data } = await useFetch(`${config.public.STRAPI}/api/products/${route.params.id}`, {
         method: "GET",
         params: { locale: store.params.locale },
      });

      const cards = useHandllerApiOne(data);

      return cards;
   },

   data() {
      return {
         card: {
            id: this.$route.params.id,
            size: "small",
            count: 1,
         },
      };
   },

   computed: {
      categoryJoin() {
         return this.cards?.tags?.join(" | ");
      },

      cardArticle() {
         return this.cards?.article?.[this.card.size]?.toUpperCase();
      },

      cardPriceNew() {
         const newPrice = this.cards?.price?.new?.[this.card.size];
         return newPrice ? newPrice : false;
      },

      cardPriceOld() {
         const oldPrice = this.cards?.price?.old?.[this.card.size];
         return oldPrice ? oldPrice : false;
      },

      cardWeight() {
         const cardWeight = this.cards?.weight?.[this.card.size];
         return cardWeight ? cardWeight : false;
      },

      isCandles() {
         return this.cards?.category?.toLowerCase()?.trim() === "свечи";
      },

      isMelts() {
         return this.cards?.category?.toLowerCase()?.trim() === "мелтсы";
      },
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

      addCardBacket() {
         if (this.cards.isStock) {
            const cardData = { ...this.card };
            this.addBacketCard(cardData);
            this.card.count = 1;
            this.card.size = "small";
         }
      },
   },
};
</script>
