<!-- eslint-disable vue/no-v-html -->
<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <base-breadcrumbs :roter-link="roterData" />
            <article class="post__container">
               <img
                  class="post__img"
                  :src="cardData.img.url"
                  :alt="cardData.img.alternativeText"
                  :title="cardData.img.caption"
                  width="260"
                  height="260" />
               <div class="post__content">
                  <header class="post__content-header">
                     <card-v-rating :rating-storage="card" />
                     <h1 class="post__title">{{ cardData.title }}</h1>
                     <p class="post__article">
                        Артикул: <span class="post__article-size"> {{ cardArticle }} </span>
                     </p>
                     <card-v-price :price-new="cardPriceNew" :price-old="cardPriceOld" />
                     <card-v-changesize v-if="isCandles" :size-item-data="card.size" @cardsize="updateSize" />
                     <div class="post__btn">
                        <card-v-count :count-data="card.count" @count-item="updateCount" />
                        <card-v-btn-add class="post__btn-add" :is-empty="cardData.isStock" @click="addCardBacket" />
                        <card-v-favorite
                           class="post__favorite"
                           :card-id="cardData.uid"
                           :is-favorite="card.isFavorite"
                           @is-favorite="card.isFavorite = $event" />
                     </div>
                  </header>
                  <div class="post__content-body">
                     <p v-if="isCandles" class="post__key">{{ categoryJoin }}</p>
                     <p class="post__description">{{ cardData.description }}</p>
                     <div v-if="cardData.moreInfo" class="post__description" v-html="cardData.moreInfo"></div>
                     <p v-if="isCandles" class="post__info">
                        Интенсивность:
                        <span class="post__info-circles">
                           <span v-for="n in 5" :key="n" class="post__info-circle" :class="{ active: n <= cardData.intensity }"></span>
                        </span>
                     </p>
                  </div>
                  <footer v-if="isCandles" class="post__content-footer">
                     <p class="post__category">
                        Аромат: <span>{{ cardData.aroma }}</span>
                     </p>
                     <p class="post__category">
                        Коллекция: <span>{{ cardData.collection }}</span>
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
import { getProductOne } from "~/api/request";

export default {
   async setup() {
      const route = useRoute();
      const store = useAppStore();

      const { card } = await getProductOne(route.params.id, {
         "locale": store.params.locale,
         "pagination[page]": 1,
         "pagination[pageSize]": 100,
      });

      return {
         cards: card,
      };
   },

   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Главная",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Каталог",
               to: "/catalog",
               last: false,
            },
            {
               id: 3,
               name: "",
               to: this.$route.fullPath,
               last: true,
            },
         ],

         cardData: {},

         card: {
            id: this.$route.params.id,
            size: "small",
            count: 1,
            isFavorite: false,
         },
      };
   },

   computed: {
      categoryJoin() {
         return this.cardData?.tags?.join(" | ");
      },

      cardArticle() {
         return this.cardData?.article[this.card.size]?.toUpperCase();
      },

      cardPriceNew() {
         return this.cardData?.price?.new[this.card.size];
      },

      cardPriceOld() {
         return this.cardData?.price.old ? this.cardData.price.old[this.card.size] : false;
      },

      isCandles() {
         return this.cardData?.category?.toLowerCase()?.trim() !== "свечи" ? false : true;
      },

      cardWeight() {
         return this.cardData?.weight[this.card.size] ? this.cardData?.weight[this.card.size] : null;
      },
   },

   created() {
      this.cardData = this.cards;
      this.roterData[2].name = this.cardData.title;
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

      updateSize(data) {
         this.card.size = data;
      },

      updateCount(data) {
         this.card.count = data;
      },

      addCardBacket() {
         if (this.cardData.isStock) {
            const cardData = { ...this.card };
            this.addBacketCard(cardData);
            this.card.count = 1;
            this.card.size = "small";
         }
      },
   },
};
</script>
