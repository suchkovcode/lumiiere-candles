<template>
   <p class="price">
      <span class="price__new">
         <span class="price__value"> {{ priceNew }} </span>
         <span class="price__currency"> {{ priceCurrency }} </span>
      </span>
      <del v-if="priceOld" class="price__old">
         <span class="price__value"> {{ priceOld }} </span>
         <span class="price__currency--old"> {{ priceCurrency }} </span>
      </del>
   </p>
</template>

<script setup>
const props = defineProps({
   priceNew: {
      type: [Number, Boolean],
      required: true,
   },

   priceOld: {
      type: [Number, Boolean],
      required: true,
   },

   priceCurrency: {
      type: String,
      required: true,
   },
});
</script>
