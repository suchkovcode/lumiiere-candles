<template>
   <nuxt-link class="cardBtnMore" :to="`/catalog/${pathToCategory}/${cardId}`"> Подробнее </nuxt-link>
</template>

<script>
export default {
   props: {
      cardId: {
         type: String,
         required: true,
      },

      cardType: {
         type: String,
         required: true,
      },
   },

   computed: {
      pathToCategory() {
         const categoryToPath = {
            Свечи: "candles",
            Наборы: "boxes",
            Мелтсы: "melts",
            Дополнительно: "matches",
         };

         return categoryToPath[this.cardType];
      },
   },
};
</script>
