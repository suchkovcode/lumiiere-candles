<template>
   <nuxt-link class="cardBtnMore" :to="`/catalog/${pathToCategory}/${cardId}`" itemprop="url"> Подробнее </nuxt-link>
</template>

<script setup>
const props = defineProps({
   cardId: {
      type: String,
      required: true,
   },

   cardType: {
      type: String,
      required: true,
   },
});

const pathToCategory = computed(() => {
   const categoryToPath = {
      Свечи: "candles",
      Наборы: "boxes",
      Мелтсы: "melts",
      Дополнительно: "matches",
   };

   return categoryToPath[props.cardType];
});
</script>
