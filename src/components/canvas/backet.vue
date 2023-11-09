<template>
   <div class="backet" :class="{ active: activeState }">
      <canvas-header @close-canvas="$emit('closeCanvas', false)">
         Корзина:
      </canvas-header>
      <ClientOnly>
         <div v-if="store.cards.length && !checkout" class="backet__product">
            <div class="backet__product-list">
               <canvas-backet-item v-for="item in store.cards" :key="item.id" :backet-item="item" />
            </div>
            <p class="backet__product-all">Итого: {{ store.getSumAddition }} {{ store.cards[0].currency }}</p>
            <button class="btn backet__product-btn" type="button" @click="checkout = true">Оформить</button>
         </div>
         <p v-show="!store.cards.length && !checkout" class="backet__empty">Корзина пуста</p>
         <canvas-backet-form v-if="checkout" :sum-data="store.getSumAddition" :currency-data="store.cards[0].currency" />
      </ClientOnly>
   </div>
</template>

<script setup>
const emit = defineEmits(["closeCanvas"]);
const props = defineProps({
   activeState: {
      type: Boolean,
      required: true,
   },
});

const store = useBacketStore();
const checkout = ref(false);
</script>
