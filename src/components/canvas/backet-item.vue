<template>
   <div class="backetItem">
      <img class="backetItem__img" :src="img.url" :alt="img.alternativeText" :title="img.caption" width="70" height="70" />
      <div class="backetItem__options">
         <nuxt-link class="backetItem__name" :to="`/catalog/${backetItem.id}`">{{ title }}</nuxt-link>
         <p class="backetItem__size">Размер: {{ sizeArticleData }} мл</p>
         <p class="backetItem__code">{{ backetItem.article }}</p>
      </div>
      <div class="backetItem__count">
         <div class="backetItem__plusminus">
            <div class="backetItem__minus" @click="decrementCount(backetItem.article)"></div>
            <div class="backetItem__total">
               {{ backetItem.count }}
            </div>
            <div class="backetItem__plus" @click="incrementCount(backetItem.article)"></div>
         </div>
         <div class="backetItem__sum">
            {{ backetItem.total }} {{ backetItem.currency }}
         </div>
      </div>
      <div class="backetItem__remove" @click="delcard(backetItem.article)"></div>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useBacketStore } from "@/store/backetStore";
import { useAppStore } from "~/store/appStore";

export default {
   props: {
      backetItem: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         img: {},
         title: "",
      };
   },

   computed: {
      ...mapState(useAppStore, ["products"]),

      sizeArticleData() {
         const sizeMapping = {
            small: "40",
            medium: "100",
            large: "200",
         };

         return sizeMapping[this.backetItem.size] || "";
      },
   },

   mounted() {
      const cardData = this.products.find((item) => item.uid === this.backetItem.id);
      this.img = cardData.img;
      this.title = cardData.title;
   },

   methods: {
      ...mapActions(useBacketStore, { incrementCount: "incrementCountCard", decrementCount: "decrementCountCard", delcard: "delCardBacket" }),
   },
};
</script>
