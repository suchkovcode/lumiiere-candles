<template>
   <p class="price">
      <span class="price__currency">$</span>
      <span class="price__value">{{ priceData }}</span>
   </p>
</template>

<script>
export default {
   name: "v-card-price",

   props: {
      priceData: {
         type: String,
         required: true,
      },
   },
};
</script>

<style lang="scss" scoped>
.price {
   margin-bottom: 20px;
   font: 500 24px/1.3 "Karton";
   color: var(--color_primary);
}
</style>
