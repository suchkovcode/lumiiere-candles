<template>
   <nuxt-link class="cardBtnMore" :to="`/catalog/${cardId}`"> Подробнее </nuxt-link>
</template>

<script>
export default {
   props: {
      cardId: {
         type: String,
         required: true,
      },
   },
};
</script>
