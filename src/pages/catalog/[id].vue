<!-- eslint-disable vue/this-in-template -->
<template>
   <div class="single-page">
      <section class="post">
         <div class="container">
            <base-breadcrumbs :roter-link="roterData" />
            <article class="post__container">
               <img class="post__img" :src="cardData.hero" loading="lazy" alt="картинка товара" width="260" height="260" />
               <div class="post__content">
                  <header class="post__content-header">
                     <card-v-rating :rating-storage="cardData" />
                     <h1 class="post__title">{{ cardData.title }}</h1>
                     <p class="post__article">
                        Артикул: <span class="post__article-size"> {{ cardData.code.small }} </span>
                     </p>
                     <card-v-price :price-data="cardData.price.small" />
                     <card-v-changesize v-if="isPostcard" :size-item-data="cardData.code.small" />
                     <div class="post__btn">
                        <card-v-count :count-item-data="1" />
                        <card-v-btn-add class="post__btn-add" :is-empty="cardData.isStock" @click="addCardBacket" />
                        <card-v-favorite class="post__favorite" :card-id="cardData.id" :is-favorite="cardData.isFavorite" />
                     </div>
                  </header>
                  <div class="post__content-body">
                     <p class="post__key">{{ cardData.tag.join(" | ") }}</p>
                     <p class="post__description">{{ cardData.description }}</p>
                     <p v-if="isPostcard" class="post__info">
                        Интенсивность:
                        <span class="post__info-circles">
                           <span v-for="n in 5" :key="n" class="post__info-circle" :class="{ active: n <= cardData.intensity }"></span>
                        </span>
                     </p>
                  </div>
                  <footer v-if="isPostcard" class="post__content-footer">
                     <p class="post__category">
                        Аромат: <span>{{ cardData.aroma }}</span>
                     </p>
                     <p class="post__category">
                        Коллекция: <span>{{ cardData.collection }}</span>
                     </p>
                     <p class="post__category">
                        Вес:
                        <span>{{ cardData.weight.small }}</span> г
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


export default {
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
         isPostcard: this.$route.params.id.replace(/(poscode|card).*/, "$1") === "card",
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),
   },

   created() {
      this.cardData = this.products.find((item) => item.id === this.$route.params.id);
      this.roterData[2].name = this.cardData.title;
   },

   methods: {
      ...mapActions(useBacketStore, { addBacketCard: "addCardBacket" }),

      addCardBacket() {
         const cardData = Object.assign({}, this.storageData);
         this.addBacketCard(cardData);
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
