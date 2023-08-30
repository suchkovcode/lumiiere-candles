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

