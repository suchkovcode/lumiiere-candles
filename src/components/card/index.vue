<template>
   <article class="card">
      <header class="card__header">
         <card-v-favorite :card-id="cardData.id" :is-favorite="cardData.isFavorite" />
         <img class="card__hero" :src="cardData.hero" alt="Картинка продукта" width="140" height="180" loading="lazy" />
      </header>
      <div class="card__body">
         <card-v-rating :rating-storage="currentCardData" @rating-data="addRatingData" />
         <h3 class="card__title">{{ cardData.title }}</h3>
         <p class="card__article">Артикул: {{ cardArticle }}</p>
         <p v-show="isPostcard" class="card__description">{{ categoryJoin }}</p>
         <card-v-price :price-data="cardPrice" />
         <card-v-changesize v-show="isPostcard" :size-item-data="currentCardData.size" @cardsize="updateSize" />
      </div>
      <footer class="card__footer">
         <card-v-btn-more :card-id="cardData.id" />
         <card-v-count :count-item-data="currentCardData.count" @count-item="updateCount" />
         <card-v-btn-add :is-empty="cardData.isStock" @click="addCardBacket" />
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
         currentCardData: {
            id: this.cardData.id,
            title: this.cardData.title,
            hero: this.cardData.hero,
            code: this.cardData.code.small,
            price: this.cardData.price.small,
            size: "small",
            count: 1,
            ratingSelect: 0,
            ratingVote: 0,
            ratingClick: false,
         },

         isPostcard: this.cardData.id.replace(/(poscode|card).*/, "$1") === "card",
      };
   },

   computed: {
      categoryJoin() {
         return this.cardData.tag.join(" | ");
      },

      cardArticle() {
         return this.cardData.code[this.currentCardData.size].toUpperCase();
      },

      cardPrice() {
         return this.cardData.price[this.currentCardData.size];
      },
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

      updateSize(data) {
         this.currentCardData.size = data;
         this.currentCardData.code = this.cardData.code[data];
         this.currentCardData.price = this.cardData.price[data];
      },

      updateCount(data) {
         this.currentCardData.count = data;
      },

      addCardBacket() {
         if (this.cardData.isStock) {
            const cardData = Object.assign({}, this.currentCardData);
            this.addBacketCard(cardData);
            this.currentCardData.count = 1;
            this.currentCardData.size = "small";
         }
      },

      addRatingData(event) {
         this.currentCardData.ratingSelect = event.hoverItem;
         this.currentCardData.ratingVote = event.countVote;
         this.currentCardData.ratingClick = event.clickUser;
      },
   },
};
</script>
