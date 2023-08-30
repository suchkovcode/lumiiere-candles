<template>
   <div class="backet" :class="{ active: activeState }">
      <canvas-header @close-canvas="emitCloseCanvas">
         Корзина:
      </canvas-header>
      <div v-if="cards.length && !checkout" class="backet__product">
         <div class="backet__product-list">
            <canvas-backet-item v-for="item in cards" :key="item.id" :backet-item="item"></canvas-backet-item>
         </div>
         <p class="backet__product-all">Итого: ${{ sumAddition }}</p>
         <button class="btn backet__product-btn" type="button" @click="checkout = true">Оформить</button>
      </div>
      <p v-else-if="!cards.length && !checkout" class="backet__empty">Корзина пуста</p>
      <canvas-backet-form v-if="checkout" :sum-data="sumAddition" />
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
      ...mapState(useBacketStore, ["cards", "sumAddition"]),
   },

   methods: {
      emitCloseCanvas() {
         this.$emit("closeCanvas", false);
      },
   },
};
</script>
