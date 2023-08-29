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

<style lang="scss" scoped>
.backetItem {
   display: grid;
   grid-template-areas:
      "img options remove"
      "count count count";
   grid-template-columns: 70px 1fr 15%;
   gap: 15px;
   padding-bottom: 20px;
   border-bottom: 1px solid var(--color_border);

   &__img {
      grid-area: img;
      width: 70px;
      height: 70px;
      border-radius: 8px;
      object-fit: cover;
   }

   &__options {
      grid-area: options;
   }

   &__name {
      font: 700 14px/1.5 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__size {
      font: 500 13px/1.5 "AvenirNextCyr";
      color: var(--color_backet);
   }

   &__code {
      font: 500 13px/1.5 "AvenirNextCyr";
      color: var(--color_backet);
   }

   &__count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      grid-area: count;
   }

   &__plusminus {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;
   }

   &__minus {
      cursor: pointer;
      position: relative;
      width: 20px;
      height: 20px;
      border: 1px solid var(--color_backet);
      border-radius: 100%;
      transition: all 0.2s ease-in-out;

      &::after {
         content: "";
         position: absolute;
         top: 50%;
         left: calc(50% - 5px);
         display: block;
         width: 10px;
         height: 1px;
         background-color: var(--color_backet);
         transition: all 0.2s ease-in-out;
      }

      &:hover {
         border: 1px solid var(--color_secondary);

         &::after {
            background-color: var(--color_secondary);
         }
      }
   }

   &__plus {
      cursor: pointer;
      position: relative;
      width: 20px;
      height: 20px;
      border: 1px solid var(--color_backet);
      border-radius: 100%;
      transition: all 0.2s ease-in-out;

      &::before {
         content: "";
         position: absolute;
         top: 50%;
         left: calc(50% - 5px);
         display: block;
         width: 10px;
         height: 1px;
         background-color: var(--color_backet);
         transform: rotate(90deg);
         transition: all 0.2s ease-in-out;
      }

      &::after {
         content: "";
         position: absolute;
         top: 50%;
         left: calc(50% - 5px);
         display: block;
         width: 10px;
         height: 1px;
         background-color: var(--color_backet);
         transition: all 0.2s ease-in-out;
      }

      &:hover {
         border: 1px solid var(--color_secondary);

         &::after {
            background-color: var(--color_secondary);
         }
      }
   }

   &__sum {
      font: 600 16px/1.3 "AvenirNextCyr";
      color: var(--color_secondary);
   }

   &__remove {
      cursor: pointer;
      position: relative;
      align-self: center;
      grid-area: remove;
      width: 22px;
      height: 22px;
      margin-left: auto;
      border: 1px solid var(--color_backet);
      border-radius: 100%;
      transition: all 0.2s ease-in-out;

      &::before,
      &::after {
         content: "";
         position: absolute;
         top: 50%;
         left: calc(50% - 7px);
         display: block;
         width: 14px;
         height: 1px;
         background-color: var(--color_backet);
         transition: all 0.2s ease-in-out;
      }

      &::before {
         transform: rotate(45deg);
      }

      &::after {
         transform: rotate(-45deg);
      }

      &:hover {
         border: 1px solid red;

         &::before,
         &::after {
            background-color: red;
         }
      }
   }

   @include lg {
      grid-template-areas: "img options count remove";
      grid-template-columns: 70px 1fr 0.9fr 80px;
   }
}
</style>
