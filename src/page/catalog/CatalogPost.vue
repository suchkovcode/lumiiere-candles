<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <BaseBreadcrumbs :roterLink="roterData" />
            <article class="post__container">
               <img class="post__img" :src="cardData.hero" loading="lazy" alt="картинка товара" width="260" height="260" />
               <div class="post__content">
                  <header class="post__content-header">
                     <v-card-rating :ratingStorage="storageData" @ratingData="addRatingData" />
                     <h1 class="post__title">{{ cardData.title }}</h1>
                     <p class="post__article">Артикул: {{ cardArticle }}</p>
                     <v-card-price :priceData="cardPrice" />
                     <v-card-changesize v-if="isPostcard" :sizeItemData="storageData.size" @cardsize="updateSize" />

                     <div class="post__btn">
                        <v-card-count :countItemData="storageData.count" @countItem="updateCount" />
                        <v-card-btn-add class="post__btn-add" :isEmpty="cardData.isStock" @click="addCardBacket" />
                        <v-card-favorite class="post__favorite" :cardId="cardData.id" :isFavorite="cardData.isFavorite" />
                     </div>
                  </header>
                  <main class="post__content-body">
                     <p class="post__key">{{ categoryJoin }}</p>
                     <p class="post__description">{{ cardData.description }}</p>
                     <p class="post__info" v-if="isPostcard">
                        Интенсивность:
                        <span class="post__info-circles">
                           <span v-for="n in 5" :key="n" class="post__info-circle" :class="{ active: n <= cardData.intensity }"></span>
                        </span>
                     </p>
                  </main>

                  <footer class="post__content-footer" v-if="isPostcard">
                     <p class="post__category">
                        Аромат: <span>{{ cardData.aroma }}</span>
                     </p>
                     <p class="post__category">
                        Коллекция: <span>{{ cardData.collection }}</span>
                     </p>
                     <p class="post__category">
                        Вес: <span>{{ cardData.weight[this.storageData.size] }}</span>г
                     </p>
                  </footer>
               </div>
            </article>
         </div>
      </section>
   </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/store/appStore";
import { useBacketStore } from "@/store/backetStore";
import { useStorage } from "@vueuse/core";

export default {
   name: "PagePost",

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
               id: 2,
               name: "",
               to: this.$router.currentRoute.value.params.id,
               last: true,
            },
         ],

         storageData: useStorage(this.$router.currentRoute.value.params.id, {}),
         cardData: {},
         isPostcard: this.$router.currentRoute.value.params.id.replace(/(poscode|card).*/, "$1") === "card",
      };
   },

   created() {
      const prod = this.products.find((item) => item.id === this.$router.currentRoute.value.params.id);
      this.cardData = prod;
      this.roterData[2].name = this.cardData.title;
      document.title = `Lumiiere Candles | ${this.cardData.title}`;
   },

   computed: {
      ...mapState(useAppStore, ["products"]),

      categoryJoin() {
         return this.cardData.tag.join(" | ");
      },

      cardArticle() {
         return this.cardData.code[this.storageData.size].toUpperCase();
      },

      cardPrice() {
         return this.cardData.price[this.storageData.size];
      },
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

      addCardBacket() {
         const cardData = Object.assign({}, this.storageData);
         this.addBacketCard(cardData);
         this.storageData.count = 1;
         this.storageData.size = "small";
      },

      updateSize(data) {
         this.storageData.size = data;
         this.storageData.code = this.cardData.code[data];
         this.storageData.price = this.cardData.price[data];
      },

      addRatingData(event) {
         this.storageData.ratingSelect = event.hoverItem;
         this.storageData.ratingVote = event.countVote;
         this.storageData.ratingClick = event.clickUser;
      },

      updateCount(data) {
         this.storageData.count = data;
      },
   },
};
</script>

<style lang="scss" scoped>
.post {
   &__container {
      display: flex;
      flex-flow: column;
      gap: 20px;

      @include lg {
         flex-flow: row;
         gap: 30px;
      }
   }

   &__img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 560px;
      max-height: 560px;
      margin: 0 auto;
      object-fit: cover;

      @include lg {
         margin: 0;
      }
   }

   &__content {
      display: flex;
      flex-flow: column;
      gap: 20px;
      width: 100%;
      max-width: 560px;

      &-footer {
         display: flex;
         flex-flow: column;
      }
   }

   &__title {
      margin-bottom: 5px;
      font: 500 26px/1.3 "Karton";
      color: var(--color_secondary);
   }

   &__article {
      margin-bottom: 25px;
      font: 300 16px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      &-size {
         text-transform: uppercase;
      }
   }

   &__btn {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;

      &-add {
         min-width: 120px;
         max-width: 160px;

         &:hover {
            background-color: #ff6219;
         }

         @include md {
            flex: 0 0 calc(50% - 5px);
         }
      }
   }

   &__favorite {
      cursor: pointer;
      position: relative;
      top: 0;
      left: 0;
      border: 1px solid var(--color_primary);
   }

   &__key {
      margin-bottom: 15px;
      font: 600 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   &__description {
      margin-bottom: 15px;
      font: 400 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   &__info {
      display: flex;
      align-items: center;
      gap: 10px;
      font: 600 14px/1.3 "AvenirNextCyr";

      &-circles {
         display: flex;
         align-items: center;
         gap: 5px;
      }

      &-circle {
         display: block;
         width: 12px;
         height: 12px;
         border-radius: 100%;
         background-color: var(--color_border);

         &.active {
            background-color: var(--color_primary);
         }

         @include md {
            width: 15px;
            height: 15px;
         }
      }

      @include md {
         font-size: 16px;
      }
   }

   &__category {
      font: 300 14px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);

      @include md {
         font-size: 16px;
      }
   }

   & .changesize {
      margin-bottom: 20px;
   }

   .btncount {
      max-width: 100px;
   }
}
</style>
