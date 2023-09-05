<template>
   <article class="card">
      <header class="card__header">
         <card-favorite :card-id="cardData.uid" :is-favorite="card.isFavorite" @is-favorite="card.isFavorite = $event" />
         <img
            class="card__hero"
            :src="cardData.img.url"
            :alt="cardData.img.alternativeText"
            :title="cardData.img.caption"
            width="140"
            height="180"
            loading="lazy" />
      </header>
      <div class="card__body">
         <card-rating :rating-storage="card" />
         <h3 class="card__title">{{ cardData.title }}</h3>
         <p class="card__article">Артикул: {{ cardArticle }}</p>
         <p v-if="isCandles || isMelts" class="card__description">{{ categoryJoin }}</p>
         <card-price :price-new="cardPriceNew" :price-old="cardPriceOld" />
         <card-changesize v-if="isCandles" :size-item-data="card.size" @cardsize="card.size = $event" />
      </div>
      <footer class="card__footer">
         <card-btn-more :card-id="cardData.uid" />
         <card-count :count-data="card.count" @count-item="card.count = $event" />
         <card-btn-add :is-empty="cardData.isStock" @click="addCardBacket" />
      </footer>
   </article>
</template>

<script>
import { mapActions } from "pinia";
import { useBacketStore } from "@/store/backetStore";

export default {
   props: {
      cardData: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         card: {
            id: this.cardData.uid,
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
         return this.cardData?.article?.[this.card.size]?.toUpperCase();
      },

      cardPriceNew() {
         const newPrice = this.cardData?.price?.new?.[this.card.size];
         return newPrice ? newPrice : false;
      },

      cardPriceOld() {
         const oldPrice = this.cardData?.price?.old?.[this.card.size];
         return oldPrice ? oldPrice : false;
      },

      isCandles() {
         return this.cardData?.category?.toLowerCase()?.trim() === "свечи";
      },

      isMelts() {
         return this.cardData?.category?.toLowerCase()?.trim() === "мелтсы";
      },
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

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
