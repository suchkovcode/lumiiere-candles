<template>
   <article class="card">
      <header class="card__header">
         <v-card-favorite :cardId="cardData.id" :isFavorite="cardData.isFavorite" />
         <img class="card__hero" :src="cardData.hero" alt="Картинка продукта" width="140" height="180" loading="lazy" />
      </header>
      <main class="card__body">
         <v-card-rating :ratingStorage="currentCardData" @ratingData="addRatingData" />
         <h3 class="card__title">{{ cardData.title }}</h3>
         <p class="card__article">Артикул: {{ cardArticle }}</p>
         <p class="card__description">{{ categoryJoin }}</p>
         <v-card-price :priceData="cardPrice" />
         <v-card-changesize :sizeItemData="currentCardData.size" @cardsize="updateSize" />
      </main>
      <footer class="card__footer">
         <v-card-btn-more :cardId="cardData.id" />
         <v-card-count :countItemData="currentCardData.count" @countItem="updateCount" />
         <v-card-btn-add @click="addCardBacket" />
      </footer>
   </article>
</template>

<script>
import { mapActions } from "pinia";
import { useStorage } from "@vueuse/core";
import { useBacketStore } from "@/store/backetStore";

export default {
   name: "v-card",

   data() {
      return {
         currentCardData: useStorage(this.cardData.id, {
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
         }),
      };
   },

   computed: {
      categoryJoin() {
         return this.cardData.category.join(" | ");
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

      async addCardBacket() {
         const cardData = Object.assign({}, this.currentCardData);
         this.addBacketCard(cardData);
         this.currentCardData.count = 1;
         this.currentCardData.size = "small";
      },

      addRatingData(event) {
         this.currentCardData.ratingSelect = event.hoverItem;
         this.currentCardData.ratingVote = event.countVote;
         this.currentCardData.ratingClick = event.clickUser;
      },
   },

   props: {
      cardData: {
         type: Object,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.card {
   overflow: hidden;
   position: relative;
   display: flex;
   flex-flow: column;
   justify-content: space-between;
   width: 100%;
   height: auto;
   max-width: 340px;
   border-radius: 18px;
   background-color: var(--color_base);
   transition: all 0.2s ease-in-out;

   &__header {
      position: relative;
   }

   &__favorite {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: var(--color_base);

      &-icon {
         width: 24px;
         height: 20px;
         fill: transparent;
         transition: all 0.2s ease-in-out;
      }

      &:hover {
         .card__favorite-icon {
            transform: scale(1.2);
            transition: all 0.2s ease-in-out;
         }
      }

      &[data-select="true"] {
         .card__favorite-icon {
            fill: var(--color_primary);
         }
      }

      &[data-select="false"] {
         .card__favorite-icon {
            fill: none;
         }
      }
   }

   &__hero {
      display: block;
      width: 100%;
      height: 210px;
      object-fit: cover;

      @include md {
         height: 250px;
      }

      @include lg {
         height: 300px;
      }
   }

   &__body {
      position: relative;
      flex: auto;
      padding: 25px 15px;
   }

   &__title {
      margin-bottom: 5px;
      font: 500 20px/1.3 "Karton";
      color: var(--color_secondary);
   }

   &__article {
      margin-bottom: 15px;
      font: 300 12px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__description {
      height: 40px;
      margin-bottom: 20px;
      font: 500 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__footer {
      position: relative;
      display: flex;
      flex-flow: column;
      gap: 10px;
      padding: 0 15px 15px 15px;

      @include md {
         flex-flow: row;
         flex-wrap: wrap;
      }
   }

   &:hover {
      box-shadow: 0 0 45px 0 rgba(0, 0, 0, 10%);
   }
}
</style>
