<template>
   <p class="price">
      <span class="price__currency">{{ priceCurrency }}</span>
      <span class="price__value">{{ priceValue }}</span>
   </p>
</template>

<script>
export default {
   props: {
      priceValue: {
         type: Number,
         required: true,
      },

      priceCurrency: {
         type: String,
         required: true,
      },
   },
};
</script>
