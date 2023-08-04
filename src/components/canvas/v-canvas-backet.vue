<template>
   <div class="backet" :class="{ active: activeState }">
      <v-canvas-header @closeCanvas="emitCloseCanvas"> Корзина: </v-canvas-header>
      <div v-if="cards.length && !checkout" class="backet__product">
         <div class="backet__product-list">
            <v-canvas-backet-item v-for="item in cards" :key="item.id" :backetItem="item"></v-canvas-backet-item>
         </div>
         <p class="backet__product-all">Итого: ${{ sumAddition }}</p>
         <button class="btn backet__product-btn" type="button" @click="checkout = true">Оформить</button>
      </div>
      <p v-else-if="!cards.length && !checkout" class="backet__empty">Корзина пуста</p>
      <v-canvas-backet-form v-if="checkout" :sumData="sumAddition" />
   </div>
</template>

<script>
import { mapState } from "pinia";
import { useBacketStore } from "@/store/backetStore";

export default {
   name: "v-canvas-backet",

   data() {
      return {
         checkout: false,
      };
   },

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },

   computed: {
      ...mapState(useBacketStore, ["cards", "sumAddition"]),
   },

   props: {
      activeState: {
         type: Boolean,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.backet {
   overflow: hidden;
   position: fixed;
   top: 0;
   right: -100%;
   z-index: 50;
   display: block;
   width: 100%;
   height: 100vh;
   max-width: 450px;
   background-color: var(--color_base);
   transition: right 0.3s ease-in-out;

   &__empty {
      margin: 25px;
      padding: 25px;
      border-radius: 12px;
      background-color: var(--color_input);
   }

   &__product {
      overflow-y: scroll;
      height: 100%;
      padding: 25px;
      padding-bottom: 120px;

      &-list {
         display: flex;
         flex-flow: column;
         gap: 20px;
         margin-bottom: 20px;
      }

      &-all {
         margin-left: auto;
         font: 600 18px/1.3 "AvenirNextCyr";
         color: var(--color_secondary);
      }

      &-btn {
         margin-top: 30px;
      }
   }

   &.active {
      right: 0;
   }

   @include sm {
      border-left: 1px solid var(--color_border);
   }

   @include lg {
      max-width: 550px;
   }
}
</style>
