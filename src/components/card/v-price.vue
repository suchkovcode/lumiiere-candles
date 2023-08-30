<template>
   <p class="price">
      <span class="price__currency">$</span>
      <span class="price__value">{{ priceData }}</span>
   </p>
</template>

<script>
export default {
   props: {
      priceData: {
         type: String,
         required: true,
      },
   },
};
</script>
