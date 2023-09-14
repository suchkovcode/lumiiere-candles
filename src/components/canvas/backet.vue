<template>
   <div class="backet" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Корзина:
      </canvas-header>
      <ClientOnly>
         <div v-if="cards.length && !checkout" class="backet__product">
            <div class="backet__product-list">
               <canvas-backet-item v-for="item in cards" :key="item.id" :backet-item="item" />
            </div>
            <p class="backet__product-all">Итого: {{ getSumAddition }} {{ cards[0].currency }}</p>
            <button class="btn backet__product-btn" type="button" @click="checkout = true">Оформить</button>
         </div>
         <p v-show="!cards.length && !checkout" class="backet__empty">Корзина пуста</p>
         <canvas-backet-form v-if="checkout" :sum-data="getSumAddition" :currency-data="cards[0].currency" />
      </ClientOnly>
   </div>
</template>

<script>
import { mapState } from "pinia";
import { useBacketStore } from "@/store/backetStore";

export default {
   props: {
      activeState: {
         type: Boolean,
         required: true,
      },
   },

   emits: ["closeCanvas"],

   data() {
      return {
         checkout: false,
      };
   },

   computed: {
      ...mapState(useBacketStore, ["cards", "getSumAddition"]),
   },

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },
};
</script>
