<template>
   <div class="backetItem">
      <img class="backetItem__img" :src="backetItem.hero" alt="Картинка товара" width="70" height="70" />
      <div class="backetItem__options">
         <nuxt-link class="backetItem__name" :to="`/catalog/${backetItem.id}`">{{ backetItem.title }}</nuxt-link>
         <p class="backetItem__size">Размер: {{ sizeArticleData }} мл</p>
         <p class="backetItem__code">{{ backetItem.code }}</p>
      </div>
      <div class="backetItem__count">
         <div class="backetItem__plusminus">
            <div class="backetItem__minus" @click="decrementCount(backetItem.code)"></div>
            <div class="backetItem__total">
               {{ backetItem.count }}
            </div>
            <div class="backetItem__plus" @click="incrementCount(backetItem.code)"></div>
         </div>
         <div class="backetItem__sum">
            ${{ backetItem.total }}
         </div>
      </div>
      <div class="backetItem__remove" @click="delcard(backetItem.code)"></div>
   </div>
</template>

<script>
import { mapActions } from "pinia";
import { useBacketStore } from "@/store/backetStore";

export default {
   props: {
      backetItem: {
         type: Object,
         required: true,
      },
   },

   computed: {
      sizeArticleData() {
         let size;

         if (this.backetItem.size === "small") {
            size = "40";
         }

         if (this.backetItem.size === "medium") {
            size = "100";
         }

         if (this.backetItem.size === "large") {
            size = "200";
         }

         return size;
      },
   },

   methods: {
      ...mapActions(useBacketStore, { incrementCount: "incrementCountCard", decrementCount: "decrementCountCard",  delcard: "delCardBacket" }),
   },
};
</script>
